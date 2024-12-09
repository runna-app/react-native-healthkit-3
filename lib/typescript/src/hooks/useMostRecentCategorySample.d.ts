import type { HKCategoryTypeIdentifier } from '../native-types';
import type { HKCategorySample } from '../types';
/**
   * @returns the most recent sample for the given category type.
   */
declare function useMostRecentCategorySample<TCategory extends HKCategoryTypeIdentifier>(identifier: TCategory): HKCategorySample<TCategory> | null;
export default useMostRecentCategorySample;
