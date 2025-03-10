"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WorkoutSessionState = exports.UnitOfVolume = exports.UnitOfTime = exports.UnitOfPressure = exports.UnitOfMass = exports.UnitOfLength = exports.UnitOfEnergy = exports.TemperatureUnit = exports.HKWorkoutTypeIdentifier = exports.HKWorkoutSessionLocationType = exports.HKWorkoutRouteTypeIdentifier = exports.HKWorkoutEventType = exports.HKWorkoutActivityType = exports.HKWheelchairUse = exports.HKWeatherCondition = exports.HKUpdateFrequency = exports.HKUnits = exports.HKUnitMetric = exports.HKStatisticsOptions = exports.HKStateOfMindValenceClassification = exports.HKStateOfMindTypeIdentifier = exports.HKStateOfMindLabel = exports.HKStateOfMindKind = exports.HKStateOfMindAssociation = exports.HKQuantityTypeIdentifier = exports.HKMetricPrefix = exports.HKInsulinDeliveryReason = exports.HKHeartRateMotionContext = exports.HKFitzpatrickSkinType = exports.HKCorrelationTypeIdentifier = exports.HKCharacteristicTypeIdentifier = exports.HKCategoryValueSleepAnalysis = exports.HKCategoryValueSeverity = exports.HKCategoryValuePresence = exports.HKCategoryValueOvulationTestResult = exports.HKCategoryValueNotApplicable = exports.HKCategoryValueMenstrualFlow = exports.HKCategoryValueLowCardioFitnessEvent = exports.HKCategoryValueCervicalMucusQuality = exports.HKCategoryValueAppleStandHour = exports.HKCategoryValueAppetiteChanges = exports.HKCategoryTypeIdentifier = exports.HKBloodType = exports.HKBiologicalSex = exports.HKAuthorizationStatus = exports.HKAuthorizationRequestStatus = exports.HKAudiogramTypeIdentifier = exports.HKActivitySummaryTypeIdentifier = exports.EventEmitter = exports.BloodGlucoseUnit = void 0;
var _reactNative = require("react-native");
/**
 * Represents a workout type identifier.
 * @see {@link https://developer.apple.com/documentation/healthkit/hkworkouttypeidentifier Apple Docs HKWorkoutTypeIdentifier}
 */
const HKWorkoutTypeIdentifier = exports.HKWorkoutTypeIdentifier = 'HKWorkoutTypeIdentifier';

/**
 * Represents a type that identifies activity summary objects.
 * @see {@link https://developer.apple.com/documentation/healthkit/hkactivitysummarytype Apple Docs HKActivitySummaryType}
 */
const HKActivitySummaryTypeIdentifier = exports.HKActivitySummaryTypeIdentifier = 'HKActivitySummaryTypeIdentifier';

/**
 * Represents an audiogram type identifier.
 * @see {@link https://developer.apple.com/documentation/healthkit/HKAudiogramSampleType Apple Docs HKAudiogramSampleType}
 */
const HKAudiogramTypeIdentifier = exports.HKAudiogramTypeIdentifier = 'HKAudiogramSampleType';

/**
 * Represents a workout route type identifier.
 * @see {@link https://developer.apple.com/documentation/healthkit/hkworkoutroutetypeidentifier Apple Docs HKWorkoutRouteTypeIdentifier}
 */
const HKWorkoutRouteTypeIdentifier = exports.HKWorkoutRouteTypeIdentifier = 'HKWorkoutRouteTypeIdentifier';

/**
 * Represents a state of mind type identifier.
 * @see {@link https://developer.apple.com/documentation/healthkit/hkstateofmindtype Apple Docs HKStateOfMindType}
 */
const HKStateOfMindTypeIdentifier = exports.HKStateOfMindTypeIdentifier = 'HKStateOfMindTypeIdentifier';

/**
 * Represents a series sample containing heartbeat data..
 * @see {@link https://developer.apple.com/documentation/healthkit/HKDataTypeIdentifierHeartbeatSeries Apple Docs HKDataTypeIdentifierHeartbeatSeries}
 */
/**
 * Represents a quantity type identifier.
 * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier Apple Docs HKQuantityTypeIdentifier}
 */
