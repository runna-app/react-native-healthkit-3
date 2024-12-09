"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  authorizationStatusFor: true,
  availableQuantityTypes: true,
  deleteQuantitySample: true,
  deleteSamples: true,
  disableAllBackgroundDelivery: true,
  disableBackgroundDelivery: true,
  enableBackgroundDelivery: true,
  getBiologicalSex: true,
  getBloodType: true,
  getDateOfBirth: true,
  getFitzpatrickSkinType: true,
  getMostRecentCategorySample: true,
  getMostRecentQuantitySample: true,
  getMostRecentWorkout: true,
  getPreferredUnit: true,
  getPreferredUnits: true,
  getRequestStatusForAuthorization: true,
  getWheelchairUse: true,
  getWorkoutPlanById: true,
  getWorkoutRoutes: true,
  isHealthDataAvailable: true,
  isProtectedDataAvailable: true,
  queryCategorySamples: true,
  queryCategorySamplesWithAnchor: true,
  queryCorrelationSamples: true,
  queryHeartbeatSeriesSamples: true,
  queryHeartbeatSeriesSamplesWithAnchor: true,
  queryQuantitySamples: true,
  queryQuantitySamplesWithAnchor: true,
  querySources: true,
  queryStatisticsForQuantity: true,
  queryWorkouts: true,
  queryWorkoutSamples: true,
  queryWorkoutSamplesWithAnchor: true,
  requestAuthorization: true,
  saveCategorySample: true,
  saveCorrelationSample: true,
  saveQuantitySample: true,
  saveWorkoutRoute: true,
  saveWorkoutSample: true,
  subscribeToChanges: true,
  useHealthkitAuthorization: true,
  useIsHealthDataAvailable: true,
  useMostRecentCategorySample: true,
  useMostRecentQuantitySample: true,
  useMostRecentWorkout: true,
  useSources: true,
  useStatisticsForQuantity: true,
  useSubscribeToChanges: true
};
exports.useSubscribeToChanges = exports.useStatisticsForQuantity = exports.useSources = exports.useMostRecentWorkout = exports.useMostRecentQuantitySample = exports.useMostRecentCategorySample = exports.useIsHealthDataAvailable = exports.useHealthkitAuthorization = exports.subscribeToChanges = exports.saveWorkoutSample = exports.saveWorkoutRoute = exports.saveQuantitySample = exports.saveCorrelationSample = exports.saveCategorySample = exports.requestAuthorization = exports.queryWorkouts = exports.queryWorkoutSamplesWithAnchor = exports.queryWorkoutSamples = exports.queryStatisticsForQuantity = exports.querySources = exports.queryQuantitySamplesWithAnchor = exports.queryQuantitySamples = exports.queryHeartbeatSeriesSamplesWithAnchor = exports.queryHeartbeatSeriesSamples = exports.queryCorrelationSamples = exports.queryCategorySamplesWithAnchor = exports.queryCategorySamples = exports.isProtectedDataAvailable = exports.isHealthDataAvailable = exports.getWorkoutRoutes = exports.getWorkoutPlanById = exports.getWheelchairUse = exports.getRequestStatusForAuthorization = exports.getPreferredUnits = exports.getPreferredUnit = exports.getMostRecentWorkout = exports.getMostRecentQuantitySample = exports.getMostRecentCategorySample = exports.getFitzpatrickSkinType = exports.getDateOfBirth = exports.getBloodType = exports.getBiologicalSex = exports.enableBackgroundDelivery = exports.disableBackgroundDelivery = exports.disableAllBackgroundDelivery = exports.deleteSamples = exports.deleteQuantitySample = exports.default = exports.availableQuantityTypes = exports.authorizationStatusFor = void 0;
var _reactNative = require("react-native");
var _nativeTypes = require("./native-types");
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
const notAvailableError = `[@kingstinct/react-native-healthkit] Platform "${_reactNative.Platform.OS}" not supported`;
let hasWarned = false;
function UnavailableFn(retVal) {
  return () => {
    if (!hasWarned) {
      // eslint-disable-next-line no-console
      console.warn(notAvailableError);
      hasWarned = true;
    }
    return retVal;
  };
}
const authorizationStatusFor = exports.authorizationStatusFor = UnavailableFn(Promise.resolve(_nativeTypes.HKAuthorizationStatus.notDetermined)),
  availableQuantityTypes = exports.availableQuantityTypes = UnavailableFn([]),
  disableAllBackgroundDelivery = exports.disableAllBackgroundDelivery = UnavailableFn(Promise.resolve(false)),
  disableBackgroundDelivery = exports.disableBackgroundDelivery = UnavailableFn(Promise.resolve(false)),
  enableBackgroundDelivery = exports.enableBackgroundDelivery = UnavailableFn(Promise.resolve(false)),
  getBiologicalSex = exports.getBiologicalSex = UnavailableFn(Promise.resolve(_nativeTypes.HKBiologicalSex.notSet)),
  getBloodType = exports.getBloodType = UnavailableFn(Promise.resolve(_nativeTypes.HKBloodType.notSet)),
  getDateOfBirth = exports.getDateOfBirth = UnavailableFn(Promise.resolve(new Date(0))),
  getFitzpatrickSkinType = exports.getFitzpatrickSkinType = UnavailableFn(Promise.resolve(_nativeTypes.HKFitzpatrickSkinType.notSet)),
  getMostRecentCategorySample = exports.getMostRecentCategorySample = UnavailableFn(Promise.resolve(null)),
  getMostRecentQuantitySample = exports.getMostRecentQuantitySample = UnavailableFn(Promise.resolve(null)),
  getMostRecentWorkout = exports.getMostRecentWorkout = UnavailableFn(Promise.resolve(null)),
  getPreferredUnit = exports.getPreferredUnit = UnavailableFn(Promise.resolve(_nativeTypes.HKUnits.Count)),
  getPreferredUnits = exports.getPreferredUnits = UnavailableFn(Promise.resolve([])),
  getRequestStatusForAuthorization = exports.getRequestStatusForAuthorization = UnavailableFn(Promise.resolve(_nativeTypes.HKAuthorizationRequestStatus.unknown)),
  getWheelchairUse = exports.getWheelchairUse = UnavailableFn(Promise.resolve(_nativeTypes.HKWheelchairUse.notSet)),
  getWorkoutRoutes = exports.getWorkoutRoutes = UnavailableFn(Promise.resolve([])),
  isHealthDataAvailable = async () => Promise.resolve(false),
  useSources = exports.useSources = UnavailableFn(null),
  useStatisticsForQuantity = exports.useStatisticsForQuantity = UnavailableFn(null),
  queryCategorySamples = exports.queryCategorySamples = UnavailableFn(Promise.resolve([])),
  queryCategorySamplesWithAnchor = exports.queryCategorySamplesWithAnchor = UnavailableFn(Promise.resolve({
    samples: [],
    deletedSamples: [],
    newAnchor: ''
  })),
  queryCorrelationSamples = exports.queryCorrelationSamples = UnavailableFn(Promise.resolve([])),
  queryHeartbeatSeriesSamples = exports.queryHeartbeatSeriesSamples = UnavailableFn(Promise.resolve([])),
  queryHeartbeatSeriesSamplesWithAnchor = exports.queryHeartbeatSeriesSamplesWithAnchor = UnavailableFn(Promise.resolve({
    samples: [],
    deletedSamples: [],
    newAnchor: ''
  })),
  queryQuantitySamples = exports.queryQuantitySamples = UnavailableFn(Promise.resolve([])),
  queryQuantitySamplesWithAnchor = exports.queryQuantitySamplesWithAnchor = UnavailableFn(Promise.resolve({
    samples: [],
    deletedSamples: [],
    newAnchor: ''
  })),
  queryStatisticsForQuantity = exports.queryStatisticsForQuantity = UnavailableFn(Promise.resolve({
    averageQuantity: undefined,
    maximumQuantity: undefined,
    minimumQuantity: undefined,
    sumQuantity: undefined,
    mostRecentQuantity: undefined,
    mostRecentQuantityDateInterval: undefined,
    duration: undefined
  })),
  queryWorkouts = exports.queryWorkouts = UnavailableFn(Promise.resolve([])),
  queryWorkoutSamples = exports.queryWorkoutSamples = UnavailableFn(Promise.resolve([])),
  queryWorkoutSamplesWithAnchor = exports.queryWorkoutSamplesWithAnchor = UnavailableFn(Promise.resolve({
    samples: [],
    deletedSamples: [],
    newAnchor: ''
  })),
  querySources = exports.querySources = UnavailableFn(Promise.resolve([])),
  requestAuthorization = exports.requestAuthorization = UnavailableFn(Promise.resolve(false)),
  deleteQuantitySample = exports.deleteQuantitySample = UnavailableFn(Promise.resolve(false)),
  deleteSamples = exports.deleteSamples = UnavailableFn(Promise.resolve(false)),
  getWorkoutPlanById = exports.getWorkoutPlanById = UnavailableFn(Promise.resolve(null)),
  saveCategorySample = exports.saveCategorySample = UnavailableFn(Promise.resolve(false)),
  saveCorrelationSample = exports.saveCorrelationSample = UnavailableFn(Promise.resolve(false)),
  saveQuantitySample = exports.saveQuantitySample = UnavailableFn(Promise.resolve(false)),
  saveWorkoutSample = exports.saveWorkoutSample = UnavailableFn(Promise.resolve(null)),
  saveWorkoutRoute = exports.saveWorkoutRoute = UnavailableFn(Promise.resolve(false)),
  subscribeToChanges = exports.subscribeToChanges = UnavailableFn(Promise.resolve(async () => Promise.resolve(false))),
  useMostRecentCategorySample = exports.useMostRecentCategorySample = UnavailableFn(null),
  useMostRecentQuantitySample = exports.useMostRecentQuantitySample = UnavailableFn(null),
  useMostRecentWorkout = exports.useMostRecentWorkout = UnavailableFn(null),
  useSubscribeToChanges = exports.useSubscribeToChanges = UnavailableFn([null, () => null]),
  useHealthkitAuthorization = exports.useHealthkitAuthorization = UnavailableFn([null, async () => Promise.resolve(_nativeTypes.HKAuthorizationRequestStatus.unknown)]),
  useIsHealthDataAvailable = () => false,
  isProtectedDataAvailable = async () => Promise.resolve(false);
