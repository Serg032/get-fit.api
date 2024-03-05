import { Inject, Injectable } from "@nestjs/common";
import { User } from "./domain/user.model";
import { CreateUserCommand } from "./domain";

export interface SuccessfullResponse {
  message: string;
  statusCode: 201;
}

export interface FailedResponse {
  message: string;
  statusCode: 400;
}

@Injectable()
export class UserService {
  // eslint-disable-next-line no-unused-vars
  constructor(@Inject("USER_REPOSITORY") private userModel: typeof User) {}
  async register(
    command: CreateUserCommand,
  ): Promise<SuccessfullResponse | FailedResponse> {
    try {
      const createdUserByUsername = await this.userModel.findOne({
        where: {
          username: command.username,
        },
      });

      const createdUserByEmail = await this.userModel.findOne({
        where: {
          email: command.email,
        },
      });

      if (createdUserByEmail) {
        return {
          message: "User with that email already exists",
          statusCode: 400,
        };
      }

      if (createdUserByUsername) {
        return {
          message: "User with that username already exists",
          statusCode: 400,
        };
      }

      await this.userModel.create({
        name: command.name,
        lastname: command.lastname,
        email: command.email,
        username: command.username,
        password: command.password,
        isActive: true,
      });

      return { message: "User created successfull", statusCode: 201 };
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll();
  }
}
