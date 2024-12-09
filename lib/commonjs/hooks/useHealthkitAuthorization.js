"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _getRequestStatusForAuthorization = _interopRequireDefault(require("../utils/getRequestStatusForAuthorization"));
var _requestAuthorization = _interopRequireDefault(require("../utils/requestAuthorization"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
   * @description Hook to retrieve the current authorization status for the given types, and request authorization if needed.
   * @see {@link https://developer.apple.com/documentation/healthkit/hkhealthstore/1614152-requestauthorization Apple Docs - requestAuthorization}
   * @see {@link https://developer.apple.com/documentation/healthkit/authorizing_access_to_health_data Apple Docs - Authorizing access to health data}
   */
const useHealthkitAuthorization = (read, write) => {
  const [status, setStatus] = (0, _react.useState)(null);
  const readMemo = (0, _react.useRef)(read);
  const writeMemo = (0, _react.useRef)(write);
  (0, _react.useEffect)(() => {
    readMemo.current = read;
    writeMemo.current = write;
  }, [read, write]);
  const refreshAuthStatus = (0, _react.useCallback)(async () => {
    const auth = await (0, _getRequestStatusForAuthorization.default)(readMemo.current, writeMemo.current);
    setStatus(auth);
    return auth;
  }, []);
  const request = (0, _react.useCallback)(async () => {
    await (0, _requestAuthorization.default)(readMemo.current, writeMemo.current);
    return refreshAuthStatus();
  }, [refreshAuthStatus]);
  (0, _react.useEffect)(() => {
    void refreshAuthStatus();
  }, [refreshAuthStatus]);
  return [status, request];
};
var _default = exports.default = useHealthkitAuthorization;
//# sourceMappingURL=useHealthkitAuthorization.js.map