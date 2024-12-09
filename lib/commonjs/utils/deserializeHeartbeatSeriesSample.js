"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function deserializeHeartbeatSeriesSample(sample) {
  return {
    ...sample,
    startDate: new Date(sample.startDate),
    endDate: new Date(sample.endDate)
  };
}
var _default = exports.default = deserializeHeartbeatSeriesSample;
//# sourceMappingURL=deserializeHeartbeatSeriesSample.js.map