import { Inject, Injectable } from "@nestjs/common";
import { Exercise } from "./domain/exercice.model";
import { CreateExerciseCommand } from "./domain";
import {
  FailedResponse,
  SuccessfullResponse,
} from "src/entities/user/user.service";
import { exerciseProvided } from "./exercice-providers";

@Injectable()
export class ExerciseService {
  constructor(
    // eslint-disable-next-line no-unused-vars
    @Inject(exerciseProvided) private exerciseModel: typeof Exercise,
  ) {}
  public async create(
    command: CreateExerciseCommand,
  ): Promise<SuccessfullResponse | FailedResponse> {
    try {
      if (!command.name || !command.type || !command.method) {
        return {
          message: "All fields are required",
          statusCode: 400,
        };
      }
      const createdExerciseByName = await this.exerciseModel.findOne({
        where: {
          name: command.name,
        },
      });

      if (createdExerciseByName) {
        return {
          message: "Exercise with that name already exists",
          statusCode: 400,
        };
      }

      await this.exerciseModel.create({
        name: command.name,
        type: command.type,
        method: command.method,
      });

      return { message: "Exercise created successfull", statusCode: 201 };
    } catch (error) {
      throw error;
    }
  }

  public async findAll(): Promise<Exercise[]> {
    try {
      return await this.exerciseModel.findAll();
    } catch (error) {
      throw error;
    }
  }

  public async findById(id: string): Promise<Exercise | FailedResponse> {
    try {
      const exercice = await this.exerciseModel.findByPk(id);
      if (!exercice) {
        return {
          message: "Exercise doesn't exist",
          statusCode: 400,
        };
      }

      return exercice;
    } catch (error) {
      throw error;
    }
  }
}
