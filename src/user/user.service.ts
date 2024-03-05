import { Inject, Injectable } from "@nestjs/common";
import { User } from "./domain/user.model";
import { CreateUserCommand } from "./domain";

@Injectable()
export class UserService {
  // eslint-disable-next-line no-unused-vars
  constructor(@Inject("USER_REPOSITORY") private userModel: typeof User) {}
  async register(command: CreateUserCommand) {
    return await this.userModel.create({
      name: command.name,
      lastname: command.lastname,
      email: command.email,
      username: command.username,
      password: command.password,
      isActive: true,
    });
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll();
  }
}
