import type { HKQuantityTypeIdentifier, UnitForIdentifier } from '../native-types';
import type { HKQuantitySample } from '../types';
/**
   * @returns the most recent sample for the given quantity type.
   */
declare function useMostRecentQuantitySample<TIdentifier extends HKQuantityTypeIdentifier, TUnit extends UnitForIdentifier<TIdentifier>>(identifier: TIdentifier, unit?: TUnit): HKQuantitySample<TIdentifier, UnitForIdentifier<TIdentifier>> | null;
export default useMostRecentQuantitySample;
