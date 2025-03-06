"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryStateOfMindSamples = exports.default = void 0;
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const queryStateOfMindSamples = async ({
  from,
  to,
  limit,
  ascending
} = {}) => {
  const fromString = (from || new Date(0)).toISOString();
  const toString = (to || new Date(0)).toISOString();
  const res = await _nativeTypes.default.queryStateOfMindSamples(fromString, toString, limit ?? 0, ascending ?? false);
  return res;
};
exports.queryStateOfMindSamples = queryStateOfMindSamples;
var _default = exports.default = queryStateOfMindSamples;
//# sourceMappingURL=queryStateOfMindSamples.js.map