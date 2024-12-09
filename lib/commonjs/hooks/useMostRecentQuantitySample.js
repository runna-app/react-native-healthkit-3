"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _ensureUnit = _interopRequireDefault(require("../utils/ensureUnit"));
var _getMostRecentQuantitySample = _interopRequireDefault(require("../utils/getMostRecentQuantitySample"));
var _subscribeToChanges = _interopRequireDefault(require("../utils/subscribeToChanges"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
   * @returns the most recent sample for the given quantity type.
   */
function useMostRecentQuantitySample(identifier, unit) {
  const [lastSample, setLastSample] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    let cancelSubscription;
    const init = async () => {
      const actualUnit = await (0, _ensureUnit.default)(identifier, unit);
      const value = await (0, _getMostRecentQuantitySample.default)(identifier, actualUnit);
      setLastSample(value);
      cancelSubscription = await (0, _subscribeToChanges.default)(identifier, async () => {
        const value = await (0, _getMostRecentQuantitySample.default)(identifier, actualUnit);
        setLastSample(value);
      });
    };
    void init();
    return () => {
      var _cancelSubscription;
      void ((_cancelSubscription = cancelSubscription) === null || _cancelSubscription === void 0 ? void 0 : _cancelSubscription());
    };
  }, [identifier, unit]);
  return lastSample;
}
var _default = exports.default = useMostRecentQuantitySample;
//# sourceMappingURL=useMostRecentQuantitySample.js.map