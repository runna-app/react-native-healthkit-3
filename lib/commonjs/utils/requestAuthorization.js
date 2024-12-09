"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/** See https://developer.apple.com/documentation/healthkit/hkhealthstore/1614152-requestauthorization */
const requestAuthorization = async (read, write = []) => {
  const readPermissions = read.reduce((obj, cur) => ({
    ...obj,
    [cur]: true
  }), {});
  const writePermissions = write.reduce((obj, cur) => ({
    ...obj,
    [cur]: true
  }), {});
  return _nativeTypes.default.requestAuthorization(writePermissions, readPermissions);
};
var _default = exports.default = requestAuthorization;
//# sourceMappingURL=requestAuthorization.js.map