let HKQuantityTypeIdentifier = exports.HKQuantityTypeIdentifier = /*#__PURE__*/function (HKQuantityTypeIdentifier) {
  HKQuantityTypeIdentifier["bodyMassIndex"] = "HKQuantityTypeIdentifierBodyMassIndex";
  HKQuantityTypeIdentifier["bodyFatPercentage"] = "HKQuantityTypeIdentifierBodyFatPercentage";
  HKQuantityTypeIdentifier["height"] = "HKQuantityTypeIdentifierHeight";
  HKQuantityTypeIdentifier["bodyMass"] = "HKQuantityTypeIdentifierBodyMass";
  HKQuantityTypeIdentifier["leanBodyMass"] = "HKQuantityTypeIdentifierLeanBodyMass";
  HKQuantityTypeIdentifier["waistCircumference"] = "HKQuantityTypeIdentifierWaistCircumference";
  HKQuantityTypeIdentifier["stepCount"] = "HKQuantityTypeIdentifierStepCount";
  HKQuantityTypeIdentifier["distanceWalkingRunning"] = "HKQuantityTypeIdentifierDistanceWalkingRunning";
  HKQuantityTypeIdentifier["distanceCycling"] = "HKQuantityTypeIdentifierDistanceCycling";
  HKQuantityTypeIdentifier["distanceWheelchair"] = "HKQuantityTypeIdentifierDistanceWheelchair";
  HKQuantityTypeIdentifier["basalEnergyBurned"] = "HKQuantityTypeIdentifierBasalEnergyBurned";
  HKQuantityTypeIdentifier["activeEnergyBurned"] = "HKQuantityTypeIdentifierActiveEnergyBurned";
  HKQuantityTypeIdentifier["flightsClimbed"] = "HKQuantityTypeIdentifierFlightsClimbed";
  HKQuantityTypeIdentifier["nikeFuel"] = "HKQuantityTypeIdentifierNikeFuel";
  HKQuantityTypeIdentifier["appleExerciseTime"] = "HKQuantityTypeIdentifierAppleExerciseTime";
  HKQuantityTypeIdentifier["pushCount"] = "HKQuantityTypeIdentifierPushCount";
  HKQuantityTypeIdentifier["distanceSwimming"] = "HKQuantityTypeIdentifierDistanceSwimming";
  HKQuantityTypeIdentifier["swimmingStrokeCount"] = "HKQuantityTypeIdentifierSwimmingStrokeCount";
  HKQuantityTypeIdentifier["vo2Max"] = "HKQuantityTypeIdentifierVO2Max";
  HKQuantityTypeIdentifier["distanceDownhillSnowSports"] = "HKQuantityTypeIdentifierDistanceDownhillSnowSports";
  HKQuantityTypeIdentifier["appleStandTime"] = "HKQuantityTypeIdentifierAppleStandTime";
  HKQuantityTypeIdentifier["heartRate"] = "HKQuantityTypeIdentifierHeartRate";
  HKQuantityTypeIdentifier["bodyTemperature"] = "HKQuantityTypeIdentifierBodyTemperature";
  HKQuantityTypeIdentifier["basalBodyTemperature"] = "HKQuantityTypeIdentifierBasalBodyTemperature";
  HKQuantityTypeIdentifier["bloodPressureSystolic"] = "HKQuantityTypeIdentifierBloodPressureSystolic";
  HKQuantityTypeIdentifier["bloodPressureDiastolic"] = "HKQuantityTypeIdentifierBloodPressureDiastolic";
  HKQuantityTypeIdentifier["respiratoryRate"] = "HKQuantityTypeIdentifierRespiratoryRate";
  HKQuantityTypeIdentifier["restingHeartRate"] = "HKQuantityTypeIdentifierRestingHeartRate";
  HKQuantityTypeIdentifier["walkingHeartRateAverage"] = "HKQuantityTypeIdentifierWalkingHeartRateAverage";
  HKQuantityTypeIdentifier["heartRateVariabilitySDNN"] = "HKQuantityTypeIdentifierHeartRateVariabilitySDNN";
  HKQuantityTypeIdentifier["oxygenSaturation"] = "HKQuantityTypeIdentifierOxygenSaturation";
  HKQuantityTypeIdentifier["peripheralPerfusionIndex"] = "HKQuantityTypeIdentifierPeripheralPerfusionIndex";
  HKQuantityTypeIdentifier["bloodGlucose"] = "HKQuantityTypeIdentifierBloodGlucose";
  HKQuantityTypeIdentifier["numberOfTimesFallen"] = "HKQuantityTypeIdentifierNumberOfTimesFallen";
  HKQuantityTypeIdentifier["electrodermalActivity"] = "HKQuantityTypeIdentifierElectrodermalActivity";
  HKQuantityTypeIdentifier["inhalerUsage"] = "HKQuantityTypeIdentifierInhalerUsage";
  HKQuantityTypeIdentifier["insulinDelivery"] = "HKQuantityTypeIdentifierInsulinDelivery";
  HKQuantityTypeIdentifier["bloodAlcoholContent"] = "HKQuantityTypeIdentifierBloodAlcoholContent";
  HKQuantityTypeIdentifier["forcedVitalCapacity"] = "HKQuantityTypeIdentifierForcedVitalCapacity";
  HKQuantityTypeIdentifier["forcedExpiratoryVolume1"] = "HKQuantityTypeIdentifierForcedExpiratoryVolume1";
  HKQuantityTypeIdentifier["peakExpiratoryFlowRate"] = "HKQuantityTypeIdentifierPeakExpiratoryFlowRate";
  HKQuantityTypeIdentifier["environmentalAudioExposure"] = "HKQuantityTypeIdentifierEnvironmentalAudioExposure";
  HKQuantityTypeIdentifier["headphoneAudioExposure"] = "HKQuantityTypeIdentifierHeadphoneAudioExposure";
  HKQuantityTypeIdentifier["dietaryFatTotal"] = "HKQuantityTypeIdentifierDietaryFatTotal";
  HKQuantityTypeIdentifier["dietaryFatPolyunsaturated"] = "HKQuantityTypeIdentifierDietaryFatPolyunsaturated";
  HKQuantityTypeIdentifier["dietaryFatMonounsaturated"] = "HKQuantityTypeIdentifierDietaryFatMonounsaturated";
  HKQuantityTypeIdentifier["dietaryFatSaturated"] = "HKQuantityTypeIdentifierDietaryFatSaturated";
  HKQuantityTypeIdentifier["dietaryCholesterol"] = "HKQuantityTypeIdentifierDietaryCholesterol";
  HKQuantityTypeIdentifier["dietarySodium"] = "HKQuantityTypeIdentifierDietarySodium";
  HKQuantityTypeIdentifier["dietaryCarbohydrates"] = "HKQuantityTypeIdentifierDietaryCarbohydrates";
  HKQuantityTypeIdentifier["dietaryFiber"] = "HKQuantityTypeIdentifierDietaryFiber";
  HKQuantityTypeIdentifier["dietarySugar"] = "HKQuantityTypeIdentifierDietarySugar";
  HKQuantityTypeIdentifier["dietaryEnergyConsumed"] = "HKQuantityTypeIdentifierDietaryEnergyConsumed";
  HKQuantityTypeIdentifier["dietaryProtein"] = "HKQuantityTypeIdentifierDietaryProtein";
  HKQuantityTypeIdentifier["dietaryVitaminA"] = "HKQuantityTypeIdentifierDietaryVitaminA";
  HKQuantityTypeIdentifier["dietaryVitaminB6"] = "HKQuantityTypeIdentifierDietaryVitaminB6";
  HKQuantityTypeIdentifier["dietaryVitaminB12"] = "HKQuantityTypeIdentifierDietaryVitaminB12";
  HKQuantityTypeIdentifier["dietaryVitaminC"] = "HKQuantityTypeIdentifierDietaryVitaminC";
  HKQuantityTypeIdentifier["dietaryVitaminD"] = "HKQuantityTypeIdentifierDietaryVitaminD";
  HKQuantityTypeIdentifier["dietaryVitaminE"] = "HKQuantityTypeIdentifierDietaryVitaminE";
  HKQuantityTypeIdentifier["dietaryVitaminK"] = "HKQuantityTypeIdentifierDietaryVitaminK";
  HKQuantityTypeIdentifier["dietaryCalcium"] = "HKQuantityTypeIdentifierDietaryCalcium";
  HKQuantityTypeIdentifier["dietaryIron"] = "HKQuantityTypeIdentifierDietaryIron";
  HKQuantityTypeIdentifier["dietaryThiamin"] = "HKQuantityTypeIdentifierDietaryThiamin";
  HKQuantityTypeIdentifier["dietaryRiboflavin"] = "HKQuantityTypeIdentifierDietaryRiboflavin";
  HKQuantityTypeIdentifier["dietaryNiacin"] = "HKQuantityTypeIdentifierDietaryNiacin";
  HKQuantityTypeIdentifier["dietaryFolate"] = "HKQuantityTypeIdentifierDietaryFolate";
  HKQuantityTypeIdentifier["dietaryBiotin"] = "HKQuantityTypeIdentifierDietaryBiotin";
  HKQuantityTypeIdentifier["dietaryPantothenicAcid"] = "HKQuantityTypeIdentifierDietaryPantothenicAcid";
  HKQuantityTypeIdentifier["dietaryPhosphorus"] = "HKQuantityTypeIdentifierDietaryPhosphorus";
  HKQuantityTypeIdentifier["dietaryIodine"] = "HKQuantityTypeIdentifierDietaryIodine";
  HKQuantityTypeIdentifier["dietaryMagnesium"] = "HKQuantityTypeIdentifierDietaryMagnesium";
  HKQuantityTypeIdentifier["dietaryZinc"] = "HKQuantityTypeIdentifierDietaryZinc";
  HKQuantityTypeIdentifier["dietarySelenium"] = "HKQuantityTypeIdentifierDietarySelenium";
  HKQuantityTypeIdentifier["dietaryCopper"] = "HKQuantityTypeIdentifierDietaryCopper";
  HKQuantityTypeIdentifier["dietaryManganese"] = "HKQuantityTypeIdentifierDietaryManganese";
  HKQuantityTypeIdentifier["dietaryChromium"] = "HKQuantityTypeIdentifierDietaryChromium";
  HKQuantityTypeIdentifier["dietaryMolybdenum"] = "HKQuantityTypeIdentifierDietaryMolybdenum";
  HKQuantityTypeIdentifier["dietaryChloride"] = "HKQuantityTypeIdentifierDietaryChloride";
  HKQuantityTypeIdentifier["dietaryPotassium"] = "HKQuantityTypeIdentifierDietaryPotassium";
  HKQuantityTypeIdentifier["dietaryCaffeine"] = "HKQuantityTypeIdentifierDietaryCaffeine";
  HKQuantityTypeIdentifier["dietaryWater"] = "HKQuantityTypeIdentifierDietaryWater";
  HKQuantityTypeIdentifier["sixMinuteWalkTestDistance"] = "HKQuantityTypeIdentifierSixMinuteWalkTestDistance";
  HKQuantityTypeIdentifier["walkingSpeed"] = "HKQuantityTypeIdentifierWalkingSpeed";
  HKQuantityTypeIdentifier["walkingStepLength"] = "HKQuantityTypeIdentifierWalkingStepLength";
  HKQuantityTypeIdentifier["walkingAsymmetryPercentage"] = "HKQuantityTypeIdentifierWalkingAsymmetryPercentage";
  HKQuantityTypeIdentifier["walkingDoubleSupportPercentage"] = "HKQuantityTypeIdentifierWalkingDoubleSupportPercentage";
  HKQuantityTypeIdentifier["stairAscentSpeed"] = "HKQuantityTypeIdentifierStairAscentSpeed";
  HKQuantityTypeIdentifier["stairDescentSpeed"] = "HKQuantityTypeIdentifierStairDescentSpeed";
  HKQuantityTypeIdentifier["uvExposure"] = "HKQuantityTypeIdentifierUVExposure";
  HKQuantityTypeIdentifier["appleMoveTime"] = "HKQuantityTypeIdentifierAppleMoveTime";
  HKQuantityTypeIdentifier["appleWalkingSteadiness"] = "HKQuantityTypeIdentifierAppleWalkingSteadiness";
  HKQuantityTypeIdentifier["numberOfAlcoholicBeverages"] = "HKQuantityTypeIdentifierNumberOfAlcoholicBeverages";
  HKQuantityTypeIdentifier["atrialFibrillationBurden"] = "HKQuantityTypeIdentifierAtrialFibrillationBurden";
  HKQuantityTypeIdentifier["underwaterDepth"] = "HKQuantityTypeIdentifierUnderwaterDepth";
  HKQuantityTypeIdentifier["waterTemperature"] = "HKQuantityTypeIdentifierWaterTemperature";
  HKQuantityTypeIdentifier["appleSleepingWristTemperature"] = "HKQuantityTypeIdentifierAppleSleepingWristTemperature";
  HKQuantityTypeIdentifier["timeInDaylight"] = "HKQuantityTypeIdentifierTimeInDaylight";
  HKQuantityTypeIdentifier["physicalEffort"] = "HKQuantityTypeIdentifierPhysicalEffort";
  HKQuantityTypeIdentifier["cyclingSpeed"] = "HKQuantityTypeIdentifierCyclingSpeed";
  HKQuantityTypeIdentifier["cyclingPower"] = "HKQuantityTypeIdentifierCyclingPower";
  HKQuantityTypeIdentifier["cyclingFunctionalThresholdPower"] = "HKQuantityTypeIdentifierCyclingFunctionalThresholdPower";
  HKQuantityTypeIdentifier["cyclingCadence"] = "HKQuantityTypeIdentifierCyclingCadence";
  HKQuantityTypeIdentifier["environmentalSoundReduction"] = "HKQuantityTypeIdentifierEnvironmentalSoundReduction";
  HKQuantityTypeIdentifier["heartRateRecoveryOneMinute"] = "HKQuantityTypeIdentifierHeartRateRecoveryOneMinute";
  HKQuantityTypeIdentifier["runningGroundContactTime"] = "HKQuantityTypeIdentifierRunningGroundContactTime";
  HKQuantityTypeIdentifier["runningStrideLength"] = "HKQuantityTypeIdentifierRunningStrideLength";
  HKQuantityTypeIdentifier["runningPower"] = "HKQuantityTypeIdentifierRunningPower";
  HKQuantityTypeIdentifier["runningVerticalOscillation"] = "HKQuantityTypeIdentifierRunningVerticalOscillation";
  HKQuantityTypeIdentifier["runningSpeed"] = "HKQuantityTypeIdentifierRunningSpeed";
  HKQuantityTypeIdentifier["crossCountrySkiingSpeed"] = "HKQuantityTypeIdentifierCrossCountrySkiingSpeed";
  HKQuantityTypeIdentifier["distanceCrossCountrySkiing"] = "HKQuantityTypeIdentifierDistanceCrossCountrySkiing";
  HKQuantityTypeIdentifier["distancePaddleSports"] = "HKQuantityTypeIdentifierDistancePaddleSports";
  HKQuantityTypeIdentifier["distanceRowing"] = "HKQuantityTypeIdentifierDistanceRowing";
  HKQuantityTypeIdentifier["distanceSkatingSports"] = "HKQuantityTypeIdentifierDistanceSkatingSports";
  HKQuantityTypeIdentifier["estimatedWorkoutEffortScore"] = "HKQuantityTypeIdentifierEstimatedWorkoutEffortScore";
  HKQuantityTypeIdentifier["paddleSportsSpeed"] = "HKQuantityTypeIdentifierPaddleSportsSpeed";
  HKQuantityTypeIdentifier["rowingSpeed"] = "HKQuantityTypeIdentifierRowingSpeed";
  HKQuantityTypeIdentifier["workoutEffortScore"] = "HKQuantityTypeIdentifierWorkoutEffortScore";
  return HKQuantityTypeIdentifier;
}({});
let HKCategoryValueLowCardioFitnessEvent = exports.HKCategoryValueLowCardioFitnessEvent = /*#__PURE__*/function (HKCategoryValueLowCardioFitnessEvent) {
  HKCategoryValueLowCardioFitnessEvent[HKCategoryValueLowCardioFitnessEvent["lowFitness"] = 1] = "lowFitness";
  return HKCategoryValueLowCardioFitnessEvent;
}({});
let HKHeartRateMotionContext = exports.HKHeartRateMotionContext = /*#__PURE__*/function (HKHeartRateMotionContext) {
  HKHeartRateMotionContext[HKHeartRateMotionContext["active"] = 2] = "active";
  HKHeartRateMotionContext[HKHeartRateMotionContext["notSet"] = 0] = "notSet";
  HKHeartRateMotionContext[HKHeartRateMotionContext["sedentary"] = 1] = "sedentary";
  return HKHeartRateMotionContext;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcorrelationtypeidentifier Apple Docs }
 */