exports.isProtectedDataAvailable = isProtectedDataAvailable;
exports.useIsHealthDataAvailable = useIsHealthDataAvailable;
exports.isHealthDataAvailable = isHealthDataAvailable;
const Healthkit = {
  authorizationStatusFor,
  availableQuantityTypes,
  deleteQuantitySample,
  deleteSamples,
  disableAllBackgroundDelivery,
  disableBackgroundDelivery,
  enableBackgroundDelivery,
  getBiologicalSex,
  getBloodType,
  getDateOfBirth,
  getFitzpatrickSkinType,
  getMostRecentCategorySample,
  getMostRecentQuantitySample,
  getMostRecentWorkout,
  getPreferredUnit,
  getPreferredUnits,
  getRequestStatusForAuthorization,
  getWheelchairUse,
  getWorkoutPlanById,
  getWorkoutRoutes,
  isHealthDataAvailable,
  isProtectedDataAvailable,
  queryCategorySamples,
  queryCategorySamplesWithAnchor,
  queryCorrelationSamples,
  queryHeartbeatSeriesSamples,
  queryHeartbeatSeriesSamplesWithAnchor,
  queryQuantitySamples,
  queryQuantitySamplesWithAnchor,
  querySources,
  queryStatisticsForQuantity,
  queryWorkouts,
  queryWorkoutSamples,
  queryWorkoutSamplesWithAnchor,
  requestAuthorization,
  saveCategorySample,
  saveCorrelationSample,
  saveQuantitySample,
  saveWorkoutRoute,
  saveWorkoutSample,
  subscribeToChanges,
  useHealthkitAuthorization,
  useIsHealthDataAvailable,
  useMostRecentCategorySample,
  useMostRecentQuantitySample,
  useMostRecentWorkout,
  useSources,
  useStatisticsForQuantity,
  useSubscribeToChanges
};
var _default = exports.default = Healthkit;
//# sourceMappingURL=index.native.js.map