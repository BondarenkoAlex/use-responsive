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
import { useEffect, useState } from 'react';
export var useMediaQueryListener = function (mediaQueryList) {
    var _a = __read(useState(false), 2), matches = _a[0], setMatch = _a[1];
    useEffect(function () {
        if (!mediaQueryList) {
            return;
        }
        var changeHandle = function (_a) {
            var matches = _a.matches;
            return setMatch(matches);
        };
        changeHandle(mediaQueryList);
        mediaQueryList.addEventListener('change', changeHandle);
        return function () { return mediaQueryList.removeEventListener('change', changeHandle); };
    }, [mediaQueryList]);
    return matches;
};
//# sourceMappingURL=useMediaQueryListener.js.map