let HKCorrelationTypeIdentifier = exports.HKCorrelationTypeIdentifier = /*#__PURE__*/function (HKCorrelationTypeIdentifier) {
  HKCorrelationTypeIdentifier["bloodPressure"] = "HKCorrelationTypeIdentifierBloodPressure";
  HKCorrelationTypeIdentifier["food"] = "HKCorrelationTypeIdentifierFood";
  return HKCorrelationTypeIdentifier;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier Apple Docs }
 */
let HKCategoryTypeIdentifier = exports.HKCategoryTypeIdentifier = /*#__PURE__*/function (HKCategoryTypeIdentifier) {
  HKCategoryTypeIdentifier["sleepAnalysis"] = "HKCategoryTypeIdentifierSleepAnalysis";
  HKCategoryTypeIdentifier["appleStandHour"] = "HKCategoryTypeIdentifierAppleStandHour";
  HKCategoryTypeIdentifier["cervicalMucusQuality"] = "HKCategoryTypeIdentifierCervicalMucusQuality";
  HKCategoryTypeIdentifier["ovulationTestResult"] = "HKCategoryTypeIdentifierOvulationTestResult";
  HKCategoryTypeIdentifier["menstrualFlow"] = "HKCategoryTypeIdentifierMenstrualFlow";
  HKCategoryTypeIdentifier["intermenstrualBleeding"] = "HKCategoryTypeIdentifierIntermenstrualBleeding";
  HKCategoryTypeIdentifier["sexualActivity"] = "HKCategoryTypeIdentifierSexualActivity";
  HKCategoryTypeIdentifier["mindfulSession"] = "HKCategoryTypeIdentifierMindfulSession";
  HKCategoryTypeIdentifier["highHeartRateEvent"] = "HKCategoryTypeIdentifierHighHeartRateEvent";
  HKCategoryTypeIdentifier["lowHeartRateEvent"] = "HKCategoryTypeIdentifierLowHeartRateEvent";
  HKCategoryTypeIdentifier["irregularHeartRhythmEvent"] = "HKCategoryTypeIdentifierIrregularHeartRhythmEvent";
  HKCategoryTypeIdentifier["audioExposureEvent"] = "HKCategoryTypeIdentifierAudioExposureEvent";
  HKCategoryTypeIdentifier["toothbrushingEvent"] = "HKCategoryTypeIdentifierToothbrushingEvent";
  HKCategoryTypeIdentifier["lowCardioFitnessEvent"] = "HKCategoryTypeIdentifierLowCardioFitnessEvent";
  HKCategoryTypeIdentifier["contraceptive"] = "HKCategoryTypeIdentifierContraceptive";
  HKCategoryTypeIdentifier["lactation"] = "HKCategoryTypeIdentifierLactation";
  HKCategoryTypeIdentifier["pregnancy"] = "HKCategoryTypeIdentifierPregnancy";
  HKCategoryTypeIdentifier["pregnancyTestResult"] = "HKCategoryTypeIdentifierPregnancyTestResult";
  HKCategoryTypeIdentifier["progesteroneTestResult"] = "HKCategoryTypeIdentifierProgesteroneTestResult";
  HKCategoryTypeIdentifier["environmentalAudioExposureEvent"] = "HKCategoryTypeIdentifierEnvironmentalAudioExposureEvent";
  HKCategoryTypeIdentifier["headphoneAudioExposureEvent"] = "HKCategoryTypeIdentifierHeadphoneAudioExposureEvent";
  HKCategoryTypeIdentifier["appleWalkingSteadinessEvent"] = "HKCategoryTypeIdentifierAppleWalkingSteadinessEvent";
  HKCategoryTypeIdentifier["handwashingEvent"] = "HKCategoryTypeIdentifierHandwashingEvent";
  HKCategoryTypeIdentifier["abdominalCramps"] = "HKCategoryTypeIdentifierAbdominalCramps";
  HKCategoryTypeIdentifier["acne"] = "HKCategoryTypeIdentifierAcne";
  HKCategoryTypeIdentifier["appetiteChanges"] = "HKCategoryTypeIdentifierAppetiteChanges";
  HKCategoryTypeIdentifier["bladderIncontinence"] = "HKCategoryTypeIdentifierBladderIncontinence";
  HKCategoryTypeIdentifier["bloating"] = "HKCategoryTypeIdentifierBloating";
  HKCategoryTypeIdentifier["breastPain"] = "HKCategoryTypeIdentifierBreastPain";
  HKCategoryTypeIdentifier["chestTightnessOrPain"] = "HKCategoryTypeIdentifierChestTightnessOrPain";
  HKCategoryTypeIdentifier["chills"] = "HKCategoryTypeIdentifierChills";
  HKCategoryTypeIdentifier["constipation"] = "HKCategoryTypeIdentifierConstipation";
  HKCategoryTypeIdentifier["coughing"] = "HKCategoryTypeIdentifierCoughing";
  HKCategoryTypeIdentifier["diarrhea"] = "HKCategoryTypeIdentifierDiarrhea";
  HKCategoryTypeIdentifier["dizziness"] = "HKCategoryTypeIdentifierDizziness";
  HKCategoryTypeIdentifier["drySkin"] = "HKCategoryTypeIdentifierDrySkin";
  HKCategoryTypeIdentifier["fainting"] = "HKCategoryTypeIdentifierFainting";
  HKCategoryTypeIdentifier["fatigue"] = "HKCategoryTypeIdentifierFatigue";
  HKCategoryTypeIdentifier["fever"] = "HKCategoryTypeIdentifierFever";
  HKCategoryTypeIdentifier["generalizedBodyAche"] = "HKCategoryTypeIdentifierGeneralizedBodyAche";
  HKCategoryTypeIdentifier["hairLoss"] = "HKCategoryTypeIdentifierHairLoss";
  HKCategoryTypeIdentifier["headache"] = "HKCategoryTypeIdentifierHeadache";
  HKCategoryTypeIdentifier["heartburn"] = "HKCategoryTypeIdentifierHeartburn";
  HKCategoryTypeIdentifier["hotFlashes"] = "HKCategoryTypeIdentifierHotFlashes";
  HKCategoryTypeIdentifier["lossOfSmell"] = "HKCategoryTypeIdentifierLossOfSmell";
  HKCategoryTypeIdentifier["lossOfTaste"] = "HKCategoryTypeIdentifierLossOfTaste";
  HKCategoryTypeIdentifier["lowerBackPain"] = "HKCategoryTypeIdentifierLowerBackPain";
  HKCategoryTypeIdentifier["memoryLapse"] = "HKCategoryTypeIdentifierMemoryLapse";
  HKCategoryTypeIdentifier["moodChanges"] = "HKCategoryTypeIdentifierMoodChanges";
  HKCategoryTypeIdentifier["nausea"] = "HKCategoryTypeIdentifierNausea";
  HKCategoryTypeIdentifier["nightSweats"] = "HKCategoryTypeIdentifierNightSweats";
  HKCategoryTypeIdentifier["pelvicPain"] = "HKCategoryTypeIdentifierPelvicPain";
  HKCategoryTypeIdentifier["rapidPoundingOrFlutteringHeartbeat"] = "HKCategoryTypeIdentifierRapidPoundingOrFlutteringHeartbeat";
  HKCategoryTypeIdentifier["runnyNose"] = "HKCategoryTypeIdentifierRunnyNose";
  HKCategoryTypeIdentifier["shortnessOfBreath"] = "HKCategoryTypeIdentifierShortnessOfBreath";
  HKCategoryTypeIdentifier["sinusCongestion"] = "HKCategoryTypeIdentifierSinusCongestion";
  HKCategoryTypeIdentifier["skippedHeartbeat"] = "HKCategoryTypeIdentifierSkippedHeartbeat";
  HKCategoryTypeIdentifier["sleepChanges"] = "HKCategoryTypeIdentifierSleepChanges";
  HKCategoryTypeIdentifier["soreThroat"] = "HKCategoryTypeIdentifierSoreThroat";
  HKCategoryTypeIdentifier["vaginalDryness"] = "HKCategoryTypeIdentifierVaginalDryness";
  HKCategoryTypeIdentifier["vomiting"] = "HKCategoryTypeIdentifierVomiting";
  HKCategoryTypeIdentifier["wheezing"] = "HKCategoryTypeIdentifierWheezing";
  HKCategoryTypeIdentifier["bleedingAfterPregnancy"] = "HKCategoryTypeIdentifierBleedingAfterPregnancy";
  HKCategoryTypeIdentifier["bleedingDuringPregnancy"] = "HKCategoryTypeIdentifierBleedingDuringPregnancy";
  return HKCategoryTypeIdentifier;
}({}); // HKCategoryValueSeverity
let HKCategoryValueAppleStandHour = exports.HKCategoryValueAppleStandHour = /*#__PURE__*/function (HKCategoryValueAppleStandHour) {
  HKCategoryValueAppleStandHour[HKCategoryValueAppleStandHour["stood"] = 0] = "stood";
  HKCategoryValueAppleStandHour[HKCategoryValueAppleStandHour["idle"] = 1] = "idle";
  return HKCategoryValueAppleStandHour;
}({});
let HKWorkoutActivityType = exports.HKWorkoutActivityType = /*#__PURE__*/function (HKWorkoutActivityType) {
  HKWorkoutActivityType[HKWorkoutActivityType["americanFootball"] = 1] = "americanFootball";
  HKWorkoutActivityType[HKWorkoutActivityType["archery"] = 2] = "archery";
  HKWorkoutActivityType[HKWorkoutActivityType["australianFootball"] = 3] = "australianFootball";
  HKWorkoutActivityType[HKWorkoutActivityType["badminton"] = 4] = "badminton";
  HKWorkoutActivityType[HKWorkoutActivityType["baseball"] = 5] = "baseball";
  HKWorkoutActivityType[HKWorkoutActivityType["basketball"] = 6] = "basketball";
  HKWorkoutActivityType[HKWorkoutActivityType["bowling"] = 7] = "bowling";
  HKWorkoutActivityType[HKWorkoutActivityType["boxing"] = 8] = "boxing";
  HKWorkoutActivityType[HKWorkoutActivityType["climbing"] = 9] = "climbing";
  HKWorkoutActivityType[HKWorkoutActivityType["cricket"] = 10] = "cricket";
  HKWorkoutActivityType[HKWorkoutActivityType["crossTraining"] = 11] = "crossTraining";
  HKWorkoutActivityType[HKWorkoutActivityType["curling"] = 12] = "curling";
  HKWorkoutActivityType[HKWorkoutActivityType["cycling"] = 13] = "cycling";
  HKWorkoutActivityType[HKWorkoutActivityType["dance"] = 14] = "dance";
  HKWorkoutActivityType[HKWorkoutActivityType["danceInspiredTraining"] = 15] = "danceInspiredTraining";
  HKWorkoutActivityType[HKWorkoutActivityType["elliptical"] = 16] = "elliptical";
  HKWorkoutActivityType[HKWorkoutActivityType["equestrianSports"] = 17] = "equestrianSports";
  HKWorkoutActivityType[HKWorkoutActivityType["fencing"] = 18] = "fencing";
  HKWorkoutActivityType[HKWorkoutActivityType["fishing"] = 19] = "fishing";
  HKWorkoutActivityType[HKWorkoutActivityType["functionalStrengthTraining"] = 20] = "functionalStrengthTraining";
  HKWorkoutActivityType[HKWorkoutActivityType["golf"] = 21] = "golf";
  HKWorkoutActivityType[HKWorkoutActivityType["gymnastics"] = 22] = "gymnastics";
  HKWorkoutActivityType[HKWorkoutActivityType["handball"] = 23] = "handball";
  HKWorkoutActivityType[HKWorkoutActivityType["hiking"] = 24] = "hiking";
  HKWorkoutActivityType[HKWorkoutActivityType["hockey"] = 25] = "hockey";
  HKWorkoutActivityType[HKWorkoutActivityType["hunting"] = 26] = "hunting";
  HKWorkoutActivityType[HKWorkoutActivityType["lacrosse"] = 27] = "lacrosse";
  HKWorkoutActivityType[HKWorkoutActivityType["martialArts"] = 28] = "martialArts";
  HKWorkoutActivityType[HKWorkoutActivityType["mindAndBody"] = 29] = "mindAndBody";
  HKWorkoutActivityType[HKWorkoutActivityType["mixedMetabolicCardioTraining"] = 30] = "mixedMetabolicCardioTraining";
  HKWorkoutActivityType[HKWorkoutActivityType["paddleSports"] = 31] = "paddleSports";
  HKWorkoutActivityType[HKWorkoutActivityType["play"] = 32] = "play";
  HKWorkoutActivityType[HKWorkoutActivityType["preparationAndRecovery"] = 33] = "preparationAndRecovery";
  HKWorkoutActivityType[HKWorkoutActivityType["racquetball"] = 34] = "racquetball";
  HKWorkoutActivityType[HKWorkoutActivityType["rowing"] = 35] = "rowing";
  HKWorkoutActivityType[HKWorkoutActivityType["rugby"] = 36] = "rugby";
  HKWorkoutActivityType[HKWorkoutActivityType["running"] = 37] = "running";
  HKWorkoutActivityType[HKWorkoutActivityType["sailing"] = 38] = "sailing";
  HKWorkoutActivityType[HKWorkoutActivityType["skatingSports"] = 39] = "skatingSports";
  HKWorkoutActivityType[HKWorkoutActivityType["snowSports"] = 40] = "snowSports";
  HKWorkoutActivityType[HKWorkoutActivityType["soccer"] = 41] = "soccer";
  HKWorkoutActivityType[HKWorkoutActivityType["softball"] = 42] = "softball";
  HKWorkoutActivityType[HKWorkoutActivityType["squash"] = 43] = "squash";
  HKWorkoutActivityType[HKWorkoutActivityType["stairClimbing"] = 44] = "stairClimbing";
  HKWorkoutActivityType[HKWorkoutActivityType["surfingSports"] = 45] = "surfingSports";
  HKWorkoutActivityType[HKWorkoutActivityType["swimming"] = 46] = "swimming";
  HKWorkoutActivityType[HKWorkoutActivityType["tableTennis"] = 47] = "tableTennis";
  HKWorkoutActivityType[HKWorkoutActivityType["tennis"] = 48] = "tennis";
  HKWorkoutActivityType[HKWorkoutActivityType["trackAndField"] = 49] = "trackAndField";
  HKWorkoutActivityType[HKWorkoutActivityType["traditionalStrengthTraining"] = 50] = "traditionalStrengthTraining";
  HKWorkoutActivityType[HKWorkoutActivityType["volleyball"] = 51] = "volleyball";
  HKWorkoutActivityType[HKWorkoutActivityType["walking"] = 52] = "walking";
  HKWorkoutActivityType[HKWorkoutActivityType["waterFitness"] = 53] = "waterFitness";
  HKWorkoutActivityType[HKWorkoutActivityType["waterPolo"] = 54] = "waterPolo";
  HKWorkoutActivityType[HKWorkoutActivityType["waterSports"] = 55] = "waterSports";
  HKWorkoutActivityType[HKWorkoutActivityType["wrestling"] = 56] = "wrestling";
  HKWorkoutActivityType[HKWorkoutActivityType["yoga"] = 57] = "yoga";
  HKWorkoutActivityType[HKWorkoutActivityType["barre"] = 58] = "barre";
  HKWorkoutActivityType[HKWorkoutActivityType["coreTraining"] = 59] = "coreTraining";
  HKWorkoutActivityType[HKWorkoutActivityType["crossCountrySkiing"] = 60] = "crossCountrySkiing";
  HKWorkoutActivityType[HKWorkoutActivityType["downhillSkiing"] = 61] = "downhillSkiing";
  HKWorkoutActivityType[HKWorkoutActivityType["flexibility"] = 62] = "flexibility";
  HKWorkoutActivityType[HKWorkoutActivityType["highIntensityIntervalTraining"] = 63] = "highIntensityIntervalTraining";
  HKWorkoutActivityType[HKWorkoutActivityType["jumpRope"] = 64] = "jumpRope";
  HKWorkoutActivityType[HKWorkoutActivityType["kickboxing"] = 65] = "kickboxing";
  HKWorkoutActivityType[HKWorkoutActivityType["pilates"] = 66] = "pilates";
  HKWorkoutActivityType[HKWorkoutActivityType["snowboarding"] = 67] = "snowboarding";
  HKWorkoutActivityType[HKWorkoutActivityType["stairs"] = 68] = "stairs";
  HKWorkoutActivityType[HKWorkoutActivityType["stepTraining"] = 69] = "stepTraining";
  HKWorkoutActivityType[HKWorkoutActivityType["wheelchairWalkPace"] = 70] = "wheelchairWalkPace";
  HKWorkoutActivityType[HKWorkoutActivityType["wheelchairRunPace"] = 71] = "wheelchairRunPace";
  HKWorkoutActivityType[HKWorkoutActivityType["taiChi"] = 72] = "taiChi";
  HKWorkoutActivityType[HKWorkoutActivityType["mixedCardio"] = 73] = "mixedCardio";
  HKWorkoutActivityType[HKWorkoutActivityType["handCycling"] = 74] = "handCycling";
  HKWorkoutActivityType[HKWorkoutActivityType["discSports"] = 75] = "discSports";
  HKWorkoutActivityType[HKWorkoutActivityType["fitnessGaming"] = 76] = "fitnessGaming";
  HKWorkoutActivityType[HKWorkoutActivityType["cardioDance"] = 77] = "cardioDance";
  HKWorkoutActivityType[HKWorkoutActivityType["socialDance"] = 78] = "socialDance";
  HKWorkoutActivityType[HKWorkoutActivityType["pickleball"] = 79] = "pickleball";
  HKWorkoutActivityType[HKWorkoutActivityType["cooldown"] = 80] = "cooldown";
  HKWorkoutActivityType[HKWorkoutActivityType["swimBikeRun"] = 82] = "swimBikeRun";
  HKWorkoutActivityType[HKWorkoutActivityType["transition"] = 83] = "transition";
  HKWorkoutActivityType[HKWorkoutActivityType["underwaterDiving"] = 84] = "underwaterDiving";
  HKWorkoutActivityType[HKWorkoutActivityType["other"] = 3000] = "other";
  return HKWorkoutActivityType;
}({});
// documented at https://developer.apple.com/documentation/healthkit/hkweathercondition
let HKWeatherCondition = exports.HKWeatherCondition = /*#__PURE__*/function (HKWeatherCondition) {
  HKWeatherCondition[HKWeatherCondition["none"] = 0] = "none";
  HKWeatherCondition[HKWeatherCondition["clear"] = 1] = "clear";
  HKWeatherCondition[HKWeatherCondition["fair"] = 2] = "fair";
  HKWeatherCondition[HKWeatherCondition["partlyCloudy"] = 3] = "partlyCloudy";
  HKWeatherCondition[HKWeatherCondition["mostlyCloudy"] = 4] = "mostlyCloudy";
  HKWeatherCondition[HKWeatherCondition["cloudy"] = 5] = "cloudy";
  HKWeatherCondition[HKWeatherCondition["foggy"] = 6] = "foggy";
  HKWeatherCondition[HKWeatherCondition["haze"] = 7] = "haze";
  HKWeatherCondition[HKWeatherCondition["windy"] = 8] = "windy";
  HKWeatherCondition[HKWeatherCondition["blustery"] = 9] = "blustery";
  HKWeatherCondition[HKWeatherCondition["smoky"] = 10] = "smoky";
  HKWeatherCondition[HKWeatherCondition["dust"] = 11] = "dust";
  HKWeatherCondition[HKWeatherCondition["snow"] = 12] = "snow";
  HKWeatherCondition[HKWeatherCondition["hail"] = 13] = "hail";
  HKWeatherCondition[HKWeatherCondition["sleet"] = 14] = "sleet";
  HKWeatherCondition[HKWeatherCondition["freezingDrizzle"] = 15] = "freezingDrizzle";
  HKWeatherCondition[HKWeatherCondition["freezingRain"] = 16] = "freezingRain";
  HKWeatherCondition[HKWeatherCondition["mixedRainAndHail"] = 17] = "mixedRainAndHail";
  HKWeatherCondition[HKWeatherCondition["mixedRainAndSnow"] = 18] = "mixedRainAndSnow";
  HKWeatherCondition[HKWeatherCondition["mixedRainAndSleet"] = 19] = "mixedRainAndSleet";
  HKWeatherCondition[HKWeatherCondition["mixedSnowAndSleet"] = 20] = "mixedSnowAndSleet";
  HKWeatherCondition[HKWeatherCondition["drizzle"] = 21] = "drizzle";
  HKWeatherCondition[HKWeatherCondition["scatteredShowers"] = 22] = "scatteredShowers";
  HKWeatherCondition[HKWeatherCondition["showers"] = 23] = "showers";
  HKWeatherCondition[HKWeatherCondition["thunderstorms"] = 24] = "thunderstorms";
  HKWeatherCondition[HKWeatherCondition["tropicalStorm"] = 25] = "tropicalStorm";
  HKWeatherCondition[HKWeatherCondition["hurricane"] = 26] = "hurricane";
  HKWeatherCondition[HKWeatherCondition["tornado"] = 27] = "tornado";
  return HKWeatherCondition;
}({});
var HKIndoorWorkout = /*#__PURE__*/function (HKIndoorWorkout) {
  HKIndoorWorkout[HKIndoorWorkout["false"] = 0] = "false";
  HKIndoorWorkout[HKIndoorWorkout["true"] = 1] = "true";
  return HKIndoorWorkout;
}(HKIndoorWorkout || {});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkauthorizationrequeststatus Apple Docs }
 */
