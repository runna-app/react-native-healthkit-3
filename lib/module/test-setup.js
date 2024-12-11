// eslint-disable-next-line import/no-unresolved
import { mock, jest, beforeAll } from 'bun:test';
beforeAll(async () => {
  const mockModule = {
    queryWorkoutSamplesWithAnchor: jest.fn(),
    isHealthDataAvailable: jest.fn(),
    isProtectedDataAvailable: jest.fn(),
    authorizationStatusFor: jest.fn(),
    requestAuthorization: jest.fn(),
    saveQuantitySample: jest.fn(),
    deleteQuantitySample: jest.fn(),
    deleteSamples: jest.fn(),
    disableAllBackgroundDelivery: jest.fn(),
    disableBackgroundDelivery: jest.fn(),
    enableBackgroundDelivery: jest.fn(),
    queryCategorySamplesWithAnchor: jest.fn(),
    queryQuantitySamplesWithAnchor: jest.fn(),
    getBiologicalSex: jest.fn(),
    getBloodType: jest.fn(),
    getDateOfBirth: jest.fn(),
    getFitzpatrickSkinType: jest.fn(),
    getPreferredUnits: jest.fn(),
    getRequestStatusForAuthorization: jest.fn(),
    getWheelchairUse: jest.fn(),
    getWorkoutRoutes: jest.fn(),
    queryCategorySamples: jest.fn(),
    queryCorrelationSamples: jest.fn(),
    queryHeartbeatSeriesSamples: jest.fn(),
    queryHeartbeatSeriesSamplesWithAnchor: jest.fn(),
    queryQuantitySamples: jest.fn(),
    querySources: jest.fn(),
    queryStatisticsForQuantity: jest.fn(),
    queryWorkoutSamples: jest.fn(),
    saveCategorySample: jest.fn(),
    saveCorrelationSample: jest.fn(),
    saveWorkoutSample: jest.fn(),
    subscribeToObserverQuery: jest.fn(),
    unsubscribeQuery: jest.fn(),
    saveWorkoutRoute: jest.fn(),
    getWorkoutPlanById: jest.fn(),
    startWatchAppWithWorkoutConfiguration: jest.fn(),
    workoutSessionMirroringStartHandler: jest.fn(),
    endRemoteWorkoutSession: jest.fn()
  };
  await mock.module('react-native', () => ({
    NativeModules: {
      ReactNativeHealthkit: mockModule
    },
    NativeEventEmitter: jest.fn()
  }));
});
//# sourceMappingURL=test-setup.js.map