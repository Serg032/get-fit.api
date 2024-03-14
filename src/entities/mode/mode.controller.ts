import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateModeCommand } from "./domain";
import { ModeService as ModeService } from "./mode.service";
import { Mode } from "./domain/mode.model";
import { FailedResponse } from "../user/user.service";

@Controller("mode")
export class ModeController {
  // eslint-disable-next-line no-unused-vars
  constructor(private service: ModeService) {}

  @Post()
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  public async create(@Body() command: CreateModeCommand) {
    return await this.service.create(command);
  }

  @Get()
  public async getAll(): Promise<Mode[]> {
    return await this.service.findAll();
  }

  @Get(":id")
  public async getById(
    @Param("id") id: string,
  ): Promise<Mode | FailedResponse> {
    return await this.service.findById(id);
  }
}
