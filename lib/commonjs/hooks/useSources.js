"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _querySources = _interopRequireDefault(require("../utils/querySources"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function useSources(identifier) {
  const [result, setResult] = (0, _react.useState)(null);
  const update = (0, _react.useCallback)(async () => {
    const res = await (0, _querySources.default)(identifier);
    setResult(res);
  }, [identifier]);
  (0, _react.useEffect)(() => {
    void update();
  }, [update]);
  return result;
}
var _default = exports.default = useSources;
//# sourceMappingURL=useSources.js.map