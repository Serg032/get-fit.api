/* eslint-disable no-unused-vars */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginCommand } from "src/user/domain";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(command: LoginCommand): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(command.username);
    if (user?.password !== command.password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
