import { Method } from "./domain/method.model";

export const methodProvided = "METHOD_REPOSITORY";

export const methodProviders = [
  {
    provide: methodProvided,
    useValue: Method,
  },
];
