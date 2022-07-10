import { useEffect, useState } from 'react';

export const useMediaQueryListener = (mediaQueryList: MediaQueryList) => {
	const [matches, setMatch] = useState<boolean>(false);

	useEffect(() => {
		if (!mediaQueryList) {
			return;
		}

		const changeHandle = ({ matches }: { matches: boolean }) => setMatch(matches);

		changeHandle(mediaQueryList);

		mediaQueryList.addEventListener('change', changeHandle);

		return () => mediaQueryList.removeEventListener('change', changeHandle);
	}, [mediaQueryList]);

	return matches;
};
