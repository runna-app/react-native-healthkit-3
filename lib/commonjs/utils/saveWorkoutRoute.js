"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
async function saveWorkoutRoute(workoutUUID, locations) {
  return _nativeTypes.default.saveWorkoutRoute(workoutUUID, locations.map(location => {
    const {
      timestamp,
      ...rest
    } = location;
    return {
      ...rest,
      ...(timestamp ? {
        timestamp: new Date(timestamp).toISOString()
      } : {
        timestamp: ''
      })
    };
  }));
}
var _default = exports.default = saveWorkoutRoute;
//# sourceMappingURL=saveWorkoutRoute.js.map