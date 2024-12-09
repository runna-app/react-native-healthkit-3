"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeTypes = _interopRequireWildcard(require("../native-types"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const subscribeToChanges = async (identifier, callback) => {
  const subscription = _nativeTypes.EventEmitter.addListener('onChange', ({
    typeIdentifier
  }) => {
    if (typeIdentifier === identifier) {
      callback();
    }
  });
  const queryId = await _nativeTypes.default.subscribeToObserverQuery(identifier).catch(async error => {
    subscription.remove();
    return Promise.reject(error);
  });
  return async () => {
    subscription.remove();
    return _nativeTypes.default.unsubscribeQuery(queryId);
  };
};
var _default = exports.default = subscribeToChanges;
//# sourceMappingURL=subscribeToChanges.js.map