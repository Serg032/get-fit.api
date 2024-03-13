import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateMethodCommand } from "./domain";
import { MethodService } from "./method.service";
import { Method } from "./domain/method.model";
import { FailedResponse } from "../user/user.service";

@Controller("method")
export class MethodController {
  // eslint-disable-next-line no-unused-vars
  constructor(private service: MethodService) {}

  @Post()
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  public async create(@Body() command: CreateMethodCommand) {
    return await this.service.create(command);
  }

  @Get()
  public async getAll(): Promise<Method[]> {
    return await this.service.findAll();
  }

  @Get(":id")
  public async getById(
    @Param("id") id: string,
  ): Promise<Method | FailedResponse> {
    return await this.service.findById(id);
  }
}
