import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { AvatarInfo } from '@/components/threejs/Object3D';

interface useAnimationProps {
  scene?: THREE.Object3D;
  avatar: AvatarInfo;

}

const useAnimation = ({ scene, avatar }: useAnimationProps) => {
  const mixer = useRef<THREE.AnimationMixer>(null!);
  // const cachedAnimation = useRef<THREE.AnimationClip>(null!);

  // const { setCurrentAnimation, setAnimationState } = useChatAvatarStore(
  //   (state) => ({
  //     setCurrentAnimation: state.setCurrentAnimation,
  //     setAnimationState: state.setAnimationState,
  //   }),
  // );

  // const avatarInfo = useCommonChatStore((state) => ({
  //   avatarInfo: state.avatarInfo,
  // }));
  // const findAvatarById = (id: string) => {
  //   return (
  //     avatarInfo.avatarInfo &&
  //     avatarInfo.avatarInfo.find((info) => info.id === id)
  //   );
  // };
  // const avatar = findAvatarById(id);

  useEffect(() => {
    if (!scene) return;

    mixer.current = new THREE.AnimationMixer(scene);
  }, [scene]);

  useEffect(() => {
    // let timeout: NodeJS.Timeout;
    const setAnimation = async () => {
      try {
          if (!avatar || !avatar.idle_motion_path) return;

          let target: THREE.AnimationClip;

          const loader = new GLTFLoader();
            const anim = await loader.loadAsync(avatar.idle_motion_path);
            target = anim?.animations[0];
        } catch (error) {
          console.error(`Failed to Load.`);
        }
    };
    setAnimation();

    // return () => clearTimeout(timeout);
  }, []);

  // useEffect(() => {
  //   if (!mixer.current) return;

  //   if (currentAnimation) {
  //     const action = mixer.current.clipAction(currentAnimation);
  //     const animationFadeDelay = animationState?.type === 'Idle' ? 0 : 1;

  //     action.reset().fadeIn(animationFadeDelay).play();

  //     return () => {
  //       action.fadeOut(1);
  //     };
  //   }
  // }, [currentAnimation?.uuid]);

  useFrame((_, delta) => {
    mixer?.current?.update(delta);
  });
};

export default useAnimation;
