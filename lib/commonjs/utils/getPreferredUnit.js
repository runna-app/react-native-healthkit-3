"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getPreferredUnits = _interopRequireDefault(require("./getPreferredUnits"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getPreferredUnit = async type => {
  const [unit] = await (0, _getPreferredUnits.default)([type]);
  return unit;
};
var _default = exports.default = getPreferredUnit;
//# sourceMappingURL=getPreferredUnit.js.map