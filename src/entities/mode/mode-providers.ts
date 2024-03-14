import { Mode } from "./domain/mode.model";

export const modeProvided = "MODE_REPOSITORY";

export const modeProviders = [
  {
    provide: modeProvided,
    useValue: Mode,
  },
];
