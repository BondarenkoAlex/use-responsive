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
import { useResizeObserver } from '../useResizeObserver/index';
import { useMatchMedia } from '../useMatchMedia/index';
export var useResponsive = function (_a) {
    var _b, _c;
    var device = _a.device, _d = _a.queries, queries = _d === void 0 ? {} : _d;
    if (!device) {
        return ['mobile', undefined, {}];
    }
    var newDevice;
    var ref;
    var customNewDeviceObj;
    if (device === 'desktop') {
        _b = __read(useResizeObserver({
            device: device,
            queriesObserver: queries.observer,
        }), 3), newDevice = _b[0], ref = _b[1], customNewDeviceObj = _b[2];
    }
    else {
        _c = __read(useMatchMedia({ device: device, queriesMedia: queries.media }), 2), newDevice = _c[0], customNewDeviceObj = _c[1];
    }
    return [newDevice, ref, customNewDeviceObj];
};
//# sourceMappingURL=index.js.map
