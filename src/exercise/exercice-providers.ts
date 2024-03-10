import { Exercise } from "./domain/exercice.model";

export const userProviders = [
  {
    provide: "EXERCICE_REPOSITORY",
    useValue: Exercise,
  },
];
