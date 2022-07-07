import { useMemo } from 'react';
import { useMediaQueryListener } from './useMediaQueryListener';
import { matchMedia } from './matchMedia';
import { defaultQueryFn } from './constants';
import { getKeyByTrueValue } from '../share/getKeyByTrueValue';
import {TDeviceType} from "../share/types";

const mql = {
	mobile: matchMedia(defaultQueryFn.mobile),
	tablet: matchMedia(defaultQueryFn.tablet),
	desktop: matchMedia(defaultQueryFn.desktop)
};

export const useMatchMediaDefault = (device: TDeviceType) => {
	const matchesMobile = useMediaQueryListener(mql.mobile as MediaQueryList, device === 'mobile');
	const matchesTablet = useMediaQueryListener(mql.tablet as MediaQueryList, device === 'tablet');
	const matchesDesktop = useMediaQueryListener(mql.desktop as MediaQueryList, device === 'desktop');

	return useMemo(
		() => getKeyByTrueValue({
			mobile: matchesMobile && !matchesTablet,
			tablet: matchesTablet && !matchesDesktop,
			desktop: matchesDesktop,
		}),
		[matchesMobile, matchesTablet, matchesDesktop],
	);
};
