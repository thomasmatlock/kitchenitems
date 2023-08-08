import dynamic from 'next/dynamic';
import Floor from './Floor';
import { OrbitControls, Sky } from '@react-three/drei';

// import Atmosphere from './Atmosphere';
// import Scene from './Stages';
import React, { lazy, Suspense, useRef, useState, useContext } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
// import Controls from './Controls';
// import Camera from './Camera';
import DeviceContextProvider from '../store/deviceContext';
import AppContextProvider from '../store/appContext';
import { Perf } from 'r3f-perf';
import Stages from '../components/Stages';
import { useControls } from 'leva';

import * as THREE from 'three';
import PreloaderOrbits from '../components/Preloaders/PreloaderOrbits';

// extend({ Controls });
function EveryFrame() {
	useFrame((state, delta) => {
		if (state.camera.position.y < 0) state.camera.position.y = 0; // prevents camera from going below floor
		// console.log(state.camera.zoom);
		// console.log(
		// 	state.camera.position.x.toFixed(2),
		// 	state.camera.position.y.toFixed(2),
		// 	state.camera.position.z.toFixed(2)
		// );
		// console.log(
		// 	state.controls.target.x.toFixed(2),
		// 	state.controls.target.y.toFixed(2),
		// 	state.controls.target.z.toFixed(2)
		// );
	});
	return null;
}
export default function Main(props) {
	const deviceCtx = useContext(DeviceContextProvider);
	const appCtx = useContext(AppContextProvider);
	// const { debug, enabled, samples, ...config } = useControls({
	// 	debug: true,
	// 	enabled: true,
	// 	size: { value: 35, min: 0, max: 100, step: 0.1 },
	// 	focus: { value: 0.5, min: 0, max: 2, step: 0.1 },
	// 	samples: { value: 16, min: 1, max: 40, step: 1 },
	// });
	return (
		<Suspense fallback={<PreloaderOrbits theme="dark" />}>
			<Canvas
				flat
				shadows
				dpr={[1, 2]}
				gl={{
					powerPreference: 'high-performance',
					antialias: true,
					logarithmicDepthBuffer: true,
				}}
				camera={{
					fov: 100,
					near: 0.1,
					far: 1000,
					zoom: deviceCtx.isMobile ? 2.5 : 5,
					// position: [-1, 0.9, 1.5],
					position: [-5, 5, 10],
				}}
			>
				{appCtx.isDevMode && <Perf position={'top-left'} matrixUpdate />}

				<OrbitControls
					makeDefault
					enableDamping={true}
					dampingFactor={0.15}
					// autoRotate={true}
					// autoRotateSpeed={-0.5}
					enablePan={true}
					enableZoom={true}
					enableRotate={true}
					// target={[0.08, 0.3, -0.08]}
					target={[0, 1.5, -2.55]}
				/>
				<color args={['#fff']} attach="background" />
				<directionalLight intensity={1} />
				<ambientLight intensity={1} color="#fff" />
				<Stages />
				<EveryFrame />
			</Canvas>
		</Suspense>
	);
}
