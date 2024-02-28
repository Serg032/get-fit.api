import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private service: UserService) {}
  @Post()
  async register() {
    return await this.service.register();
  }
  @Get()
  async findAll() {
    return await this.service.findAll();
  }
}
