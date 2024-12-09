"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const querySources = async identifier => {
  const quantitySamples = await _nativeTypes.default.querySources(identifier);
  return quantitySamples;
};
var _default = exports.default = querySources;
//# sourceMappingURL=querySources.js.map