"use strict";

var _reactNative = require("@testing-library/react-native");
var _testUtils = _interopRequireDefault(require("../test-utils"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
describe('useIsHealthDataAvailable', () => {
  test('should return false', async () => {
    const useIsHealthDataAvailable = (await Promise.resolve().then(() => _interopRequireWildcard(require('./useIsHealthDataAvailable')))).default;
    const {
      default: Native
    } = await Promise.resolve().then(() => _interopRequireWildcard(require('../native-types')));
    jest.spyOn(Native, 'isHealthDataAvailable').mockReturnValue(Promise.resolve(false));
    const {
      result
    } = (0, _reactNative.renderHook)(useIsHealthDataAvailable);
    await (0, _testUtils.default)();
    expect(result.current).toBe(false);
  });
  test('should return true', async () => {
    const useIsHealthDataAvailable = (await Promise.resolve().then(() => _interopRequireWildcard(require('./useIsHealthDataAvailable')))).default;
    const {
      default: Native
    } = await Promise.resolve().then(() => _interopRequireWildcard(require('../native-types')));
    jest.spyOn(Native, 'isHealthDataAvailable').mockReturnValue(Promise.resolve(true));
    const {
      result
    } = (0, _reactNative.renderHook)(useIsHealthDataAvailable);
    await (0, _testUtils.default)();
    expect(result.current).toBe(true);
  });
  test('should return null before initalizing', async () => {
    const useIsHealthDataAvailable = (await Promise.resolve().then(() => _interopRequireWildcard(require('./useIsHealthDataAvailable')))).default;
    const {
      result
    } = (0, _reactNative.renderHook)(useIsHealthDataAvailable);
    expect(result.current).toBe(null);
    await (0, _testUtils.default)();
  });
});
//# sourceMappingURL=useIsHealthDataAvailable.test.js.map