import type { EnergyUnit, LengthUnit } from '../native-types';
import type { HKWorkout } from '../types';
/**
   * @returns the most recent workout sample.
   */
declare function useMostRecentWorkout<TEnergy extends EnergyUnit, TDistance extends LengthUnit>(options?: {
    readonly energyUnit?: TEnergy;
    readonly distanceUnit?: TDistance;
}): HKWorkout<TEnergy, TDistance> | null;
export default useMostRecentWorkout;
