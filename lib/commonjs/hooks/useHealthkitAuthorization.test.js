"use strict";

var _reactNative = require("@testing-library/react-native");
var _testUtils = _interopRequireDefault(require("../test-utils"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
describe('useHealthkitAuthorization', () => {
  let NativeTypes;
  let useHealthkitAuthorization;
  beforeAll(async () => {
    NativeTypes = await Promise.resolve().then(() => _interopRequireWildcard(require('../native-types')));
    useHealthkitAuthorization = (await Promise.resolve().then(() => _interopRequireWildcard(require('./useHealthkitAuthorization')))).default;
  });
  test('should return shouldRequest', async () => {
    const {
      HKAuthorizationRequestStatus,
      HKCategoryTypeIdentifier,
      default: Native
    } = NativeTypes;
    jest.spyOn(Native, 'getRequestStatusForAuthorization').mockReturnValue(Promise.resolve(HKAuthorizationRequestStatus.shouldRequest));
    const {
      result
    } = (0, _reactNative.renderHook)(() => useHealthkitAuthorization([HKCategoryTypeIdentifier.abdominalCramps]));
    await (0, _testUtils.default)();
    expect(result.current[0]).toBe(HKAuthorizationRequestStatus.shouldRequest);
  });
  test('should request permissions', async () => {
    const {
      HKAuthorizationRequestStatus,
      HKCategoryTypeIdentifier,
      default: Native
    } = NativeTypes;
    const spy = jest.spyOn(Native, 'getRequestStatusForAuthorization').mockReturnValue(Promise.resolve(HKAuthorizationRequestStatus.shouldRequest));
    jest.spyOn(Native, 'requestAuthorization').mockReturnValue(Promise.resolve(true));
    const {
      result
    } = (0, _reactNative.renderHook)(() => useHealthkitAuthorization([HKCategoryTypeIdentifier.abdominalCramps]));
    await (0, _testUtils.default)();
    spy.mockReturnValue(Promise.resolve(HKAuthorizationRequestStatus.unnecessary));
    let retVal;
    await (0, _reactNative.act)(async () => {
      const r = await result.current[1]();
      retVal = r;
    });
    expect(result.current[0]).toBe(HKAuthorizationRequestStatus.unnecessary);
    expect(retVal).toBe(HKAuthorizationRequestStatus.unnecessary);
  });
  test('should return unnecessary', async () => {
    const {
      HKAuthorizationRequestStatus,
      HKCategoryTypeIdentifier,
      default: Native
    } = NativeTypes;
    jest.spyOn(Native, 'getRequestStatusForAuthorization').mockReturnValue(Promise.resolve(HKAuthorizationRequestStatus.unnecessary));
    const {
      result
    } = (0, _reactNative.renderHook)(() => useHealthkitAuthorization([HKCategoryTypeIdentifier.abdominalCramps]));
    await (0, _testUtils.default)();
    expect(result.current[0]).toBe(HKAuthorizationRequestStatus.unnecessary);
  });
  test('should return null before initalizing', async () => {
    const {
      HKCategoryTypeIdentifier
    } = NativeTypes;
    const {
      result
    } = (0, _reactNative.renderHook)(() => useHealthkitAuthorization([HKCategoryTypeIdentifier.abdominalCramps]));
    expect(result.current[0]).toBe(null);
    await (0, _testUtils.default)();
  });
});
//# sourceMappingURL=useHealthkitAuthorization.test.js.map