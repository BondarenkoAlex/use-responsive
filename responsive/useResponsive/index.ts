import React, {RefObject} from "react";
import {useResizeObserver} from '../useResizeObserver';
import {useMatchMedia} from '../useMatchMedia';
import {
	TDeviceType,
	TDeviceTypeTrueFalse,
	TResponsiveProps
} from "../share/types";

export const useResponsive = ({
  device,
  queries = {},
}: TResponsiveProps): [TDeviceType, RefObject<HTMLElement> | undefined, TDeviceTypeTrueFalse] => {
	if (!device) {
		return ['mobile', undefined, {}];
	}

	let newDevice:TDeviceType;
	let ref: RefObject<HTMLElement> | undefined;
	let customNewDeviceObj:TDeviceTypeTrueFalse;

	if (device === 'desktop') {
		// для десктопа ориентируемся только на размер контейнера
		[newDevice, ref, customNewDeviceObj] = useResizeObserver({device, queriesObserver: queries.observer});
	} else {
		// для остальных устройств хорошо будет работать "media api"
		[newDevice, customNewDeviceObj] = useMatchMedia({device, queriesMedia: queries.media});
	}

	return [newDevice, ref, customNewDeviceObj];
};

