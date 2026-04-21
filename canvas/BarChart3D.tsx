"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function BarChart() {
  const groupRef = useRef<THREE.Group>(null);
  const barsRef = useRef<THREE.Mesh[]>(Array(7).fill(null));

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x = Math.PI / 8;
    }

    barsRef.current.forEach((bar, i) => {
      if (bar) {
        const targetHeight = 1 + Math.abs(Math.sin(time + i)) * 2;
        bar.scale.y = THREE.MathUtils.lerp(bar.scale.y, targetHeight, 0.1);
        bar.position.y = bar.scale.y / 2;
      }
    });
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <mesh
          key={`bar-${i}`}
          position={[(i - 3) * 0.6, 0, 0]}
          ref={(el) => {
            if (el) barsRef.current[i] = el;
          }}
        >
          <boxGeometry args={[0.4, 1, 0.4]} />
          <meshPhysicalMaterial
            color="#C8A96E"
            metalness={0.2}
            clearcoat={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function BarChart3D({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas frameloop="always" camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 2]} intensity={1.2} />
        <BarChart />
      </Canvas>
    </div>
  );
}
