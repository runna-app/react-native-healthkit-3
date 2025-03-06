"use strict";

var _bunTest = require("bun:test");
// eslint-disable-next-line import/no-unresolved

(0, _bunTest.beforeAll)(async () => {
  const mockModule = {
    queryWorkoutSamplesWithAnchor: _bunTest.jest.fn(),
    isHealthDataAvailable: _bunTest.jest.fn(),
    isProtectedDataAvailable: _bunTest.jest.fn(),
    authorizationStatusFor: _bunTest.jest.fn(),
    requestAuthorization: _bunTest.jest.fn(),
    saveQuantitySample: _bunTest.jest.fn(),
    deleteQuantitySample: _bunTest.jest.fn(),
    deleteSamples: _bunTest.jest.fn(),
    disableAllBackgroundDelivery: _bunTest.jest.fn(),
    disableBackgroundDelivery: _bunTest.jest.fn(),
    enableBackgroundDelivery: _bunTest.jest.fn(),
    queryCategorySamplesWithAnchor: _bunTest.jest.fn(),
    queryQuantitySamplesWithAnchor: _bunTest.jest.fn(),
    getBiologicalSex: _bunTest.jest.fn(),
    getBloodType: _bunTest.jest.fn(),
    getDateOfBirth: _bunTest.jest.fn(),
    getFitzpatrickSkinType: _bunTest.jest.fn(),
    getPreferredUnits: _bunTest.jest.fn(),
    getRequestStatusForAuthorization: _bunTest.jest.fn(),
    getWheelchairUse: _bunTest.jest.fn(),
    getWorkoutRoutes: _bunTest.jest.fn(),
    queryCategorySamples: _bunTest.jest.fn(),
    queryCorrelationSamples: _bunTest.jest.fn(),
    queryHeartbeatSeriesSamples: _bunTest.jest.fn(),
    queryHeartbeatSeriesSamplesWithAnchor: _bunTest.jest.fn(),
    queryQuantitySamples: _bunTest.jest.fn(),
    querySources: _bunTest.jest.fn(),
    queryStatisticsForQuantity: _bunTest.jest.fn(),
    queryStatisticsCollectionForQuantity: _bunTest.jest.fn(),
    queryWorkoutSamples: _bunTest.jest.fn(),
    saveCategorySample: _bunTest.jest.fn(),
    saveCorrelationSample: _bunTest.jest.fn(),
    saveWorkoutSample: _bunTest.jest.fn(),
    subscribeToObserverQuery: _bunTest.jest.fn(),
    unsubscribeQuery: _bunTest.jest.fn(),
    saveWorkoutRoute: _bunTest.jest.fn(),
    getWorkoutPlanById: _bunTest.jest.fn(),
    startWatchAppWithWorkoutConfiguration: _bunTest.jest.fn(),
    queryStateOfMindSamples: _bunTest.jest.fn(),
    workoutSessionMirroringStartHandler: _bunTest.jest.fn()
  };
  await _bunTest.mock.module('react-native', () => ({
    NativeModules: {
      ReactNativeHealthkit: mockModule
    },
    NativeEventEmitter: _bunTest.jest.fn()
  }));
});
//# sourceMappingURL=test-setup.js.map