"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeTypes = _interopRequireWildcard(require("../native-types"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
async function getPreferredUnitsTyped(options) {
  let energyUnit = options === null || options === void 0 ? void 0 : options.energyUnit;
  let distanceUnit = options === null || options === void 0 ? void 0 : options.distanceUnit;
  if (!energyUnit || !distanceUnit) {
    const units = await _nativeTypes.default.getPreferredUnits([_nativeTypes.HKQuantityTypeIdentifier.distanceWalkingRunning, _nativeTypes.HKQuantityTypeIdentifier.activeEnergyBurned]);
    if (!energyUnit) {
      energyUnit = units[_nativeTypes.HKQuantityTypeIdentifier.activeEnergyBurned];
    }
    if (!distanceUnit) {
      distanceUnit = units[_nativeTypes.HKQuantityTypeIdentifier.distanceWalkingRunning];
    }
  }
  if (!energyUnit) {
    energyUnit = _nativeTypes.UnitOfEnergy.Kilocalories;
  }
  if (!distanceUnit) {
    distanceUnit = _nativeTypes.UnitOfLength.Meter;
  }
  return {
    energyUnit,
    distanceUnit
  };
}
var _default = exports.default = getPreferredUnitsTyped;
//# sourceMappingURL=getPreferredUnitsTyped.js.map