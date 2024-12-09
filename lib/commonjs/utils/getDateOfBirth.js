"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getDateOfBirth = async () => {
  const dateOfBirth = await _nativeTypes.default.getDateOfBirth();
  return new Date(dateOfBirth);
};
var _default = exports.default = getDateOfBirth;
//# sourceMappingURL=getDateOfBirth.js.map