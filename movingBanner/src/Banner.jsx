import React, { useRef, useState, Suspense } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Html, Text, useProgress } from '@react-three/drei';

const Robot = () => {
  const gltf = useLoader(GLTFLoader, '/robot.glb'); // Check and update the path as necessary
  return <primitive object={gltf.scene} />;
};

const Loader = () => {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};

const Banner = () => {
  const bannerRef = useRef();
  const robotRef = useRef();
  const [isStopped, setIsStopped] = useState(false);
  const speedFactor = 2; // Adjust this value to change the speed

  useFrame((state) => {
    if (!isStopped) {
      const time = state.clock.getElapsedTime();
      const newPositionX = 10 - (time * speedFactor);

      bannerRef.current.position.x = newPositionX;
      robotRef.current.position.x = newPositionX - 5;

      // Stop the animation when the robot reaches the center
      if (robotRef.current.position.x <= -4) {
        setIsStopped(true);
        state.clock.stop();
      }
    }
  });

  return (
    <>
      <mesh ref={bannerRef}>
        <boxGeometry args={[10, 2.5, 0.1]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <group ref={robotRef} position={[3, 0.3, 0]}>
        <Suspense fallback={<Loader />}>
          <Robot />
          <Text
            position={[5, 0, 0.06]}
            rotation={[0, 0, 0]}
            fontSize={0.70}
            color="#ADD8E6"
            anchorX="center"
            anchorY="middle"
          >
            Welcome to our Website
          </Text>
        </Suspense>
      </group>
    </>
  );
};

export default Banner;
