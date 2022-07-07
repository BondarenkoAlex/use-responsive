import React, { useEffect } from 'react';
import { resizeObserver } from './resizeObserver';

export const useResizeObserverListener = (callback: (width: number) => void, ref:  React.RefObject<HTMLElement>) => {
	useEffect(() => {
		if (!!ref.current) {
			const observer = resizeObserver((width: number) => callback(width));
			observer.observe(ref.current);

			return () => observer.unobserve(ref.current as HTMLElement);
		}
	}, [ref.current]);
};
