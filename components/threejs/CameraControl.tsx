import { memo, useCallback, useEffect, useRef } from 'react';
import {
  OrbitControls,
  OrbitControlsProps,
  PerspectiveCamera,
} from '@react-three/drei';
import gsap from 'gsap';
import { Vector3Tuple } from 'three';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { PerspectiveCamera as ThreePerspectiveCamera } from 'three';

interface CameraControlProps extends OrbitControlsProps {
  position: Vector3Tuple;
  target: Vector3Tuple;
  animationDuration?: number;
  fov?: number;
enableInteraction?: boolean;
}

const CameraControl = 
  ({
    position,
    target,
    animationDuration = 2,
    fov = 40,
    enableInteraction,
    ...props
  }: CameraControlProps) => {
    const cameraRef = useRef<ThreePerspectiveCamera>(null);
    const orbitControlsRef = useRef<OrbitControlsImpl>(null);

    const { current: initState } = useRef({
      position,
      target,
    });

    const { current: curState } = useRef({
      position,
      target,
    });

    const animate = useCallback(
      (ref: React.RefObject<any>, property: string, newValue: Vector3Tuple) => {
        if (!ref.current) return;

        gsap.timeline().to(ref.current[property], {
          duration: animationDuration,
          x: newValue[0],
          y: newValue[1],
          z: newValue[2],
          ease: 'power3.inOut',
          repeat: 0,
        });
      },
      [animationDuration],
    );

    const isChanged = (prev: Vector3Tuple, current: Vector3Tuple) =>
      current.some((val, idx) => val !== prev[idx]);

    useEffect(() => {
      if (isChanged(curState.position, position)) {
        animate(cameraRef, 'position', position);
        curState.position = position;
      }
    }, [animate, curState, position]);

    useEffect(() => {
      if (isChanged(curState.target, target)) {
        animate(orbitControlsRef, 'target', target);
        curState.target = target;
      }
    }, [animate, curState, target]);

    return (
      <>
        <OrbitControls
          ref={orbitControlsRef}
          target={initState.target}
          {...props}
          enableZoom={false}
          enablePan={false}
          enableRotate={true}

        />
        <PerspectiveCamera
          ref={cameraRef}
          position={initState.position}
          fov={fov}
          makeDefault
        />
      </>
    );
  }


export default CameraControl;
