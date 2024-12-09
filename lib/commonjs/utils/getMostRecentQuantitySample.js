"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _queryQuantitySamples = _interopRequireDefault(require("./queryQuantitySamples"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
async function getMostRecentQuantitySample(identifier, unit) {
  const samples = await (0, _queryQuantitySamples.default)(identifier, {
    limit: 1,
    unit
  });
  const lastSample = samples[0];
  if (lastSample) {
    return lastSample;
  }
  return null;
}
var _default = exports.default = getMostRecentQuantitySample;
//# sourceMappingURL=getMostRecentQuantitySample.js.map