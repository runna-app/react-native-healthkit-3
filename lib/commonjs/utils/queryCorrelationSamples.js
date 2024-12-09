"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _deserializeCorrelation = _interopRequireDefault(require("./deserializeCorrelation"));
var _prepareOptions = _interopRequireDefault(require("./prepareOptions"));
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const queryCorrelationSamples = async (typeIdentifier, options) => {
  const opts = (0, _prepareOptions.default)(options);
  const correlations = await _nativeTypes.default.queryCorrelationSamples(typeIdentifier, opts.from, opts.to);
  return correlations.map(_deserializeCorrelation.default);
};
var _default = exports.default = queryCorrelationSamples;
//# sourceMappingURL=queryCorrelationSamples.js.map