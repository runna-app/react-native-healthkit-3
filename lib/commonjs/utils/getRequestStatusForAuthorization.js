"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getRequestStatusForAuthorization = async (read, write = []) => {
  const readPermissions = read.reduce((obj, cur) => ({
    ...obj,
    [cur]: true
  }), {});
  const writePermissions = write.reduce((obj, cur) => ({
    ...obj,
    [cur]: true
  }), {});
  return _nativeTypes.default.getRequestStatusForAuthorization(writePermissions, readPermissions);
};
var _default = exports.default = getRequestStatusForAuthorization;
//# sourceMappingURL=getRequestStatusForAuthorization.js.map