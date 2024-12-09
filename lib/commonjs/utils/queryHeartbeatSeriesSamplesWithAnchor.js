"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _deserializeHeartbeatSeriesSample = _interopRequireDefault(require("./deserializeHeartbeatSeriesSample"));
var _prepareOptions = _interopRequireDefault(require("./prepareOptions"));
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const queryHeartbeatSeriesSamplesWithAnchor = async options => {
  const opts = (0, _prepareOptions.default)(options);
  const result = await _nativeTypes.default.queryHeartbeatSeriesSamplesWithAnchor(opts.from, opts.to, opts.limit, opts.anchor);
  return {
    deletedSamples: result.deletedSamples,
    newAnchor: result.newAnchor,
    samples: result.samples.map(_deserializeHeartbeatSeriesSample.default)
  };
};
var _default = exports.default = queryHeartbeatSeriesSamplesWithAnchor;
//# sourceMappingURL=queryHeartbeatSeriesSamplesWithAnchor.js.map