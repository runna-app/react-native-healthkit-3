"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _deserializeCategorySample = _interopRequireDefault(require("./deserializeCategorySample"));
var _prepareOptions = _interopRequireDefault(require("./prepareOptions"));
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const queryCategorySamples = async (identifier, options) => {
  const opts = (0, _prepareOptions.default)(options);
  const raw = await _nativeTypes.default.queryCategorySamples(identifier, opts.from, opts.to, opts.limit, opts.ascending);
  return raw.map(_deserializeCategorySample.default);
};
var _default = exports.default = queryCategorySamples;
//# sourceMappingURL=queryCategorySamples.js.map