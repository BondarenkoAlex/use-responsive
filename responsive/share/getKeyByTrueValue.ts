import { TDeviceTypeTrueFalse } from './types';

export const getKeyByTrueValue = (obj: TDeviceTypeTrueFalse) => {
	const [key] = Object.entries(obj).find(([key, value]) => value) || [];

	return key;
};
