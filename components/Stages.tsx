import { useGLTF, Float } from '@react-three/drei';
import dynamic from 'next/dynamic';
import Floor from './Floor';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { MathUtils } from 'three';

const RollingPin = dynamic(() => import('../components/KitchenItems').then((mod) => mod.Model), {
	ssr: false,
});
const Telescope = dynamic(() => import('../components/Telescope').then((mod) => mod.Model), {
	ssr: false,
});
const LOD = dynamic(() => import('../components/LOD').then((mod) => mod.LODS), {
	ssr: false,
});
const Door10 = dynamic(() => import('../components/10').then((mod) => mod.Model), {
	ssr: false,
});
const Door25 = dynamic(() => import('../components/25').then((mod) => mod.Model), {
	ssr: false,
});
const Door50 = dynamic(() => import('../components/50').then((mod) => mod.Model), {
	ssr: false,
});
const Door75 = dynamic(() => import('../components/75').then((mod) => mod.Model), {
	ssr: false,
});
const Door100 = dynamic(() => import('../components/100').then((mod) => mod.Model), {
	ssr: false,
});
const meshes = [RollingPin];
export default function Stages() {
	const [telescopeStage, setTelescopeStage] = useState(false);
	useFrame((state, delta) => {
		// if (state.camera.position.y < 0) state.camera.position.y = 0; // prevents camera from going below floor
		// console.log(state.controls.zoomSpeed);
		// state.controls.zoomSpeed = 2;
	});
	// const doorwayDistances = [0, 30, 45, 60, 100];
	const doorwayDistances = [0, 10, 20, 30, 40];
	return (
		<>
			{/* <LOD models={doorwayModels} /> */}
			<Float
				speed={1} // Animation speed, defaults to 1
				rotationIntensity={1} // XYZ rotation intensity, defaults to 1
				floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
				floatingRange={[-0.5, 0.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
			>
				<LOD models={meshes} distances={doorwayDistances} />
				{/* <mesh /> */}
			</Float>
		</>
	);
}
