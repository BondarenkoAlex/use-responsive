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
import { useCallback, useState, useRef } from 'react';
import { useResizeObserverListener } from './useResizeObserverListener';
import { supportResizeObserver } from './supportResizeObserver';
import { defaultQueryFn } from './constants';
import { getKeyByTrueValue } from '../share/getKeyByTrueValue';
var DEFAULT_OBJ = {};
export var useResizeObserver = function (_a) {
    var device = _a.device, queriesObserver = _a.queriesObserver;
    var ref = useRef();
    if (!supportResizeObserver) {
        return [device, ref, DEFAULT_OBJ];
    }
    var _b = __read(useState(device), 2), newDeviceDefault = _b[0], setNewDeviceDefault = _b[1];
    var _c = __read(useState(DEFAULT_OBJ), 2), newDeviceCustomObj = _c[0], setNewDeviceCustomObj = _c[1];
    var handle = useCallback(function (width) {
        var newDefaultObjState = calculateState(defaultQueryFn, width);
        var device = getKeyByTrueValue(newDefaultObjState);
        setNewDeviceDefault(device);
        var newCustomObjState = calculateState(queriesObserver, width);
        setNewDeviceCustomObj(function (prevState) {
            var isNotEqual = Object.keys(newCustomObjState).some(function (key) { return prevState[key] !== newCustomObjState[key]; });
            return isNotEqual ? newCustomObjState : prevState;
        });
    }, []);
    useResizeObserverListener(handle, ref);
    return [newDeviceDefault, ref, newDeviceCustomObj];
};
function calculateState(customQueryObjFn, width) {
    var newState = {};
    if (!!customQueryObjFn) {
        Object.entries(customQueryObjFn).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], queryFn = _b[1];
            newState[key] = queryFn(width);
        });
    }
    return newState;
}
//# sourceMappingURL=useResizeObserver.js.map