// import React, { useRef, useEffect } from 'react';
// import { useFrame } from '@react-three/fiber';
// import { useGLTF, useAnimations } from '@react-three/drei';
// import { Group } from 'three';

// interface GLTFModelProps {
//   modelPath: string;
//   scale?: number[];
//   position?: number[];
//   rotation?: number[];
// }

// export default function GLTFModel({
//   modelPath,
//   scale = [1, 1, 1],
//   position = [0, 0, 0],
//   rotation = [0, 0, 0],
// }: GLTFModelProps) {
//   const group = useRef<Group>(null);
//   const { scene, animations } = useGLTF(modelPath);
//   const { actions, names } = useAnimations(animations, group);

//   useEffect(() => {
//     // 애니메이션이 있으면 첫 번째 애니메이션 자동 재생
//     if (names.length > 0) {
//       for(let i = 0; i < names.length; i++) {
//         const action = actions[names[4]];
//         if (action) {
//           action.reset().play();
//         }
//       }
//     }
    
//     return () => {
//       // 컴포넌트 언마운트 시 애니메이션 정지
//       if (names.length > 0) {
//         for(let i = 0; i < names.length; i++) {
//           const action = actions[names[4]];
//           if (action) {
//             action.stop();
//           }
//         }
//       }
//     };
//   }, [actions, names]);

//   return (
//     <group ref={group} position={position as [number, number, number]} 
//            rotation={rotation as [number, number, number]} 
//            scale={scale as [number, number, number]}>
//       <primitive object={scene} />
//     </group>
//   );
// }

// // 모델 사전 로딩을 위한 설정
// useGLTF.preload('/public/model/ritty.glb'); 