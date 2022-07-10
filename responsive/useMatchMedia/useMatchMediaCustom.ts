/* eslint-disable react-hooks/rules-of-hooks */
import { useMediaQueryListener } from './useMediaQueryListener';
import { matchMedia } from './matchMedia';
import { TDeviceTypeTrueFalse, TMedia } from '../share/types';

export const useMatchMediaCustom = (customQueryObj: TMedia = {}) => {
	const result: TDeviceTypeTrueFalse = {};
	Object.entries(customQueryObj).forEach(([key, customQuery]) => {
		var mql = matchMedia(customQuery);
		result[key] = useMediaQueryListener(mql as MediaQueryList);
	});
	return result;
};
