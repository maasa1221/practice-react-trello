export interface SelectData {
  label: string;
  value: number;
}

export interface AnalyzedValue {
  value: number | undefined;
  level: number | undefined;
}

export interface AnalyzedFutureBody {
  id: string | undefined;
  title: string | undefined;
  text: string | undefined;
}

export interface AnalyzedRecommendation {
  id: string | undefined;
  alert: string | undefined;
  title: string | undefined;
  text: string | undefined;
}

export interface AnalyzedGravityPoint {
  x: number | undefined;
  y: number | undefined;
}

export interface KarteResponse {
  analyzedTotalScore: number | undefined;
  analyzedFrontBodySideAngle: AnalyzedValue;
  analyzedFrontHeadAngle: AnalyzedValue;
  analyzedFrontShoulderValue: AnalyzedValue;
  analyzedFrontHipAngle: AnalyzedValue;
  analyzedFrontOXLegLevel: number | undefined;
  analyzedFrontTextTotal: string | undefined;
  analyzedFrontTextSide: string | undefined;
  analyzedFrontTextOther: string | undefined;
  analyzedRightBodyForwardAngle: AnalyzedValue;
  analyzedRightHeadNeckAngle: AnalyzedValue;
  analyzedRightShoulderHipAngle: AnalyzedValue;
  analyzedRightHipForwardLevel: number | undefined;
  analyzedRightKneeForwardValue: AnalyzedValue;
  analyzedRightTextTotal: string | undefined;
  analyzedRightTextSide: string | undefined;
  analyzedRightTextOther: string | undefined;
  analyzedFlexibilityRightArmAngle: AnalyzedValue;
  analyzedFlexibilityLeftArmAngle: AnalyzedValue;
  analyzedFlexibilityFrontBendAngle: AnalyzedValue;
  analyzedFlexibilityRightBendAngle: AnalyzedValue;
  analyzedFlexibilityLeftBendAngle: AnalyzedValue;
  analyzedFlexibilityTextTotal: string | undefined;
  analyzedFlexibilityTextUp: string | undefined;
  analyzedFlexibilityTextSideBend: string | undefined;
  analyzedFlexibilityTextFrontBend: string | undefined;
  futureBody: AnalyzedFutureBody;
  recommendPose1: AnalyzedRecommendation;
  recommendPose2: AnalyzedRecommendation;
  recommendProgram1: AnalyzedRecommendation;
  recommendProgram2: AnalyzedRecommendation;
  gravityPoint: AnalyzedGravityPoint;
  gravityPosText: string | undefined;
  walkingId: string | undefined;
}

export interface KarteComparisonResponse {
  current: ComparisonData;
  previous: ComparisonData;
}

export interface ComparisonExampleResponse {
  current: ComparisonData;
  example: ComparisonData;
}

export interface ComparisonData {
  analyzedDate: string;
  analyzedTotalScore: number;
  analyzedFront: {
    bodySideAngle: AnalyzedData;
    headAngle: AnalyzedData;
    shoulderValue: AnalyzedData;
    hipAngle: AnalyzedData;
    oxLegLevel: number;
  };
  analyzedSide: {
    bodyForwardAngle: AnalyzedData;
    headNeckAngle: AnalyzedData;
    shoulderHipAngle: AnalyzedData;
    hipForwardLevel: number;
    kneeForwardValue: AnalyzedData;
  };
  analyzedFlexibility: {
    rightArmAngle: AnalyzedData;
    leftArmAngle: AnalyzedData;
    frontBendAngle: AnalyzedData;
    rightBendAngle: AnalyzedData;
    leftBendAngle: AnalyzedData;
  };
  analyzedImage: {
    front: string;
    side: string;
    up: string;
    frontBend: string;
    rightBend: string;
    leftBend: string;
  };
}

interface AnalyzedData {
  value: number;
  level: number;
}
