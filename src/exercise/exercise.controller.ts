import { Controller, Post } from "@nestjs/common";
import { CreateExerciseCommand } from "./domain";
import { ExerciseService } from "./exercise.service";
@Controller("exercise")
export class ExerciseController {
  // eslint-disable-next-line no-unused-vars
  constructor(private service: ExerciseService) {}

  @Post()
  public async create(command: CreateExerciseCommand) {
    return await this.service.create(command);
  }
}
