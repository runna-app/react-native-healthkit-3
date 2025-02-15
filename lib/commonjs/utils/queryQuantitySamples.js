"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _deserializeSample = _interopRequireDefault(require("./deserializeSample"));
var _ensureUnit = _interopRequireDefault(require("./ensureUnit"));
var _prepareOptions = _interopRequireDefault(require("./prepareOptions"));
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const queryQuantitySamples = async (identifier, options) => {
  const unit = await (0, _ensureUnit.default)(identifier, options.unit);
  const opts = (0, _prepareOptions.default)(options);
  const result = await _nativeTypes.default.queryQuantitySamples(identifier, unit, opts.from, opts.to, opts.limit, opts.ascending);
  return result.map(_deserializeSample.default);
};
var _default = exports.default = queryQuantitySamples;
//# sourceMappingURL=queryQuantitySamples.js.map