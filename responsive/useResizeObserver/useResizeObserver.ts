import {useCallback, useState, useRef, RefObject} from 'react';
import {useResizeObserverListener} from './useResizeObserverListener';
import {supportResizeObserver} from './supportResizeObserver';
import {defaultQueryFn} from './constants';
import {getKeyByTrueValue} from '../share/getKeyByTrueValue';
import {
	TDeviceType,
	TDeviceTypeTrueFalse,
	TQueries,
	TResponsiveProps
} from "../share/types";

const DEFAULT_OBJ = {};

type TResizeObserverProps =
	Pick<TResponsiveProps, 'device'> & {
	queriesObserver: TQueries['observer']
};
type TQueriesObserver = TResizeObserverProps['queriesObserver'];

export const useResizeObserver = ({
  device,
  queriesObserver
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

		const newCustomObjState = calculateState(queriesObserver, width);
		setNewDeviceCustomObj(prevState => {
			const isNotEqual = Object
				.keys(newCustomObjState)
				.some(key => prevState[key] !== newCustomObjState[key]);

			return isNotEqual ? newCustomObjState : prevState;
		});
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
function calculateState(customQueryObjFn: TQueriesObserver, width: number) {
	const newState: TDeviceTypeTrueFalse = {};
	if (!!customQueryObjFn) {
		Object.entries(customQueryObjFn).forEach(([key, queryFn]) => {
			newState[key] = queryFn(width);
		});
	}
	return newState;
}
