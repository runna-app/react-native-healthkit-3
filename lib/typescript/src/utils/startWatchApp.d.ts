import type { HKWorkoutConfiguration } from '..';
declare const startWatchApp: (configuration: HKWorkoutConfiguration) => () => Promise<boolean>;
export default startWatchApp;
