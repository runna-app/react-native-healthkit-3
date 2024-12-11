"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeTypes = _interopRequireDefault(require("../native-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const startWatchApp = configuration => async () => _nativeTypes.default.startWatchAppWithWorkoutConfiguration(configuration);
var _default = exports.default = startWatchApp;
//# sourceMappingURL=startWatchApp.js.map