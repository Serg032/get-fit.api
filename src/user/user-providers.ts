import { User } from "./domain/user.model";

export const userProviders = [
  {
    provide: "USER_REPOSITORY",
    useValue: User,
  },
];
