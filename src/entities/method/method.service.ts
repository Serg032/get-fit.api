import { Inject, Injectable } from "@nestjs/common";
import { Method } from "./domain/method.model";
import { CreateMethodCommand } from "./domain";
import {
  FailedResponse,
  SuccessfullResponse,
} from "src/entities/user/user.service";
import { methodProvided } from "./method-providers";

@Injectable()
export class MethodService {
  constructor(
    // eslint-disable-next-line no-unused-vars
    @Inject(methodProvided) private methodModel: typeof Method,
  ) {}
  public async create(
    command: CreateMethodCommand,
  ): Promise<SuccessfullResponse | FailedResponse> {
    try {
      if (!command.name) {
        return {
          message: "All fields are required",
          statusCode: 400,
        };
      }
      const createdMethodByName = await this.methodModel.findOne({
        where: {
          name: command.name,
        },
      });

      if (createdMethodByName) {
        return {
          message: "Method with that name already exists",
          statusCode: 400,
        };
      }

      await this.methodModel.create({
        name: command.name,
      });

      return { message: "Method created successfull", statusCode: 201 };
    } catch (error) {
      throw error;
    }
  }

  public async findAll(): Promise<Method[]> {
    try {
      return await this.methodModel.findAll();
    } catch (error) {
      throw error;
    }
  }

  public async findById(id: string): Promise<Method | FailedResponse> {
    try {
      const method = await this.methodModel.findByPk(id);
      if (!method) {
        return {
          message: "Method doesn't exist",
          statusCode: 400,
        };
      }

      return method;
    } catch (error) {
      throw error;
    }
  }
}
