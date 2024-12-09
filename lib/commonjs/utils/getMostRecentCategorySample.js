"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _queryCategorySamples = _interopRequireDefault(require("./queryCategorySamples"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
async function getMostRecentCategorySample(identifier) {
  const samples = await (0, _queryCategorySamples.default)(identifier, {
    limit: 1,
    ascending: false
  });
  return samples[0] ?? null;
}
var _default = exports.default = getMostRecentCategorySample;
//# sourceMappingURL=getMostRecentCategorySample.js.map