import Head from 'next/head';
import { OrbitControls, Loader, Sky } from '@react-three/drei';
import { Fragment, useContext, useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';
import { AppContextProvider } from '../store/appContext';
import { DeviceContextProvider } from '../store/deviceContext';
import Header from '../components/Header';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { lazy, Suspense, useRef } from 'react';
import { Perf } from 'r3f-perf';
import PreloaderOrbits from '../components/Preloaders/PreloaderOrbits';
import Floor from '../components/Floor';
import Main from '../components/Main';

function EveryFrame() {
	useFrame((state, delta) => {
		if (state.camera.position.y < 0) state.camera.position.y = 0; // prevents camera from going below floor
	});
	return null;
}
export default function Home() {
	const [isDevelopment, setIsDevelopment] = useState(
		process.env.NODE_ENV === 'development' ? true : false
	);

	return (
		<DeviceContextProvider>
			<AppContextProvider>
				<div className={styles['app']}>
					<Header />
					<Main />
				</div>
			</AppContextProvider>
		</DeviceContextProvider>
	);
}
