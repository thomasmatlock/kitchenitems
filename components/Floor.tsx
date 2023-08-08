import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { SoftShadows } from '@react-three/drei';
import { useControls } from 'leva';
export default function Floor() {
	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
			<planeGeometry args={[100, 100]} />
			<shadowMaterial transparent opacity={0.4} />
		</mesh>
	);
}
