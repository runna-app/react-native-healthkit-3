import ensureUnit from './ensureUnit';
import Native from '../native-types';
async function queryStatisticsCollectionForQuantity(identifier, options, anchorDate, intervalComponents, startDate, endDate, unit) {
  const actualUnit = await ensureUnit(identifier, unit);
  const rawResponse = await Native.queryStatisticsCollectionForQuantity(identifier, actualUnit, options, anchorDate.toISOString(), intervalComponents, startDate.toISOString(), endDate.toISOString());
  return rawResponse;
}
export default queryStatisticsCollectionForQuantity;
//# sourceMappingURL=queryStatisticsCollectionForQuantity.js.map