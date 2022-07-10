var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { useMediaQueryListener } from './useMediaQueryListener';
import { matchMedia } from './matchMedia';
export var useMatchMediaCustom = function (customQueryObj) {
    if (customQueryObj === void 0) { customQueryObj = {}; }
    var result = {};
    Object.entries(customQueryObj).forEach(function (_a) {
        var _b = __read(_a, 2), key = _b[0], customQuery = _b[1];
        var mql = matchMedia(customQuery);
        result[key] = useMediaQueryListener(mql);
    });
    return result;
};
//# sourceMappingURL=useMatchMediaCustom.js.map