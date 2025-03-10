import { HKAuthorizationRequestStatus, HKAuthorizationStatus, HKBiologicalSex, HKBloodType, HKFitzpatrickSkinType, HKUnits, HKWheelchairUse } from './native-types';
import type ReactNativeHealthkit from './index.ios';
import type { QueryCategorySamplesFn } from './utils/queryCategorySamples';
import type { QueryQuantitySamplesFn } from './utils/queryQuantitySamples';
declare const authorizationStatusFor: () => Promise<HKAuthorizationStatus>, availableQuantityTypes: () => never[], disableAllBackgroundDelivery: () => Promise<boolean>, disableBackgroundDelivery: () => Promise<boolean>, enableBackgroundDelivery: () => Promise<boolean>, getBiologicalSex: () => Promise<HKBiologicalSex>, getBloodType: () => Promise<HKBloodType>, getDateOfBirth: () => Promise<Date>, getFitzpatrickSkinType: () => Promise<HKFitzpatrickSkinType>, getMostRecentCategorySample: () => Promise<null>, getMostRecentQuantitySample: () => Promise<null>, getMostRecentWorkout: () => Promise<null>, getPreferredUnit: () => Promise<HKUnits>, getPreferredUnits: () => Promise<never[]>, getRequestStatusForAuthorization: () => Promise<HKAuthorizationRequestStatus>, getWheelchairUse: () => Promise<HKWheelchairUse>, getWorkoutRoutes: () => Promise<never[]>, isHealthDataAvailable: () => Promise<boolean>, useSources: () => null, useStatisticsForQuantity: () => null, queryCategorySamples: QueryCategorySamplesFn, queryCategorySamplesWithAnchor: () => Promise<{
    samples: never[];
    deletedSamples: never[];
    newAnchor: string;
}>, queryCorrelationSamples: () => Promise<never[]>, queryHeartbeatSeriesSamples: () => Promise<never[]>, queryHeartbeatSeriesSamplesWithAnchor: () => Promise<{
    samples: never[];
    deletedSamples: never[];
    newAnchor: string;
}>, queryQuantitySamples: QueryQuantitySamplesFn, queryQuantitySamplesWithAnchor: () => Promise<{
    samples: never[];
    deletedSamples: never[];
    newAnchor: string;
}>, queryStatisticsForQuantity: () => Promise<{
    averageQuantity: undefined;
    maximumQuantity: undefined;
    minimumQuantity: undefined;
    sumQuantity: undefined;
    mostRecentQuantity: undefined;
    mostRecentQuantityDateInterval: undefined;
    duration: undefined;
}>, queryStatisticsCollectionForQuantity: () => Promise<{
    averageQuantity: undefined;
    maximumQuantity: undefined;
    minimumQuantity: undefined;
    sumQuantity: undefined;
    mostRecentQuantity: undefined;
    mostRecentQuantityDateInterval: undefined;
    duration: undefined;
}[]>, queryWorkouts: () => Promise<never[]>, queryWorkoutSamples: () => Promise<never[]>, queryWorkoutSamplesWithAnchor: () => Promise<{
    samples: never[];
    deletedSamples: never[];
    newAnchor: string;
}>, querySources: () => Promise<never[]>, requestAuthorization: () => Promise<boolean>, deleteQuantitySample: () => Promise<boolean>, deleteSamples: () => Promise<boolean>, getWorkoutPlanById: () => Promise<null>, saveCategorySample: () => Promise<boolean>, saveCorrelationSample: () => Promise<boolean>, saveQuantitySample: () => Promise<boolean>, saveWorkoutSample: () => Promise<null>, saveWorkoutRoute: () => Promise<boolean>, subscribeToChanges: () => Promise<() => Promise<boolean>>, startWatchApp: () => () => Promise<boolean>, workoutSessionMirroringStartHandler: () => Promise<boolean>, useMostRecentCategorySample: () => null, useMostRecentQuantitySample: () => null, useMostRecentWorkout: () => null, useSubscribeToChanges: () => ((() => null) | null)[], useHealthkitAuthorization: () => readonly [null, () => Promise<HKAuthorizationRequestStatus>], useIsHealthDataAvailable: () => boolean, isProtectedDataAvailable: () => Promise<boolean>, queryStateOfMindSamples: () => Promise<never[]>;
declare const Healthkit: typeof ReactNativeHealthkit;
export { authorizationStatusFor, availableQuantityTypes, deleteQuantitySample, deleteSamples, disableAllBackgroundDelivery, disableBackgroundDelivery, enableBackgroundDelivery, getBiologicalSex, getBloodType, getDateOfBirth, getFitzpatrickSkinType, getMostRecentCategorySample, getMostRecentQuantitySample, getMostRecentWorkout, getPreferredUnit, getPreferredUnits, getRequestStatusForAuthorization, getWheelchairUse, getWorkoutPlanById, getWorkoutRoutes, isHealthDataAvailable, isProtectedDataAvailable, queryCategorySamples, queryCategorySamplesWithAnchor, queryCorrelationSamples, queryHeartbeatSeriesSamples, queryHeartbeatSeriesSamplesWithAnchor, queryQuantitySamples, queryQuantitySamplesWithAnchor, querySources, queryStatisticsForQuantity, queryStatisticsCollectionForQuantity, queryWorkouts, queryWorkoutSamples, queryWorkoutSamplesWithAnchor, requestAuthorization, saveCategorySample, saveCorrelationSample, saveQuantitySample, saveWorkoutRoute, saveWorkoutSample, subscribeToChanges, startWatchApp, workoutSessionMirroringStartHandler, useHealthkitAuthorization, useIsHealthDataAvailable, useMostRecentCategorySample, useMostRecentQuantitySample, useMostRecentWorkout, useSources, useStatisticsForQuantity, useSubscribeToChanges, queryStateOfMindSamples, };
export * from './types';
export default Healthkit;