let HKAuthorizationRequestStatus = exports.HKAuthorizationRequestStatus = /*#__PURE__*/function (HKAuthorizationRequestStatus) {
  HKAuthorizationRequestStatus[HKAuthorizationRequestStatus["unknown"] = 0] = "unknown";
  HKAuthorizationRequestStatus[HKAuthorizationRequestStatus["shouldRequest"] = 1] = "shouldRequest";
  HKAuthorizationRequestStatus[HKAuthorizationRequestStatus["unnecessary"] = 2] = "unnecessary";
  return HKAuthorizationRequestStatus;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkauthorizationstatus Apple Docs }
 */
let HKAuthorizationStatus = exports.HKAuthorizationStatus = /*#__PURE__*/function (HKAuthorizationStatus) {
  HKAuthorizationStatus[HKAuthorizationStatus["notDetermined"] = 0] = "notDetermined";
  HKAuthorizationStatus[HKAuthorizationStatus["sharingDenied"] = 1] = "sharingDenied";
  HKAuthorizationStatus[HKAuthorizationStatus["sharingAuthorized"] = 2] = "sharingAuthorized";
  return HKAuthorizationStatus;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkbloodtype Apple Docs }
 */
let HKBloodType = exports.HKBloodType = /*#__PURE__*/function (HKBloodType) {
  HKBloodType[HKBloodType["notSet"] = 0] = "notSet";
  HKBloodType[HKBloodType["aPositive"] = 1] = "aPositive";
  HKBloodType[HKBloodType["aNegative"] = 2] = "aNegative";
  HKBloodType[HKBloodType["bPositive"] = 3] = "bPositive";
  HKBloodType[HKBloodType["bNegative"] = 4] = "bNegative";
  HKBloodType[HKBloodType["abPositive"] = 5] = "abPositive";
  HKBloodType[HKBloodType["abNegative"] = 6] = "abNegative";
  HKBloodType[HKBloodType["oPositive"] = 7] = "oPositive";
  HKBloodType[HKBloodType["oNegative"] = 8] = "oNegative";
  return HKBloodType;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkbiologicalsex Apple Docs }
 */
