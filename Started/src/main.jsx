import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { useRef, useFrame } from 'react';

function RotatingBox() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <Box args={[1, 1, 1]} /> {/* Box is nested inside the mesh */}
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function BoxModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} />
      <pointLight position={[10, -10, 10]} />
      <pointLight position={[-10, 10, -10]} />
      <RotatingBox />
    </Canvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BoxModel />
  </React.StrictMode>
);
