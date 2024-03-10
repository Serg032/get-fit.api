import { Body, Controller, Get, Post } from "@nestjs/common";
import {
  FailedResponse,
  SuccessfullResponse,
  UserService,
} from "./user.service";
import { CreateUserCommand, LoginCommand } from "./domain";
import { AuthService, LoginResponse } from "src/auth/auth/auth.service";

@Controller("user")
export class UserController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private userService: UserService,
    // eslint-disable-next-line no-unused-vars
    private authService: AuthService,
  ) {}
  @Post()
  public async register(
    @Body() command: CreateUserCommand,
  ): Promise<SuccessfullResponse | FailedResponse> {
    return await this.userService.register(command);
  }

  @Get()
  public async findAll() {
    return await this.userService.findAll();
  }

  @Post("login")
  public async login(@Body() command: LoginCommand): Promise<LoginResponse> {
    return (await this.authService.signIn(command)) as LoginResponse;
  }

  @Post("auth")
  public authenticate(@Body("token") token: string) {
    return this.authService.authenticateUser(token);
  }
}
