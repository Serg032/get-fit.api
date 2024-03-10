import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateExerciseCommand } from "./domain";
import { ExerciseService } from "./exercise.service";
import { Exercise } from "./domain/exercice.model";
import { FailedResponse } from "../user/user.service";

@Controller("exercise")
export class ExerciseController {
  // eslint-disable-next-line no-unused-vars
  constructor(private service: ExerciseService) {}

  @Post()
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  public async create(@Body() command: CreateExerciseCommand) {
    return await this.service.create(command);
  }

  @Get()
  public async getAll(): Promise<Exercise[]> {
    return await this.service.findAll();
  }

  @Get(":id")
  public async getById(
    @Param("id") id: string,
  ): Promise<Exercise | FailedResponse> {
    return await this.service.findById(id);
  }
}
