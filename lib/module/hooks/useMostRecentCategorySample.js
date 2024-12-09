import { useCallback, useState } from 'react';
import useSubscribeToChanges from './useSubscribeToChanges';
import getMostRecentCategorySample from '../utils/getMostRecentCategorySample';
/**
   * @returns the most recent sample for the given category type.
   */
function useMostRecentCategorySample(identifier) {
  const [category, setCategory] = useState(null);
  const updater = useCallback(() => {
    void getMostRecentCategorySample(identifier).then(setCategory);
  }, [identifier]);
  useSubscribeToChanges(identifier, updater);
  return category;
}
export default useMostRecentCategorySample;
//# sourceMappingURL=useMostRecentCategorySample.js.map