"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getPreferredUnits = async identifiers => {
  const units = await _nativeTypes.default.getPreferredUnits(identifiers);
  return identifiers.map(i => units[i]);
};
var _default = exports.default = getPreferredUnits;
//# sourceMappingURL=getPreferredUnits.js.map