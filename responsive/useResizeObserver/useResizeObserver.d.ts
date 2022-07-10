import { RefObject } from 'react';
import { TDeviceType, TDeviceTypeTrueFalse, TQueries, TResponsiveProps } from '../share/types';
declare type TResizeObserverProps = Pick<TResponsiveProps, 'device'> & {
    queriesObserver: TQueries['observer'];
};
export declare const useResizeObserver: ({ device, queriesObserver, }: TResizeObserverProps) => [TDeviceType, RefObject<HTMLElement>, TDeviceTypeTrueFalse];
export {};
