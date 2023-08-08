import { createContext, useState, useEffect } from 'react';

const DeviceContext = createContext({
	isMobile: false,
});

export function DeviceContextProvider(props) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (window.innerWidth < 768) {
			setIsMobile(true);
		}
	}, []);

	return (
		<DeviceContext.Provider
			value={{
				isMobile,
			}}
		>
			{props.children}
		</DeviceContext.Provider>
	);
}

export default DeviceContext;
