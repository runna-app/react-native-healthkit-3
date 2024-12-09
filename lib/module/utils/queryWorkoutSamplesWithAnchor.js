import deserializeWorkout from './deserializeWorkout';
import getPreferredUnitsTyped from './getPreferredUnitsTyped';
import prepareOptions from './prepareOptions';
import Native from '../native-types';
async function queryCategorySamplesWithAnchor(options) {
  const opts = prepareOptions(options);
  const {
    energyUnit,
    distanceUnit
  } = await getPreferredUnitsTyped(options);
  const raw = await Native.queryWorkoutSamplesWithAnchor(energyUnit, distanceUnit, opts.from, opts.to, opts.limit, opts.anchor);
  return {
    samples: raw.samples.map(deserializeWorkout),
    deletedSamples: raw.deletedSamples,
    newAnchor: raw.newAnchor
  };
}
export default queryCategorySamplesWithAnchor;
//# sourceMappingURL=queryWorkoutSamplesWithAnchor.js.map