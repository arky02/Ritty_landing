import { Canvas } from '@react-three/fiber';
import CanvasLights from '../threejs/CanvasLights';
import CameraControl from '../threejs/CameraControl';
import SphereBg from '../threejs/SphereBg';
import { Vector3Tuple } from 'three';
import Object3D, { AvatarInfo } from '../threejs/Object3D';
import { useState } from 'react';

const ThreeJSRitty = () => {
  const cameraStates = {
    position: [0, 70, 20] as Vector3Tuple, // 정확히 위에서 내려다보기
    target: [0, 10, 0] as Vector3Tuple,  // 카메라 시선
  }

  const spacing = 4.3;
   const position =  [spacing,
    -5, // 작을수록 내려감
    0,
  ] as Vector3Tuple;


  const bgTextureUrl = '/images/heroImg1.png';

  const avatar: AvatarInfo = {
    url: '/model/ritty.glb',
    idle_motion_path: '/model/ritty.glb',
  };

    return (
        <div className='w-full h-[200px]'>
          <Canvas style={{ height: '100%' }}>
            <CanvasLights />
            {/* <SphereBg imageUrl={bgTextureUrl} /> */}
            <CameraControl
              position={cameraStates.position}
              target={cameraStates.target}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2.5}
              fov={40}
              enableInteraction={false}
            />
            <Object3D 
              avatar={avatar} 
              position={position} 
              // rotation={[0, Math.PI / 2, 0]}
            />
          </Canvas>
        </div>
    )
}

export default ThreeJSRitty;
