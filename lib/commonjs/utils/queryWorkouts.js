"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _deserializeWorkout = _interopRequireDefault(require("./deserializeWorkout"));
var _getPreferredUnitsTyped = _interopRequireDefault(require("./getPreferredUnitsTyped"));
var _prepareOptions = _interopRequireDefault(require("./prepareOptions"));
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
async function queryWorkouts(options) {
  const {
    energyUnit,
    distanceUnit
  } = await (0, _getPreferredUnitsTyped.default)(options);
  const opts = (0, _prepareOptions.default)(options);
  const workouts = await _nativeTypes.default.queryWorkoutSamples(energyUnit, distanceUnit, opts.from, opts.to, opts.limit, opts.ascending);
  return workouts.map(_deserializeWorkout.default);
}
var _default = exports.default = queryWorkouts;
//# sourceMappingURL=queryWorkouts.js.map