import { TDeviceType } from './share/types';

export const convertResponsive = (device: TDeviceType, isShort: boolean = false) => {
	const deviceValue = isShort ? device.charAt(0) : device;
	return (obj: { [key: string]: unknown }, defValue: unknown) => obj[deviceValue] || defValue;
};
