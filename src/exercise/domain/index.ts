export interface Exercise {
  name: string;
  type: Exercise;
}

export enum ExerciseType {
  "bodyweight",
  "weights",
  "cardio",
}

export interface CreateExerciseCommand extends Exercise {}
