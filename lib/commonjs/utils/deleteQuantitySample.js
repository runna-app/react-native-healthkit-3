"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const deleteQuantitySample = async (identifier, uuid) => _nativeTypes.default.deleteQuantitySample(identifier, uuid);
var _default = exports.default = deleteQuantitySample;
//# sourceMappingURL=deleteQuantitySample.js.map