/* eslint-disable react-hooks/rules-of-hooks */
import { useMatchMediaDefault } from './useMatchMediaDefault';
import { useMatchMediaCustom } from './useMatchMediaCustom';
import { supportMatchMedia } from './supportMatchMedia';
import { TDeviceType, TDeviceTypeTrueFalse, TQueries, TResponsiveProps } from '../share/types';

type TMatchMediaProps = Pick<TResponsiveProps, 'device'> & {
	media: TQueries['media'];
};

export const useMatchMedia = ({
	device,
	media,
}: TMatchMediaProps): [TDeviceType, TDeviceTypeTrueFalse] => {
	if (!supportMatchMedia) {
		return [device, {}];
	}

	const newDeviceDefault = useMatchMediaDefault(device);
	const matchesCustomQueryObj = useMatchMediaCustom(media);

	return [newDeviceDefault, matchesCustomQueryObj];
};
