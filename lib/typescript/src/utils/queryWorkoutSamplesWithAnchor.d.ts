import type { EnergyUnit, LengthUnit } from '../native-types';
import type { DeletedWorkoutSampleRaw, HKWorkout, QueryWorkoutsOptions } from '../types';
export type QueryWorkoutSamplesWithAnchorResponse<TEnergy extends EnergyUnit, TDistance extends LengthUnit> = {
    readonly samples: readonly HKWorkout<TEnergy, TDistance>[];
    readonly deletedSamples: readonly DeletedWorkoutSampleRaw[];
    readonly newAnchor: string;
};
declare function queryCategorySamplesWithAnchor<TEnergy extends EnergyUnit, TDistance extends LengthUnit>(options: Omit<QueryWorkoutsOptions<TEnergy, TDistance>, 'ascending'>): Promise<QueryWorkoutSamplesWithAnchorResponse<TEnergy, TDistance>>;
export default queryCategorySamplesWithAnchor;
