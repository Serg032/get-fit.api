import { Exercise } from "./domain/exercice.model";

export const exerciseProvided = "EXERCISE_REPOSITORY";

export const exerciseProviders = [
  {
    provide: exerciseProvided,
    useValue: Exercise,
  },
];
