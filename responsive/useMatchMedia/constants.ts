import { BREAKPOINTS } from '../share/constants';

export const defaultQueryFn = {
	mobile: `(max-width: ${BREAKPOINTS.sm - 1}px)`,
	tablet: `(min-width: ${BREAKPOINTS.sm}px) and (max-width: ${BREAKPOINTS.hsm - 1}px)`,
	desktop: `(min-width: ${BREAKPOINTS.hsm}px)`,
};
