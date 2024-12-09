"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _useSubscribeToChanges = _interopRequireDefault(require("./useSubscribeToChanges"));
var _getMostRecentCategorySample = _interopRequireDefault(require("../utils/getMostRecentCategorySample"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
   * @returns the most recent sample for the given category type.
   */
function useMostRecentCategorySample(identifier) {
  const [category, setCategory] = (0, _react.useState)(null);
  const updater = (0, _react.useCallback)(() => {
    void (0, _getMostRecentCategorySample.default)(identifier).then(setCategory);
  }, [identifier]);
  (0, _useSubscribeToChanges.default)(identifier, updater);
  return category;
}
var _default = exports.default = useMostRecentCategorySample;
//# sourceMappingURL=useMostRecentCategorySample.js.map