let HKBiologicalSex = exports.HKBiologicalSex = /*#__PURE__*/function (HKBiologicalSex) {
  HKBiologicalSex[HKBiologicalSex["notSet"] = 0] = "notSet";
  HKBiologicalSex[HKBiologicalSex["female"] = 1] = "female";
  HKBiologicalSex[HKBiologicalSex["male"] = 2] = "male";
  HKBiologicalSex[HKBiologicalSex["other"] = 3] = "other";
  return HKBiologicalSex;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkfitzpatrickskintype Apple Docs }
 */
let HKFitzpatrickSkinType = exports.HKFitzpatrickSkinType = /*#__PURE__*/function (HKFitzpatrickSkinType) {
  HKFitzpatrickSkinType[HKFitzpatrickSkinType["notSet"] = 0] = "notSet";
  HKFitzpatrickSkinType[HKFitzpatrickSkinType["I"] = 1] = "I";
  HKFitzpatrickSkinType[HKFitzpatrickSkinType["II"] = 2] = "II";
  HKFitzpatrickSkinType[HKFitzpatrickSkinType["III"] = 3] = "III";
  HKFitzpatrickSkinType[HKFitzpatrickSkinType["IV"] = 4] = "IV";
  HKFitzpatrickSkinType[HKFitzpatrickSkinType["V"] = 5] = "V";
  HKFitzpatrickSkinType[HKFitzpatrickSkinType["VI"] = 6] = "VI";
  return HKFitzpatrickSkinType;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkstatisticsoptions Apple Docs }
 */
