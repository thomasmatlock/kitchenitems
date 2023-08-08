import dynamic from 'next/dynamic';
import Floor from './Floor';
import { OrbitControls, Sky, Float } from '@react-three/drei';

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

export default function Main(props) {
	const deviceCtx = useContext(DeviceContextProvider);
	const appCtx = useContext(AppContextProvider);
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
					// zoom: deviceCtx.isMobile ? 2.5 : 5,
					zoom: deviceCtx.isMobile ? 5 : 10,
					// position: [-1, 0.9, 1.5],
					position: [0, 5, 10],
				}}
			>
				{appCtx.isDevMode && <Perf position={'top-left'} matrixUpdate />}
				<OrbitControls
					makeDefault
					enableDamping={true}
					dampingFactor={0.15}
					autoRotate={true}
					autoRotateSpeed={-0.5}
					enablePan={true}
					enableZoom={true}
					enableRotate={true}
					// target={[0.08, 0.3, -0.08]}
					target={[0, 0, 0]}
				/>
				<Sky
					distance={450000}
					sunPosition={[0, 1, 0]}
					inclination={0}
					azimuth={0.25}
					{...props}
				/>
				// <color args={['#000']} attach="background" />
				<directionalLight intensity={1} />
				<ambientLight intensity={0.5} color="#fff" />
				<Stages />
			</Canvas>
		</Suspense>
	);
}
