import { BREAKPOINTS } from '../share/constants';

export const defaultQueryFn = {
	mobile: `(max-width: ${BREAKPOINTS.sm}px)`,
	tablet: `(min-width: ${BREAKPOINTS.sm + 1}px) and (max-width: ${BREAKPOINTS.hsm}px)`,
	desktop: `(min-width: ${BREAKPOINTS.hsm}px)`
};
