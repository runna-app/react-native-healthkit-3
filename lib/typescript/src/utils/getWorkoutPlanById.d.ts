declare function getWorkoutPlanById(workoutUUID: string): Promise<{
    readonly id: string;
    readonly activityType: import("../native-types").HKWorkoutActivityType;
} | null>;
export default getWorkoutPlanById;
