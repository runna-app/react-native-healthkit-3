"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _deserializeCategorySample = _interopRequireDefault(require("./deserializeCategorySample"));
var _prepareOptions = _interopRequireDefault(require("./prepareOptions"));
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const queryCategorySamplesWithAnchor = async (identifier, options) => {
  const opts = (0, _prepareOptions.default)(options);
  const raw = await _nativeTypes.default.queryCategorySamplesWithAnchor(identifier, opts.from, opts.to, opts.limit, opts.anchor);
  return {
    samples: raw.samples.map(_deserializeCategorySample.default),
    deletedSamples: raw.deletedSamples,
    newAnchor: raw.newAnchor
  };
};
var _default = exports.default = queryCategorySamplesWithAnchor;
//# sourceMappingURL=queryCategorySamplesWithAnchor.js.map