let HKStatisticsOptions = exports.HKStatisticsOptions = /*#__PURE__*/function (HKStatisticsOptions) {
  HKStatisticsOptions["cumulativeSum"] = "cumulativeSum";
  HKStatisticsOptions["discreteAverage"] = "discreteAverage";
  HKStatisticsOptions["discreteMax"] = "discreteMax";
  HKStatisticsOptions["discreteMin"] = "discreteMin";
  HKStatisticsOptions["discreteMostRecent"] = "discreteMostRecent";
  HKStatisticsOptions["duration"] = "duration";
  HKStatisticsOptions["mostRecent"] = "mostRecent";
  HKStatisticsOptions["separateBySource"] = "separateBySource";
  return HKStatisticsOptions;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvaluecervicalmucusquality Apple Docs }
 */
let HKCategoryValueCervicalMucusQuality = exports.HKCategoryValueCervicalMucusQuality = /*#__PURE__*/function (HKCategoryValueCervicalMucusQuality) {
  HKCategoryValueCervicalMucusQuality[HKCategoryValueCervicalMucusQuality["dry"] = 1] = "dry";
  HKCategoryValueCervicalMucusQuality[HKCategoryValueCervicalMucusQuality["sticky"] = 2] = "sticky";
  HKCategoryValueCervicalMucusQuality[HKCategoryValueCervicalMucusQuality["creamy"] = 3] = "creamy";
  HKCategoryValueCervicalMucusQuality[HKCategoryValueCervicalMucusQuality["watery"] = 4] = "watery";
  HKCategoryValueCervicalMucusQuality[HKCategoryValueCervicalMucusQuality["eggWhite"] = 5] = "eggWhite";
  return HKCategoryValueCervicalMucusQuality;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvaluemenstrualflow Apple Docs }
 * @deprecated In iOS 18 beta
 */
let HKCategoryValueMenstrualFlow = exports.HKCategoryValueMenstrualFlow = /*#__PURE__*/function (HKCategoryValueMenstrualFlow) {
  HKCategoryValueMenstrualFlow[HKCategoryValueMenstrualFlow["unspecified"] = 1] = "unspecified";
  HKCategoryValueMenstrualFlow[HKCategoryValueMenstrualFlow["none"] = 5] = "none";
  HKCategoryValueMenstrualFlow[HKCategoryValueMenstrualFlow["light"] = 2] = "light";
  HKCategoryValueMenstrualFlow[HKCategoryValueMenstrualFlow["medium"] = 3] = "medium";
  HKCategoryValueMenstrualFlow[HKCategoryValueMenstrualFlow["heavy"] = 4] = "heavy";
  return HKCategoryValueMenstrualFlow;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvalueovulationtestresult Apple Docs }
 */
let HKCategoryValueOvulationTestResult = exports.HKCategoryValueOvulationTestResult = /*#__PURE__*/function (HKCategoryValueOvulationTestResult) {
  HKCategoryValueOvulationTestResult[HKCategoryValueOvulationTestResult["negative"] = 1] = "negative";
  HKCategoryValueOvulationTestResult[HKCategoryValueOvulationTestResult["luteinizingHormoneSurge"] = 2] = "luteinizingHormoneSurge";
  HKCategoryValueOvulationTestResult[HKCategoryValueOvulationTestResult["indeterminate"] = 3] = "indeterminate";
  HKCategoryValueOvulationTestResult[HKCategoryValueOvulationTestResult["estrogenSurge"] = 4] = "estrogenSurge";
  return HKCategoryValueOvulationTestResult;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis Apple Docs }
 */
let HKCategoryValueSleepAnalysis = exports.HKCategoryValueSleepAnalysis = /*#__PURE__*/function (HKCategoryValueSleepAnalysis) {
  HKCategoryValueSleepAnalysis[HKCategoryValueSleepAnalysis["inBed"] = 0] = "inBed";
  HKCategoryValueSleepAnalysis[HKCategoryValueSleepAnalysis["asleepUnspecified"] = 1] = "asleepUnspecified";
  HKCategoryValueSleepAnalysis[HKCategoryValueSleepAnalysis["awake"] = 2] = "awake";
  HKCategoryValueSleepAnalysis[HKCategoryValueSleepAnalysis["asleepCore"] = 3] = "asleepCore";
  HKCategoryValueSleepAnalysis[HKCategoryValueSleepAnalysis["asleepDeep"] = 4] = "asleepDeep";
  HKCategoryValueSleepAnalysis[HKCategoryValueSleepAnalysis["asleepREM"] = 5] = "asleepREM";
  return HKCategoryValueSleepAnalysis;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvalueappetitechanges Apple Docs}
 */
let HKCategoryValueAppetiteChanges = exports.HKCategoryValueAppetiteChanges = /*#__PURE__*/function (HKCategoryValueAppetiteChanges) {
  HKCategoryValueAppetiteChanges[HKCategoryValueAppetiteChanges["decreased"] = 2] = "decreased";
  HKCategoryValueAppetiteChanges[HKCategoryValueAppetiteChanges["increased"] = 3] = "increased";
  HKCategoryValueAppetiteChanges[HKCategoryValueAppetiteChanges["noChange"] = 1] = "noChange";
  HKCategoryValueAppetiteChanges[HKCategoryValueAppetiteChanges["unspecified"] = 0] = "unspecified";
  return HKCategoryValueAppetiteChanges;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvaluepresence Apple Docs}
 */
let HKCategoryValuePresence = exports.HKCategoryValuePresence = /*#__PURE__*/function (HKCategoryValuePresence) {
  HKCategoryValuePresence[HKCategoryValuePresence["notPresent"] = 1] = "notPresent";
  HKCategoryValuePresence[HKCategoryValuePresence["present"] = 0] = "present";
  return HKCategoryValuePresence;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvalueseverity Apple Docs }
 */
let HKCategoryValueSeverity = exports.HKCategoryValueSeverity = /*#__PURE__*/function (HKCategoryValueSeverity) {
  HKCategoryValueSeverity[HKCategoryValueSeverity["notPresent"] = 1] = "notPresent";
  HKCategoryValueSeverity[HKCategoryValueSeverity["mild"] = 2] = "mild";
  HKCategoryValueSeverity[HKCategoryValueSeverity["moderate"] = 3] = "moderate";
  HKCategoryValueSeverity[HKCategoryValueSeverity["severe"] = 4] = "severe";
  HKCategoryValueSeverity[HKCategoryValueSeverity["unspecified"] = 0] = "unspecified";
  return HKCategoryValueSeverity;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvalue/notapplicable Apple Docs }
 */
let HKCategoryValueNotApplicable = exports.HKCategoryValueNotApplicable = /*#__PURE__*/function (HKCategoryValueNotApplicable) {
  HKCategoryValueNotApplicable[HKCategoryValueNotApplicable["notApplicable"] = 0] = "notApplicable";
  return HKCategoryValueNotApplicable;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvalue Apple Docs }
 */
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkinsulindeliveryreason Apple Docs }
 */
let HKInsulinDeliveryReason = exports.HKInsulinDeliveryReason = /*#__PURE__*/function (HKInsulinDeliveryReason) {
  HKInsulinDeliveryReason[HKInsulinDeliveryReason["basal"] = 1] = "basal";
  HKInsulinDeliveryReason[HKInsulinDeliveryReason["bolus"] = 2] = "bolus";
  return HKInsulinDeliveryReason;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkcategoryvaluepregnancytestresult Apple Docs }
 */
var HKCategoryValuePregnancyTestResult = /*#__PURE__*/function (HKCategoryValuePregnancyTestResult) {
  HKCategoryValuePregnancyTestResult[HKCategoryValuePregnancyTestResult["positive"] = 2] = "positive";
  HKCategoryValuePregnancyTestResult[HKCategoryValuePregnancyTestResult["negative"] = 1] = "negative";
  HKCategoryValuePregnancyTestResult[HKCategoryValuePregnancyTestResult["indeterminate"] = 3] = "indeterminate";
  return HKCategoryValuePregnancyTestResult;
}(HKCategoryValuePregnancyTestResult || {});
/* needs further mapping

contraceptive = 'HKCategoryTypeIdentifierContraceptive',
  lactation = 'HKCategoryTypeIdentifierLactation',
  pregnancy = 'HKCategoryTypeIdentifierPregnancy',

  progesteroneTestResult = 'HKCategoryTypeIdentifierProgesteroneTestResult',
  environmentalAudioExposureEvent = 'HKCategoryTypeIdentifierEnvironmentalAudioExposureEvent',
  headphoneAudioExposureEvent = 'HKCategoryTypeIdentifierHeadphoneAudioExposureEvent',
  appleWalkingSteadinessEvent = 'HKCategoryTypeIdentifierAppleWalkingSteadinessEvent',
  handwashingEvent = 'HKCategoryTypeIdentifierHandwashingEvent', // HKCategoryValue */
