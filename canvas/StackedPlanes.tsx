"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function StackedPlanesGroup() {
  const groupRef = useRef<THREE.Group>(null);
  const planesRef = useRef<THREE.Mesh[]>(Array(5).fill(null));

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.PI / 4;
      groupRef.current.rotation.y = Math.PI / 4;
    }

    planesRef.current.forEach((plane, i) => {
      if (plane) {
        const offset = i * 0.5;
        const bob = Math.sin(time * 1.5 + offset) * 0.1;
        plane.position.y = i * 0.3 - 0.6 + bob;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh
          key={`plane-${i}`}
          ref={(el) => {
            if (el) planesRef.current[i] = el;
          }}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[3, 3]} />
          <meshPhysicalMaterial
            color="#F0EDE6"
            clearcoat={1}
            transparent={true}
            opacity={0.8 - i * 0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function StackedPlanes({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas frameloop="always" camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 2]} intensity={1} />
        <StackedPlanesGroup />
      </Canvas>
    </div>
  );
}
