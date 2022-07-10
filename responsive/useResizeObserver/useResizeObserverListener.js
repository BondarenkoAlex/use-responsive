import { useEffect } from 'react';
import { resizeObserver } from './resizeObserver';
export var useResizeObserverListener = function (callback, ref) {
    useEffect(function () {
        if (!!ref.current) {
            var observer_1 = resizeObserver(function (width) { return callback(width); });
            observer_1.observe(ref.current);
            return function () { return observer_1.unobserve(ref.current); };
        }
    }, [ref.current]);
};
//# sourceMappingURL=useResizeObserverListener.js.map