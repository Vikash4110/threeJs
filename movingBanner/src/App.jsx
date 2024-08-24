import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Banner from './Banner';

const App = () => {
  return (
    <div className="bg-gray-400" > 
    <Canvas style={{ height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Banner />
      <OrbitControls />
    </Canvas>
    </div>
  );
};

export default App;
