"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
async function getWorkoutPlanById(workoutUUID) {
  return _nativeTypes.default.getWorkoutPlanById(workoutUUID);
}
var _default = exports.default = getWorkoutPlanById;
//# sourceMappingURL=getWorkoutPlanById.js.map