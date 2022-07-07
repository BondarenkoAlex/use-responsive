import {useEffect, useState} from 'react';

export const useMediaQueryListener = (mediaQueryList: MediaQueryList, initValue: boolean) => {
	const [matches, setMatch] = useState(initValue);

	useEffect(() => {
		if (!mediaQueryList) {
			return;
		}

		const changeHandle = ({matches}: { matches: boolean }) => setMatch(matches);

		changeHandle(mediaQueryList);

		mediaQueryList.addEventListener('change', changeHandle);

		return () => mediaQueryList.removeEventListener('change', changeHandle);
	}, []);

	return matches;
};
