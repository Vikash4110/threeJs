import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Robot = () => {
  const gltf = useLoader(GLTFLoader, '/robot_a003_gITF.glb'); // Update path to your GLB file

  return (
    <group>
      <primitive object={gltf.scene} scale={[0.02, 0.02, 0.02]} position={[0, -1, 0]} />
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.8} position={[10, 10, 10]} angle={0.2} penumbra={1} />
    </group>
  );
};

export default Robot;
