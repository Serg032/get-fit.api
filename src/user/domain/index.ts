export interface User {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  username: string;
  isActive: boolean;
}

export type CreateUserCommand = Omit<User, "id" | "isActive">;
