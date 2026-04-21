"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRefs = useRef<THREE.Mesh[]>(Array(3).fill(null));

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        (state.mouse.y * Math.PI) / 10,
        0.1,
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        (state.mouse.x * Math.PI) / 10,
        0.1,
      );
    }

    orbitRefs.current.forEach((ref, i) => {
      if (ref) {
        const time = state.clock.getElapsedTime();
        const radius = 2.5 + i * 0.5;
        const speed = 0.5 + i * 0.2;
        ref.position.x = Math.sin(time * speed + i * Math.PI) * radius;
        ref.position.z = Math.cos(time * speed + i * Math.PI) * radius;
        ref.position.y = Math.sin(time * speed * 0.5 + i) * 1.5;
      }
    });
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />
      <pointLight position={[-4, 4, -4]} color="#FFF3D6" intensity={0.8} />

      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color="#F0EDE6"
          metalness={0.15}
          roughness={0.08}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          envMapIntensity={1.2}
        />
      </mesh>

      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) orbitRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshPhysicalMaterial
            color="#C8A96E"
            metalness={0.3}
            roughness={0.08}
            clearcoat={1.0}
            clearcoatRoughness={0.05}
            envMapIntensity={1.2}
          />
        </mesh>
      ))}

      <ContactShadows position={[0, -1.8, 0]} opacity={0.08} blur={2.2} />
      <Environment preset="apartment" />
    </>
  );
}

export default function HeroObject({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas frameloop="demand" camera={{ position: [0, 0, 8], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
