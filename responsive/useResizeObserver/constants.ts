import { BREAKPOINTS } from '../share/constants';

export const defaultQueryFn = {
	mobile: (width: number) => width < BREAKPOINTS.sm,
	tablet: (width: number) => BREAKPOINTS.sm <= width && width < BREAKPOINTS.hsm,
	desktop: (width: number) => width >= BREAKPOINTS.hsm
};
