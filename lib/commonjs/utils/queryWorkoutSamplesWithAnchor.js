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
async function queryCategorySamplesWithAnchor(options) {
  const opts = (0, _prepareOptions.default)(options);
  const {
    energyUnit,
    distanceUnit
  } = await (0, _getPreferredUnitsTyped.default)(options);
  const raw = await _nativeTypes.default.queryWorkoutSamplesWithAnchor(energyUnit, distanceUnit, opts.from, opts.to, opts.limit, opts.anchor);
  return {
    samples: raw.samples.map(_deserializeWorkout.default),
    deletedSamples: raw.deletedSamples,
    newAnchor: raw.newAnchor
  };
}
var _default = exports.default = queryCategorySamplesWithAnchor;
//# sourceMappingURL=queryWorkoutSamplesWithAnchor.js.map