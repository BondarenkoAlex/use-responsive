import { useMatchMediaDefault } from './useMatchMediaDefault';
import { useMatchMediaCustom } from './useMatchMediaCustom';
import { supportMatchMedia } from './supportMatchMedia';
export var useMatchMedia = function (_a) {
    var device = _a.device, queriesMedia = _a.queriesMedia;
    if (!supportMatchMedia) {
        return [device, {}];
    }
    var newDeviceDefault = useMatchMediaDefault(device);
    var matchesCustomQueryObj = useMatchMediaCustom(queriesMedia);
    return [newDeviceDefault, matchesCustomQueryObj];
};
//# sourceMappingURL=useMatchMedia.js.map