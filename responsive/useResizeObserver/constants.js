import { BREAKPOINTS } from '../share/constants';
export var defaultQueryFn = {
    mobile: function (width) { return width < BREAKPOINTS.sm; },
    tablet: function (width) { return BREAKPOINTS.sm <= width && width < BREAKPOINTS.hsm; },
    desktop: function (width) { return width >= BREAKPOINTS.hsm; },
};
//# sourceMappingURL=constants.js.map