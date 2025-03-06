export declare const queryStateOfMindSamples: ({ from, to, limit, ascending, }?: {
    readonly from?: Date | undefined;
    readonly to?: Date | undefined;
    readonly limit?: number | undefined;
    readonly ascending?: boolean | undefined;
}) => Promise<readonly import("../native-types").HKStateOfMindSampleRaw[]>;
export default queryStateOfMindSamples;
