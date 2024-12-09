import type { HealthkitReadAuthorization, HealthkitWriteAuthorization, HKAuthorizationRequestStatus } from '../native-types';
/**
   * @description Hook to retrieve the current authorization status for the given types, and request authorization if needed.
   * @see {@link https://developer.apple.com/documentation/healthkit/hkhealthstore/1614152-requestauthorization Apple Docs - requestAuthorization}
   * @see {@link https://developer.apple.com/documentation/healthkit/authorizing_access_to_health_data Apple Docs - Authorizing access to health data}
   */
declare const useHealthkitAuthorization: (read: readonly HealthkitReadAuthorization[], write?: readonly HealthkitWriteAuthorization[]) => readonly [HKAuthorizationRequestStatus | null, () => Promise<HKAuthorizationRequestStatus>];
export default useHealthkitAuthorization;
