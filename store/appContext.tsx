import { createContext, useState, useEffect, useContext } from 'react';
import DeviceContextProvider from '../store/appContext';

const AppContext = createContext({
	isDevMode: false,
	isHoveringRings: false,
	hasUserInteracted: false,
	setUserHasClicked: () => {},
	setHoveringRings: () => {},
	setNotHoveringRings: () => {},
});

export function AppContextProvider(props) {
	const deviceCtx = useContext(DeviceContextProvider);

	const [isDevMode, setIsDevMode] = useState(
		process.env.NODE_ENV === 'development' ? true : false
	);

	const [isHoveringRings, setIsHoveringRings] = useState(false);
	const [isAudioPlaying, setIsAudioPlaying] = useState(false);
	const [hasUserInteracted, setHasUserInteracted] = useState(false);
	// console.log(window.location.toString());

	const setUserHasClicked = () => {
		setHasUserInteracted(true);
	};
	const setHoveringRings = () => {
		setIsHoveringRings(true);
	};
	const setNotHoveringRings = () => {
		setIsHoveringRings(false);
	};
	return (
		<AppContext.Provider
			value={{
				isDevMode,
				isHoveringRings,
				hasUserInteracted,
				setUserHasClicked,
				setHoveringRings,
				setNotHoveringRings,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
}

export default AppContext;
