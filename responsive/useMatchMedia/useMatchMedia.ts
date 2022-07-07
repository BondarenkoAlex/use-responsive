import {useMatchMediaDefault} from './useMatchMediaDefault';
import {useMatchMediaCustom} from './useMatchMediaCustom';
import {supportMatchMedia} from './supportMatchMedia';
import {
	TDeviceType,
	TDeviceTypeTrueFalse,
	TQueries,
	TResponsiveProps
} from "../share/types";

type TMatchMediaProps =
	Pick<TResponsiveProps, 'device'> & {
	queriesMedia: TQueries['media']
};

export const useMatchMedia = ({
  device,
  queriesMedia
}: TMatchMediaProps): [TDeviceType, TDeviceTypeTrueFalse] => {
	if (!supportMatchMedia) {
		return [device, {}];
	}

	const newDeviceDefault = useMatchMediaDefault(device) as TDeviceType;
	const matchesCustomQueryObj = useMatchMediaCustom(queriesMedia);

	return [newDeviceDefault, matchesCustomQueryObj];
};
