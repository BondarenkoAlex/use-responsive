import { RefObject } from 'react';
import { TDeviceType, TDeviceTypeTrueFalse, TResponsiveProps } from '../share/types';
export declare const useResponsive: ({ device, queries, }: TResponsiveProps) => [TDeviceType, RefObject<HTMLElement> | undefined, TDeviceTypeTrueFalse];
