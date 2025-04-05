const CanvasLights = () => {
  return (
    <>
      <directionalLight
        position={[-20, 13.6, 20]}
        color={'#ffffff'}
        castShadow={true}
        intensity={0.9}
      />
      <directionalLight
        position={[2.3, 1.8, 18.5]}
        color={'#ffffff'}
        intensity={0.5}
      />
      <hemisphereLight groundColor={0x444444} intensity={1} />
      <ambientLight color={0xffffff} intensity={0.1} />
    </>
  );
};

export default CanvasLights;
