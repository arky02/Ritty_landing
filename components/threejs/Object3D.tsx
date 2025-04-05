import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Vector3Tuple } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import useAnimation from '@/hooks/useAnimation';

export const VisemePrefix = 'viseme_';
export const Lerp_Speed = 0.1;
export const EyeBlinkKey = ['eyeBlinkLeft', 'eyeBlinkRight'];

const MAX_GLTF_LOAD_RETRY_COUNT = 1; // 아바타 로딩 최대 재시도 횟수
const GLTF_RELOAD_DELAY = 1000; // 에러 발생 이후 1초 후 아바타 로딩 재시도

export type AvatarInfo = {
  url: string;
  idle_motion_path: string;
};

interface CharacterProps {
  avatar: AvatarInfo;
  visible?: boolean;
  position: Vector3Tuple;
  scale?: Vector3Tuple;
  // rotation?: Vector3Tuple;
  playAnimation?: boolean; // 애니메이션 재생 여부
}

const Object3D = ({
  avatar,
  visible,
  position,
  scale = [8, 8, 8], // Default scale is [1, 1, 1]
  // rotation = [0, 0, 0], // Default rotation
  playAnimation = true, // 기본적으로 애니메이션 재생
}: CharacterProps) => {
  const { url: avatarUrl, idle_motion_path: idleMotion } = avatar;

  const [scene, setScene] = useState<THREE.Group>();
  const [animations, setInitialAnimations] = useState<THREE.AnimationClip[]>([]);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const actionRef = useRef<THREE.AnimationAction | null>(null);

  const [rotation, setRotation] = useState<Vector3Tuple>([0, Math.PI / 2 - 0.2, 0]);
  const [dynamicPosition, setDynamicPosition] = useState<Vector3Tuple>(position);

  const loader = useMemo(() => new GLTFLoader(), []);
  loader.setMeshoptDecoder(MeshoptDecoder);

  useEffect(() => {
    if (scene) {
      scene.traverse((x) => {
        if (
          x instanceof THREE.Mesh &&
          x.material instanceof THREE.MeshStandardMaterial
        ) {
          x.material.roughness = 0.7; // 거칠기 조정
          x.material.metalness = 0.05; // 금속성 조정
          x.material.envMapIntensity = 1; // HDR 조명 강화
        } else if (x instanceof THREE.Mesh && Array.isArray(x.material)) {
          // 다중 재질 메시 처리
          x.material.forEach((mat) => {
            if (mat instanceof THREE.MeshStandardMaterial) {
              mat.roughness = 0.7;
              mat.metalness = 0.05;
              mat.envMapIntensity = 1;
            }
          });
        }
      });
    }
  }, [scene]);

  // 애니메이션 재생 효과
  useEffect(() => {
    if (scene && animations.length > 0 && playAnimation) {
      const mixer = new THREE.AnimationMixer(scene);
      mixerRef.current = mixer;
      
      // 현재 재생 중인 애니메이션 인덱스
      let currentAnimIndex = 0;
      
      console.log('애니메이션 초기화');

      // 일반적인 애니메이션 전환에 대한 이벤트 리스너
      mixer.addEventListener('finished', () => {
        console.log('애니메이션 완료');
        // 첫 번째 애니메이션은 시간 제한으로 처리하므로, 두 번째 이후 애니메이션만 여기서 처리
        // if (currentAnimIndex > 0) {
        //   currentAnimIndex = (currentAnimIndex + 1) % animations.length;
        //   // 마지막 애니메이션이 끝나면 다시 첫 번째로 돌아가지 않고 두 번째 애니메이션부터 순환
        //   if (currentAnimIndex === 0) {
        //     currentAnimIndex = 1;
        //   }
        //   playNextAnimation();
        // }
        const sitIdle = animations[7];
        const action3 = mixer.clipAction(sitIdle);
        action3.reset().fadeIn(1);

        action3.clampWhenFinished = true;
        action3.loop = THREE.LoopRepeat; 

        action3.play();
        actionRef.current = action3;
      });

      // 시작 위치 설정 (화면 왼쪽)
      setDynamicPosition([-45, position[1], position[2]]);

      // 애니메이션 재생 함수
      const playNextAnimation = () => {
        const walk = animations[5];
        const clip = animations[currentAnimIndex];
          console.log(`애니메이션 ${currentAnimIndex} 재생: ${clip.name}`);
          
          const action = mixer.clipAction(walk);
          
          // 이전 액션이 있으면 정지
          if (actionRef.current) {
            actionRef.current.stop();
          }
          
          // 부드러운 전환을 위한 페이드 인
          action.reset().fadeIn(1);

          action.loop = THREE.LoopRepeat; // 7초 동안 반복 재생

          action.play();
          actionRef.current = action;
          
          // 왼쪽에서 오른쪽으로 이동 애니메이션 추가
          let startTime = Date.now();
          const moveInterval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            // 7초 동안 왼쪽에서 오른쪽으로 이동
            if (elapsedTime < 3000) {
              const progress = elapsedTime / 3000; // 0 ~ 1 사이 값
              const newX = -45 + (45 * progress); // -45에서 10까지 이동
              setDynamicPosition([newX, position[1], position[2]]);
            } else {
              clearInterval(moveInterval);
            }
          }, 16); // 약 60fps
            
            // 7초 후 두 번째 애니메이션으로 전환
            setTimeout(() => {
              console.log('첫 번째 애니메이션 7초 완료, 두 번째로 전환');
              if (actionRef.current) {
                // 페이드 아웃으로 부드럽게 전환
                actionRef.current.fadeOut(1).stop();
                
                // 회전 부드럽게 변경하기
                const startRotation = [0, Math.PI / 2 - 0.2, 0] as Vector3Tuple;
                const endRotation = [0, 0, 0] as Vector3Tuple;
                const rotationDuration = 1000; // 1초 동안 회전
                const rotationStartTime = Date.now();
                
                const rotationInterval = setInterval(() => {
                  const elapsed = Date.now() - rotationStartTime;
                  const progress = Math.min(elapsed / rotationDuration, 1);
                  
                  // 부드러운 이징 효과 (easeOutQuad)
                  const easeProgress = 1 - (1 - progress) * (1 - progress);
                  
                  const newRotation: Vector3Tuple = [
                    startRotation[0] + (endRotation[0] - startRotation[0]) * easeProgress,
                    startRotation[1] + (endRotation[1] - startRotation[1]) * easeProgress,
                    startRotation[2] + (endRotation[2] - startRotation[2]) * easeProgress
                  ];
                  
                  setRotation(newRotation);
                  
                  if (progress >= 1) {
                    clearInterval(rotationInterval);
                  }
                }, 16);
              }
              
              clearInterval(moveInterval);
              // 중앙으로 위치 조정
              setDynamicPosition([position[0], position[1], position[2]]);

              const sit = animations[6];
              const action2 = mixer.clipAction(sit);

               action2.clampWhenFinished = true;
               action2.loop = THREE.LoopOnce; 

               action2.play();
               actionRef.current = action2;

              // currentAnimIndex = 1;
              // playNextAnimation();
            }, 3000); // 7초
      };
      
      // 첫 번째 애니메이션 시작
      playNextAnimation();
      
      // 애니메이션 업데이트를 위한 프레임 루프
      const clock = new THREE.Clock();
      let frameId: number;
      
      const animate = () => {
        frameId = requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixer.update(delta);
      };
      
      animate();
      
      return () => {
        cancelAnimationFrame(frameId);
        if (actionRef.current) {
          actionRef.current.stop();
        }
        console.log('애니메이션 종료 111');

        

        // 이벤트 리스너 제거
        // mixer.removeEventListener('finished', () => {});
      };
    }
  }, [scene]);

  useEffect(() => {
    let timeout;

    const loadModel = (
      url: string,
      retryCount: number,
    ) => {
      if (!url) return;

      loader.load(
        url,
        (gltf) => {
          console.log('gltf', gltf);
          setScene(gltf.scene);
          
          // 애니메이션 클립 저장
          if (gltf.animations && gltf.animations.length > 0) {
            console.log('Animation clips found:', gltf.animations.length);
            setInitialAnimations(gltf.animations);
          } else {
            console.log('No animations found in model');
          }
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (error) => {
          // 아바타 or idle 모션 로딩 실패
          console.error(`${url} 로드 실패:`, error);

          if (
            MAX_GLTF_LOAD_RETRY_COUNT > retryCount
          ) {
            timeout = setTimeout(() => {
              console.error(`Failed to Load ${url}. Trying to load again.`);
            
              loadModel(url, ++retryCount);
            }, GLTF_RELOAD_DELAY);
          } else {
            console.error(`Failed to Load ${url}.`); 
          }
        },
      );
    };

    loadModel(avatarUrl, 0);

    return timeout && clearTimeout(timeout);
  }, [avatarUrl, idleMotion]);

  return (
    <>
      {scene && (
        <>
          <primitive
            key={'id'}
            visible={visible}
            object={scene}
            position={dynamicPosition}
            rotation={rotation}
            scale={scale} // Apply the scale here
          />
        </>
      )}
    </>
  );
}

export default Object3D;