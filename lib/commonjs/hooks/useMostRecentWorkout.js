"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _getMostRecentWorkout = _interopRequireDefault(require("../utils/getMostRecentWorkout"));
var _getPreferredUnitsTyped = _interopRequireDefault(require("../utils/getPreferredUnitsTyped"));
var _subscribeToChanges = _interopRequireDefault(require("../utils/subscribeToChanges"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
   * @returns the most recent workout sample.
   */
function useMostRecentWorkout(options) {
  const [workout, setWorkout] = (0, _react.useState)(null);
  const optionsRef = (0, _react.useRef)(options);
  (0, _react.useEffect)(() => {
    optionsRef.current = options;
  }, [options]);
  const update = (0, _react.useCallback)(async () => {
    const {
      energyUnit,
      distanceUnit
    } = await (0, _getPreferredUnitsTyped.default)(optionsRef.current);
    setWorkout(await (0, _getMostRecentWorkout.default)({
      energyUnit,
      distanceUnit
    }));
  }, []);
  (0, _react.useEffect)(() => {
    void update();
  }, [update]);
  (0, _react.useEffect)(() => {
    let cancelSubscription;
    const init = async () => {
      cancelSubscription = await (0, _subscribeToChanges.default)('HKWorkoutTypeIdentifier', update);
    };
    void init();
    return () => {
      var _cancelSubscription;
      void ((_cancelSubscription = cancelSubscription) === null || _cancelSubscription === void 0 ? void 0 : _cancelSubscription());
    };
  }, [update]);
  return workout;
}
var _default = exports.default = useMostRecentWorkout;
//# sourceMappingURL=useMostRecentWorkout.js.map