import React from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

interface BackgroundProps {
  imageUrl?: string;
}

export default function SphereBg({ imageUrl = '' }: BackgroundProps) {
  // 이미지 URL이 없으면 아무것도 렌더링하지 않음
  if (!imageUrl) return null;
  
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  return (
    <mesh
      scale={[1, 1, 1]}
      position={[0, 13.5, 0]}
      rotation={[0, 5, 0]} // Rotate 100 degrees around the y-axis
    >
      <sphereGeometry args={[15, 15, 15]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}
