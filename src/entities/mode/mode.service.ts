import { Inject, Injectable } from "@nestjs/common";
import { Mode } from "./domain/mode.model";
import { CreateModeCommand } from "./domain";
import {
  FailedResponse,
  SuccessfullResponse,
} from "src/entities/user/user.service";
import { modeProvided } from "./mode-providers";

@Injectable()
export class ModeService {
  constructor(
    // eslint-disable-next-line no-unused-vars
    @Inject(modeProvided) private modeModel: typeof Mode,
  ) {}
  public async create(
    command: CreateModeCommand,
  ): Promise<SuccessfullResponse | FailedResponse> {
    try {
      if (!command.name) {
        return {
          message: "All fields are required",
          statusCode: 400,
        };
      }
      const createdModeByName = await this.modeModel.findOne({
        where: {
          name: command.name,
        },
      });

      if (createdModeByName) {
        return {
          message: "Mode with that name already exists",
          statusCode: 400,
        };
      }

      await this.modeModel.create({
        name: command.name,
      });

      return { message: "Mode created successfull", statusCode: 201 };
    } catch (error) {
      throw error;
    }
  }

  public async findAll(): Promise<Mode[]> {
    try {
      return await this.modeModel.findAll();
    } catch (error) {
      throw error;
    }
  }

  public async findById(id: string): Promise<Mode | FailedResponse> {
    try {
      const mode = await this.modeModel.findByPk(id);
      if (!mode) {
        return {
          message: "Mode doesn't exist",
          statusCode: 400,
        };
      }

      return mode;
    } catch (error) {
      throw error;
    }
  }
}
