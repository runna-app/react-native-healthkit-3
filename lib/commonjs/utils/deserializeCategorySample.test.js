"use strict";

var _deserializeCategorySample = _interopRequireDefault(require("./deserializeCategorySample"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
describe('deserializeCategorySample', () => {
  it('should deserialize category sample', async () => {
    const {
      HKCategoryTypeIdentifier
    } = await Promise.resolve().then(() => _interopRequireWildcard(require('../native-types')));
    const sample = {
      startDate: '2020-01-01T00:00:00.000Z',
      endDate: '2020-01-01T00:00:00.000Z',
      value: 1,
      categoryType: HKCategoryTypeIdentifier.sexualActivity,
      metadata: {},
      uuid: 'uuid'
    };
    expect((0, _deserializeCategorySample.default)(sample)).toEqual({
      ...sample,
      startDate: new Date('2020-01-01T00:00:00.000Z'),
      endDate: new Date('2020-01-01T00:00:00.000Z')
    });
  });
});
//# sourceMappingURL=deserializeCategorySample.test.js.map