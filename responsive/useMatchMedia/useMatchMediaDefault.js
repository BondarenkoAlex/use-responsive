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
import { useState, useEffect } from 'react';
import { useMediaQueryListener } from './useMediaQueryListener';
import { matchMedia } from './matchMedia';
import { defaultQueryFn } from './constants';
import { getKeyByTrueValue } from '../share/getKeyByTrueValue';
var mql = {
    mobile: matchMedia(defaultQueryFn.mobile),
    tablet: matchMedia(defaultQueryFn.tablet),
    desktop: matchMedia(defaultQueryFn.desktop),
};
export var useMatchMediaDefault = function (device) {
    var _a = __read(useState(device), 2), newDevice = _a[0], setNewDevice = _a[1];
    var matchesMobile = useMediaQueryListener(mql.mobile);
    var matchesTablet = useMediaQueryListener(mql.tablet);
    var matchesDesktop = useMediaQueryListener(mql.desktop);
    console.log('newDevice', newDevice);
    useEffect(function () {
        var newDevice = getKeyByTrueValue({
            mobile: matchesMobile && !matchesTablet,
            tablet: matchesTablet && !matchesDesktop,
            desktop: matchesDesktop,
        });
        if (newDevice !== undefined) {
            setNewDevice(newDevice);
        }
    }, [matchesMobile, matchesTablet, matchesDesktop]);
    return newDevice;
};
//# sourceMappingURL=useMatchMediaDefault.js.map