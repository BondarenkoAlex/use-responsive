import { TDeviceType, TDeviceTypeTrueFalse, TQueries, TResponsiveProps } from '../share/types';
declare type TMatchMediaProps = Pick<TResponsiveProps, 'device'> & {
    queriesMedia: TQueries['media'];
};
export declare const useMatchMedia: ({ device, queriesMedia, }: TMatchMediaProps) => [TDeviceType, TDeviceTypeTrueFalse];
export {};
