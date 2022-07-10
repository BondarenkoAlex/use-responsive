/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useState, useRef, RefObject } from 'react';
import { useResizeObserverListener } from './useResizeObserverListener';
import { supportResizeObserver } from './supportResizeObserver';
import { defaultQueryFn } from './constants';
import { getKeyByTrueValue } from '../share/getKeyByTrueValue';
import { TDeviceType, TDeviceTypeTrueFalse, TQueries, TResponsiveProps } from '../share/types';

const DEFAULT_OBJ = {};

type TResizeObserverProps = Pick<TResponsiveProps, 'device'> & {
	observer: TQueries['observer'];
};
type TObserver = TResizeObserverProps['observer'];

export const useResizeObserver = ({
	device,
	observer,
}: TResizeObserverProps): [TDeviceType, RefObject<HTMLElement>, TDeviceTypeTrueFalse] => {
	const ref = useRef() as RefObject<HTMLElement>;

	if (!supportResizeObserver) {
		return [device, ref, DEFAULT_OBJ];
	}

	const [newDeviceDefault, setNewDeviceDefault] = useState<TDeviceType>(device);
	const [newDeviceCustomObj, setNewDeviceCustomObj] = useState<TDeviceTypeTrueFalse>(DEFAULT_OBJ);

	const handle = useCallback((width: number) => {
		const newDefaultObjState = calculateState(defaultQueryFn, width);
		const device = getKeyByTrueValue(newDefaultObjState);
		setNewDeviceDefault(device as TDeviceType);

		const newCustomObjState = calculateState(observer, width);
		setNewDeviceCustomObj(prevState => {
			const isNotEqual = Object.keys(newCustomObjState).some(
				key => prevState[key] !== newCustomObjState[key],
			);

			return isNotEqual ? newCustomObjState : prevState;
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useResizeObserverListener(handle, ref);

	return [newDeviceDefault, ref, newDeviceCustomObj];
};

/**
 * Входные данные, например,
 * objFnQuery:{
 * 	mobile: (width) => width < BREAKPOINTS.sm,
 * 	tablet: (width) => BREAKPOINTS.sm <= width && width < BREAKPOINTS.hsm,
 * 	desktop: (width) => width >= BREAKPOINTS.hsm
 * }
 * На выходе: {
 *    mobile: true,
 *    tablet: false,
 *    desktop: false,
 * }
 * */
function calculateState(customQueryObjFn: TObserver, width: number) {
	const newState: TDeviceTypeTrueFalse = {};
	if (!!customQueryObjFn) {
		Object.entries(customQueryObjFn).forEach(([key, queryFn]) => {
			newState[key] = queryFn(width);
		});
	}
	return newState;
}
