import { Body, Controller, Get, Post } from "@nestjs/common";
import {
  FailedResponse,
  SuccessfullResponse,
  UserService,
} from "./user.service";
import { CreateUserCommand } from "./domain";

@Controller("user")
export class UserController {
  // eslint-disable-next-line no-unused-vars
  constructor(private service: UserService) {}
  @Post()
  async register(
    @Body() command: CreateUserCommand,
  ): Promise<SuccessfullResponse | FailedResponse> {
    return await this.service.register(command);
  }
  @Get()
  async findAll() {
    return await this.service.findAll();
  }
}