// Maps directly to https://developer.apple.com/documentation/healthkit/hkwheelchairuse
let HKWheelchairUse = exports.HKWheelchairUse = /*#__PURE__*/function (HKWheelchairUse) {
  HKWheelchairUse[HKWheelchairUse["notSet"] = 0] = "notSet";
  HKWheelchairUse[HKWheelchairUse["no"] = 1] = "no";
  HKWheelchairUse[HKWheelchairUse["yes"] = 2] = "yes";
  return HKWheelchairUse;
}({}); // Unit types are a straight mapping from here https://developer.apple.com/documentation/healthkit/hkunit/1615733-init
let HKMetricPrefix = exports.HKMetricPrefix = /*#__PURE__*/function (HKMetricPrefix) {
  HKMetricPrefix["None"] = "";
  HKMetricPrefix["Pico"] = "p";
  HKMetricPrefix["Nano"] = "n";
  HKMetricPrefix["Micro"] = "mc";
  HKMetricPrefix["Milli"] = "m";
  HKMetricPrefix["Centi"] = "c";
  HKMetricPrefix["Deci"] = "d";
  HKMetricPrefix["Deca"] = "da";
  HKMetricPrefix["Hecto"] = "h";
  HKMetricPrefix["Kilo"] = "k";
  HKMetricPrefix["Mega"] = "M";
  HKMetricPrefix["Giga"] = "G";
  HKMetricPrefix["Tera"] = "T";
  HKMetricPrefix["Femto"] = "f";
  return HKMetricPrefix;
}({});
let HKUnitMetric = exports.HKUnitMetric = /*#__PURE__*/function (HKUnitMetric) {
  HKUnitMetric["Gram"] = "g";
  HKUnitMetric["Joule"] = "J";
  HKUnitMetric["Kelvin"] = "K";
  HKUnitMetric["Liter"] = "l";
  HKUnitMetric["Meter"] = "m";
  HKUnitMetric["Pascal"] = "Pa";
  HKUnitMetric["Second"] = "s";
  HKUnitMetric["Siemen"] = "S";
  HKUnitMetric["Hertz"] = "Hz";
  HKUnitMetric["Volt"] = "V";
  return HKUnitMetric;
}({});
let HKUnits = exports.HKUnits = /*#__PURE__*/function (HKUnits) {
  HKUnits["DecibelHearingLevel"] = "dBHL";
  HKUnits["DecibelSoundPressureLevel"] = "dBASPL";
  HKUnits["Percent"] = "%";
  HKUnits["Count"] = "count";
  HKUnits["InternationalUnit"] = "IU";
  HKUnits["AppleEffortScore"] = "appleEffortScore";
  return HKUnits;
}({}); // not 100% sure about these
/**
 * More SI prefixes also available as literals, just type the string
 * @example 'cm', 'km'
 */
let UnitOfLength = exports.UnitOfLength = /*#__PURE__*/function (UnitOfLength) {
  UnitOfLength["Feet"] = "ft";
  UnitOfLength["Meter"] = "m";
  UnitOfLength["Inches"] = "in";
  UnitOfLength["Yards"] = "yd";
  UnitOfLength["Miles"] = "mi";
  return UnitOfLength;
}({});
/**
 * More SI prefixes also available as literals, just type the string
 * @example 'ml', 'cl'
 */
let UnitOfVolume = exports.UnitOfVolume = /*#__PURE__*/function (UnitOfVolume) {
  UnitOfVolume["ImperialCup"] = "cup_imp";
  UnitOfVolume["ImperialFluidOunces"] = "fl_oz_imp";
  UnitOfVolume["ImperialPint"] = "pt_imp";
  UnitOfVolume["USCup"] = "cup_us";
  UnitOfVolume["USFluidOunces"] = "fl_oz_us";
  UnitOfVolume["USPint"] = "pt_us";
  UnitOfVolume["Liter"] = "l";
  return UnitOfVolume;
}({});
/**
 * More SI prefixes also available as literals, just type the string
 * @example 'mg', 'kg'
 */
let UnitOfMass = exports.UnitOfMass = /*#__PURE__*/function (UnitOfMass) {
  UnitOfMass["Ounces"] = "oz";
  UnitOfMass["Stones"] = "st";
  UnitOfMass["Pounds"] = "lb";
  UnitOfMass["Gram"] = "g";
  return UnitOfMass;
}({});
/**
 * More SI prefixes also available as literals, just type the string
 * @example 'mg', 'kg'
 */
/**
 * More SI prefixes also available as literals, just type the string
 * @example 'kPa', 'hPa'
 */
let UnitOfPressure = exports.UnitOfPressure = /*#__PURE__*/function (UnitOfPressure) {
  UnitOfPressure["Atmospheres"] = "atm";
  UnitOfPressure["CentimetersOfWater"] = "cmAq";
  UnitOfPressure["MillimetersOfMercury"] = "mmHg";
  UnitOfPressure["InchesOfMercury"] = "inHg";
  UnitOfPressure["DecibelAWeightedSoundPressureLevel"] = "dBASPL";
  UnitOfPressure["Pascals"] = "Pa";
  return UnitOfPressure;
}({});
/**
 * More SI prefixes also available as literals, just type the string
 * @example 'kPa', 'hPa'
 */
/**
 * More SI prefixes also available as literals, just type the string
 * @example 'ms'
 */
let UnitOfTime = exports.UnitOfTime = /*#__PURE__*/function (UnitOfTime) {
  UnitOfTime["Days"] = "d";
  UnitOfTime["Minutes"] = "min";
  UnitOfTime["Hours"] = "hr";
  UnitOfTime["Seconds"] = "s";
  return UnitOfTime;
}({});
/**
 * More SI prefixes also available as literals, just type the string
 * @example 'ms'
 */
let TemperatureUnit = exports.TemperatureUnit = /*#__PURE__*/function (TemperatureUnit) {
  TemperatureUnit["DegreesCelsius"] = "degC";
  TemperatureUnit["DegreesFahrenheit"] = "degF";
  TemperatureUnit["Kelvin"] = "K";
  return TemperatureUnit;
}({});
/**
 * More SI prefixes also available as literals, just type the string
 * @example 'kJ'
 */
let UnitOfEnergy = exports.UnitOfEnergy = /*#__PURE__*/function (UnitOfEnergy) {
  UnitOfEnergy["Kilocalories"] = "kcal";
  UnitOfEnergy["LargeCalories"] = "Cal";
  UnitOfEnergy["SmallCalories"] = "cal";
  UnitOfEnergy["Joules"] = "J";
  return UnitOfEnergy;
}({});
let BloodGlucoseUnit = exports.BloodGlucoseUnit = /*#__PURE__*/function (BloodGlucoseUnit) {
  BloodGlucoseUnit["GlucoseMmolPerL"] = "mmol<180.15588000005408>/l";
  BloodGlucoseUnit["GlucoseMgPerDl"] = "mg/dL";
  return BloodGlucoseUnit;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkdevice Apple Docs }
 */
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkobject/1615781-source Apple Docs }
 */
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkobject/1615483-sourcerevision Apple Docs }
 */
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkquantitysample Apple Docs }
 */
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkworkouteventtype Apple Docs }
 */
let HKWorkoutEventType = exports.HKWorkoutEventType = /*#__PURE__*/function (HKWorkoutEventType) {
  HKWorkoutEventType[HKWorkoutEventType["pause"] = 1] = "pause";
  HKWorkoutEventType[HKWorkoutEventType["resume"] = 2] = "resume";
  HKWorkoutEventType[HKWorkoutEventType["lap"] = 3] = "lap";
  HKWorkoutEventType[HKWorkoutEventType["marker"] = 4] = "marker";
  HKWorkoutEventType[HKWorkoutEventType["motionPaused"] = 5] = "motionPaused";
  HKWorkoutEventType[HKWorkoutEventType["motionResumed"] = 6] = "motionResumed";
  HKWorkoutEventType[HKWorkoutEventType["segment"] = 7] = "segment";
  HKWorkoutEventType[HKWorkoutEventType["pauseOrResumeRequest"] = 8] = "pauseOrResumeRequest";
  return HKWorkoutEventType;
}({});
// Straight mapping to https://developer.apple.com/documentation/healthkit/hkcharacteristictypeidentifier
let HKCharacteristicTypeIdentifier = exports.HKCharacteristicTypeIdentifier = /*#__PURE__*/function (HKCharacteristicTypeIdentifier) {
  HKCharacteristicTypeIdentifier["fitzpatrickSkinType"] = "HKCharacteristicTypeIdentifierFitzpatrickSkinType";
  HKCharacteristicTypeIdentifier["biologicalSex"] = "HKCharacteristicTypeIdentifierBiologicalSex";
  HKCharacteristicTypeIdentifier["bloodType"] = "HKCharacteristicTypeIdentifierBloodType";
  HKCharacteristicTypeIdentifier["dateOfBirth"] = "HKCharacteristicTypeIdentifierDateOfBirth";
  HKCharacteristicTypeIdentifier["wheelchairUse"] = "HKCharacteristicTypeIdentifierWheelchairUse";
  HKCharacteristicTypeIdentifier["activityMoveMode"] = "HKCharacteristicTypeIdentifierActivityMoveMode";
  return HKCharacteristicTypeIdentifier;
}({}); // HKActivityMoveModeObject
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkupdatefrequency Apple Docs }
 */
let HKUpdateFrequency = exports.HKUpdateFrequency = /*#__PURE__*/function (HKUpdateFrequency) {
  HKUpdateFrequency[HKUpdateFrequency["immediate"] = 1] = "immediate";
  HKUpdateFrequency[HKUpdateFrequency["hourly"] = 2] = "hourly";
  HKUpdateFrequency[HKUpdateFrequency["daily"] = 3] = "daily";
  HKUpdateFrequency[HKUpdateFrequency["weekly"] = 4] = "weekly";
  return HKUpdateFrequency;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkworkoutconfiguration Apple Docs }
 */
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkworkoutsessionlocationtype Apple Docs }
 */
