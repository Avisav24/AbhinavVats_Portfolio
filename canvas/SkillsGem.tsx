"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Gem() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.004;
      meshRef.current.rotation.y += 0.006;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <icosahedronGeometry args={[1, 2]} />
      <meshPhysicalMaterial
        color="#FFFFFF"
        metalness={0.05}
        roughness={0.0}
        transmission={0.9}
        transparent={true}
        ior={1.5}
        thickness={0.5}
      />
    </mesh>
  );
}

export default function SkillsGem({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas frameloop="always" camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1.5} />

        <Gem />

        <ContactShadows opacity={0.05} position={[0, -1.8, 0]} blur={2.5} />
        <Environment preset="apartment" />
      </Canvas>
    </div>
  );
}
