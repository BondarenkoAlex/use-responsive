import { useState, useEffect } from 'react';
import { useMediaQueryListener } from './useMediaQueryListener';
import { matchMedia } from './matchMedia';
import { defaultQueryFn } from './constants';
import { getKeyByTrueValue } from '../share/getKeyByTrueValue';
import { TDeviceType } from '../share/types';

const mql = {
	mobile: matchMedia(defaultQueryFn.mobile),
	tablet: matchMedia(defaultQueryFn.tablet),
	desktop: matchMedia(defaultQueryFn.desktop),
};

export const useMatchMediaDefault = (device: TDeviceType) => {
	const [newDevice, setNewDevice] = useState(device);

	const matchesMobile = useMediaQueryListener(mql.mobile as MediaQueryList);
	const matchesTablet = useMediaQueryListener(mql.tablet as MediaQueryList);
	const matchesDesktop = useMediaQueryListener(mql.desktop as MediaQueryList);

	console.log('newDevice', newDevice);
	useEffect(() => {
		const newDevice = getKeyByTrueValue({
			mobile: matchesMobile && !matchesTablet,
			tablet: matchesTablet && !matchesDesktop,
			desktop: matchesDesktop,
		});

		if (newDevice !== undefined) {
			setNewDevice(newDevice as TDeviceType);
		}
	}, [matchesMobile, matchesTablet, matchesDesktop]);

	return newDevice;
};