let HKWorkoutSessionLocationType = exports.HKWorkoutSessionLocationType = /*#__PURE__*/function (HKWorkoutSessionLocationType) {
  HKWorkoutSessionLocationType[HKWorkoutSessionLocationType["unknown"] = 1] = "unknown";
  HKWorkoutSessionLocationType[HKWorkoutSessionLocationType["indoor"] = 2] = "indoor";
  HKWorkoutSessionLocationType[HKWorkoutSessionLocationType["outdoor"] = 3] = "outdoor";
  return HKWorkoutSessionLocationType;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkworkoutsessionstate Apple Docs }
 */
let WorkoutSessionState = exports.WorkoutSessionState = /*#__PURE__*/function (WorkoutSessionState) {
  WorkoutSessionState[WorkoutSessionState["NotStarted"] = 1] = "NotStarted";
  WorkoutSessionState[WorkoutSessionState["Running"] = 2] = "Running";
  WorkoutSessionState[WorkoutSessionState["Ended"] = 3] = "Ended";
  WorkoutSessionState[WorkoutSessionState["Paused"] = 4] = "Paused";
  WorkoutSessionState[WorkoutSessionState["Prepared"] = 5] = "Prepared";
  WorkoutSessionState[WorkoutSessionState["Stopped"] = 6] = "Stopped";
  return WorkoutSessionState;
}({});
let HKStateOfMindValenceClassification = exports.HKStateOfMindValenceClassification = /*#__PURE__*/function (HKStateOfMindValenceClassification) {
  HKStateOfMindValenceClassification[HKStateOfMindValenceClassification["veryUnpleasant"] = 1] = "veryUnpleasant";
  HKStateOfMindValenceClassification[HKStateOfMindValenceClassification["unpleasant"] = 2] = "unpleasant";
  HKStateOfMindValenceClassification[HKStateOfMindValenceClassification["slightlyUnpleasant"] = 3] = "slightlyUnpleasant";
  HKStateOfMindValenceClassification[HKStateOfMindValenceClassification["neutral"] = 4] = "neutral";
  HKStateOfMindValenceClassification[HKStateOfMindValenceClassification["slightlyPleasant"] = 5] = "slightlyPleasant";
  HKStateOfMindValenceClassification[HKStateOfMindValenceClassification["pleasant"] = 6] = "pleasant";
  HKStateOfMindValenceClassification[HKStateOfMindValenceClassification["veryPleasant"] = 7] = "veryPleasant";
  return HKStateOfMindValenceClassification;
}({});
const Native = _reactNative.NativeModules.ReactNativeHealthkit;
const EventEmitter = exports.EventEmitter = new _reactNative.NativeEventEmitter(_reactNative.NativeModules.ReactNativeHealthkit);
var _default = exports.default = Native;
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkstateofmind/label Apple Docs}
 */
let HKStateOfMindLabel = exports.HKStateOfMindLabel = /*#__PURE__*/function (HKStateOfMindLabel) {
  HKStateOfMindLabel[HKStateOfMindLabel["amazed"] = 1] = "amazed";
  HKStateOfMindLabel[HKStateOfMindLabel["amused"] = 2] = "amused";
  HKStateOfMindLabel[HKStateOfMindLabel["angry"] = 3] = "angry";
  HKStateOfMindLabel[HKStateOfMindLabel["anxious"] = 4] = "anxious";
  HKStateOfMindLabel[HKStateOfMindLabel["ashamed"] = 5] = "ashamed";
  HKStateOfMindLabel[HKStateOfMindLabel["brave"] = 6] = "brave";
  HKStateOfMindLabel[HKStateOfMindLabel["calm"] = 7] = "calm";
  HKStateOfMindLabel[HKStateOfMindLabel["content"] = 8] = "content";
  HKStateOfMindLabel[HKStateOfMindLabel["disappointed"] = 9] = "disappointed";
  HKStateOfMindLabel[HKStateOfMindLabel["discouraged"] = 10] = "discouraged";
  HKStateOfMindLabel[HKStateOfMindLabel["disgusted"] = 11] = "disgusted";
  HKStateOfMindLabel[HKStateOfMindLabel["embarrassed"] = 12] = "embarrassed";
  HKStateOfMindLabel[HKStateOfMindLabel["excited"] = 13] = "excited";
  HKStateOfMindLabel[HKStateOfMindLabel["frustrated"] = 14] = "frustrated";
  HKStateOfMindLabel[HKStateOfMindLabel["grateful"] = 15] = "grateful";
  HKStateOfMindLabel[HKStateOfMindLabel["guilty"] = 16] = "guilty";
  HKStateOfMindLabel[HKStateOfMindLabel["happy"] = 17] = "happy";
  HKStateOfMindLabel[HKStateOfMindLabel["hopeless"] = 18] = "hopeless";
  HKStateOfMindLabel[HKStateOfMindLabel["irritated"] = 19] = "irritated";
  HKStateOfMindLabel[HKStateOfMindLabel["jealous"] = 20] = "jealous";
  HKStateOfMindLabel[HKStateOfMindLabel["joyful"] = 21] = "joyful";
  HKStateOfMindLabel[HKStateOfMindLabel["lonely"] = 22] = "lonely";
  HKStateOfMindLabel[HKStateOfMindLabel["passionate"] = 23] = "passionate";
  HKStateOfMindLabel[HKStateOfMindLabel["peaceful"] = 24] = "peaceful";
  HKStateOfMindLabel[HKStateOfMindLabel["proud"] = 25] = "proud";
  HKStateOfMindLabel[HKStateOfMindLabel["relieved"] = 26] = "relieved";
  HKStateOfMindLabel[HKStateOfMindLabel["sad"] = 27] = "sad";
  HKStateOfMindLabel[HKStateOfMindLabel["scared"] = 28] = "scared";
  HKStateOfMindLabel[HKStateOfMindLabel["stressed"] = 29] = "stressed";
  HKStateOfMindLabel[HKStateOfMindLabel["surprised"] = 30] = "surprised";
  HKStateOfMindLabel[HKStateOfMindLabel["worried"] = 31] = "worried";
  HKStateOfMindLabel[HKStateOfMindLabel["annoyed"] = 32] = "annoyed";
  HKStateOfMindLabel[HKStateOfMindLabel["confident"] = 33] = "confident";
  HKStateOfMindLabel[HKStateOfMindLabel["drained"] = 34] = "drained";
  HKStateOfMindLabel[HKStateOfMindLabel["hopeful"] = 35] = "hopeful";
  HKStateOfMindLabel[HKStateOfMindLabel["indifferent"] = 36] = "indifferent";
  HKStateOfMindLabel[HKStateOfMindLabel["overwhelmed"] = 37] = "overwhelmed";
  HKStateOfMindLabel[HKStateOfMindLabel["satisfied"] = 38] = "satisfied";
  return HKStateOfMindLabel;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkstateofmind/kind Apple Docs}
 */
let HKStateOfMindKind = exports.HKStateOfMindKind = /*#__PURE__*/function (HKStateOfMindKind) {
  HKStateOfMindKind[HKStateOfMindKind["dailyMood"] = 2] = "dailyMood";
  HKStateOfMindKind[HKStateOfMindKind["momentaryEmotion"] = 1] = "momentaryEmotion";
  return HKStateOfMindKind;
}({});
/**
 * @see {@link https://developer.apple.com/documentation/healthkit/hkstateofmind/association Apple Docs}
 * @since iOS 17.0+
 */
let HKStateOfMindAssociation = exports.HKStateOfMindAssociation = /*#__PURE__*/function (HKStateOfMindAssociation) {
  HKStateOfMindAssociation[HKStateOfMindAssociation["community"] = 1] = "community";
  HKStateOfMindAssociation[HKStateOfMindAssociation["currentEvents"] = 2] = "currentEvents";
  HKStateOfMindAssociation[HKStateOfMindAssociation["dating"] = 3] = "dating";
  HKStateOfMindAssociation[HKStateOfMindAssociation["education"] = 4] = "education";
  HKStateOfMindAssociation[HKStateOfMindAssociation["family"] = 5] = "family";
  HKStateOfMindAssociation[HKStateOfMindAssociation["fitness"] = 6] = "fitness";
  HKStateOfMindAssociation[HKStateOfMindAssociation["friends"] = 7] = "friends";
  HKStateOfMindAssociation[HKStateOfMindAssociation["health"] = 8] = "health";
  HKStateOfMindAssociation[HKStateOfMindAssociation["hobbies"] = 9] = "hobbies";
  HKStateOfMindAssociation[HKStateOfMindAssociation["identity"] = 10] = "identity";
  HKStateOfMindAssociation[HKStateOfMindAssociation["money"] = 11] = "money";
  HKStateOfMindAssociation[HKStateOfMindAssociation["partner"] = 12] = "partner";
  HKStateOfMindAssociation[HKStateOfMindAssociation["selfCare"] = 13] = "selfCare";
  HKStateOfMindAssociation[HKStateOfMindAssociation["spirituality"] = 14] = "spirituality";
  HKStateOfMindAssociation[HKStateOfMindAssociation["tasks"] = 15] = "tasks";
  HKStateOfMindAssociation[HKStateOfMindAssociation["travel"] = 16] = "travel";
  HKStateOfMindAssociation[HKStateOfMindAssociation["work"] = 17] = "work";
  HKStateOfMindAssociation[HKStateOfMindAssociation["weather"] = 18] = "weather";
  return HKStateOfMindAssociation;
}({});
//# sourceMappingURL=native-types.js.map