"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _useSubscribeToChanges = _interopRequireDefault(require("./useSubscribeToChanges"));
var _queryStatisticsForQuantity = _interopRequireDefault(require("../utils/queryStatisticsForQuantity"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function useStatisticsForQuantity(identifier, options, from, to, unit) {
  const [result, setResult] = (0, _react.useState)(null);
  const optionsRef = (0, _react.useRef)(options);
  (0, _react.useEffect)(() => {
    optionsRef.current = options;
  }, [options]);
  const update = (0, _react.useCallback)(async () => {
    const res = await (0, _queryStatisticsForQuantity.default)(identifier, optionsRef.current, from, to, unit);
    setResult(res);
  }, [identifier, from, to, unit]);
  (0, _react.useEffect)(() => {
    void update();
  }, [update]);
  (0, _useSubscribeToChanges.default)(identifier, update);
  return result;
}
var _default = exports.default = useStatisticsForQuantity;
//# sourceMappingURL=useStatisticsForQuantity.js.map