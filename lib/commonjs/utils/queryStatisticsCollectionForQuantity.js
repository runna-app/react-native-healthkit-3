"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ensureUnit = _interopRequireDefault(require("./ensureUnit"));
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
async function queryStatisticsCollectionForQuantity(identifier, options, anchorDate, intervalComponents, startDate, endDate, unit) {
  const actualUnit = await (0, _ensureUnit.default)(identifier, unit);
  const rawResponse = await _nativeTypes.default.queryStatisticsCollectionForQuantity(identifier, actualUnit, options, anchorDate.toISOString(), intervalComponents, startDate.toISOString(), endDate.toISOString());
  return rawResponse;
}
var _default = exports.default = queryStatisticsCollectionForQuantity;
//# sourceMappingURL=queryStatisticsCollectionForQuantity.js.map