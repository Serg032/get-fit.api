import { User } from "./domain/user.model";

export const userProvided = "USER_REPOSITORY";

export const userProviders = [
  {
    provide: userProvided,
    useValue: User,
  },
];
