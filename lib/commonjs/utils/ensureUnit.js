"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ensureUnit = async (type, providedUnit) => {
  if (providedUnit) {
    return providedUnit;
  }
  const unit = await _nativeTypes.default.getPreferredUnits([type]);
  return unit[type];
};
var _default = exports.default = ensureUnit;
//# sourceMappingURL=ensureUnit.js.map