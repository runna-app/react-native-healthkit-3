"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ensureMetadata = _interopRequireDefault(require("./ensureMetadata"));
var _ensureTotals = _interopRequireDefault(require("./ensureTotals"));
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
async function saveWorkoutSample(typeIdentifier, quantities, _start, options) {
  const start = _start.toISOString();
  const end = ((options === null || options === void 0 ? void 0 : options.end) || new Date()).toISOString();
  return _nativeTypes.default.saveWorkoutSample(typeIdentifier, quantities.map(quantity => {
    const {
      startDate,
      endDate,
      ...rest
    } = quantity;
    const updatedQuantity = {
      ...rest,
      ...(startDate && {
        startDate: startDate.toISOString()
      }),
      ...(endDate && {
        endDate: endDate.toISOString()
      })
    };
    return {
      ...updatedQuantity,
      metadata: (0, _ensureMetadata.default)(quantity.metadata)
    };
  }), start, end, (0, _ensureTotals.default)(options === null || options === void 0 ? void 0 : options.totals), (0, _ensureMetadata.default)(options === null || options === void 0 ? void 0 : options.metadata));
}
var _default = exports.default = saveWorkoutSample;
//# sourceMappingURL=saveWorkoutSample.js.map