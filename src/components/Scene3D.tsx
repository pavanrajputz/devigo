
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Float, Text3D, Center } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingGeometry({ position, geometry, color, scale = 1 }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        position={position}
        scale={hovered ? scale * 1.2 : scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {geometry}
        <meshStandardMaterial 
          color={hovered ? '#ffffff' : color} 
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>
    </Float>
  );
}

function CodeParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.005;
    }
  });

  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#3b82f6" />
    </points>
  );
}

const Scene3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        {/* Floating geometric shapes */}
        <FloatingGeometry 
          position={[-2, 1, 0]} 
          geometry={<boxGeometry args={[0.8, 0.8, 0.8]} />} 
          color="#3b82f6" 
          scale={1}
        />
        
        <FloatingGeometry 
          position={[2, -1, -1]} 
          geometry={<sphereGeometry args={[0.6, 32, 32]} />} 
          color="#8b5cf6" 
          scale={1}
        />
        
        <FloatingGeometry 
          position={[0, 2, -2]} 
          geometry={<torusGeometry args={[0.6, 0.3, 16, 100]} />} 
          color="#06b6d4" 
          scale={1}
        />
        
        <FloatingGeometry 
          position={[-1, -2, 1]} 
          geometry={<octahedronGeometry args={[0.7]} />} 
          color="#f59e0b" 
          scale={1}
        />

        {/* Code particles */}
        <CodeParticles />
        
        {/* Interactive controls */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
