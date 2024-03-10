import { Inject, Injectable } from "@nestjs/common";
import { Exercise } from "./domain/exercice.model";
import { CreateExerciseCommand } from "./domain";
import { FailedResponse, SuccessfullResponse } from "src/user/user.service";

@Injectable()
export class ExerciseService {
  constructor(
    // eslint-disable-next-line no-unused-vars
    @Inject("EXERCISE_REPOSITORY") private exerciseModel: typeof Exercise,
  ) {}
  public async create(
    command: CreateExerciseCommand,
  ): Promise<SuccessfullResponse | FailedResponse> {
    try {
      if (!command.name || !command.type) {
        return {
          message: "All fields are required",
          statusCode: 400,
        };
      }
      const createdExerciseByName = await this.exerciseModel.findOne({
        where: {
          username: command.name,
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
      });

      return { message: "User created successfull", statusCode: 201 };
    } catch (error) {
      throw error;
    }
  }

  public async findAll(): Promise<Exercise[]> {
    return await this.exerciseModel.findAll();
  }

  public async findOne(query: any) {
    return this.exerciseModel.findOne(query);
  }
}
