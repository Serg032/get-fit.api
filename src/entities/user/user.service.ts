import { Inject, Injectable } from "@nestjs/common";
import { User } from "./domain/user.model";
import { CreateUserCommand } from "./domain";
import { userProvided } from "./user-providers";

export interface SuccessfullResponse {
  message: string;
  statusCode: 201;
}

export interface FailedResponse {
  message: string;
  statusCode: 400;
}

export type query = "lastname" | "name" | "email" | "username";

@Injectable()
export class UserService {
  // eslint-disable-next-line no-unused-vars
  constructor(@Inject(userProvided) private userModel: typeof User) {}
  public async register(
    command: CreateUserCommand,
  ): Promise<SuccessfullResponse | FailedResponse> {
    try {
      if (
        !command.email ||
        !command.lastname ||
        !command.name ||
        !command.password ||
        !command.username
      ) {
        return {
          message: "All fields are required",
          statusCode: 400,
        };
      }
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

      if (createdUserByEmail || createdUserByUsername) {
        return {
          message: "User with that email or username already exists",
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

  public async findAll(): Promise<User[]> {
    return await this.userModel.findAll();
  }

  public async findOne(query: any) {
    return this.userModel.findOne(query);
  }
}
