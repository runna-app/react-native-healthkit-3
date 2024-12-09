"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const deleteSamples = async sample => {
  const start = sample.startDate || new Date();
  const end = sample.endDate || new Date();
  const {
    identifier
  } = sample;
  return _nativeTypes.default.deleteSamples(identifier, start.toISOString(), end.toISOString());
};
var _default = exports.default = deleteSamples;
//# sourceMappingURL=deleteSamples.js.map