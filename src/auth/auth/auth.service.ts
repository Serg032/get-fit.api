/* eslint-disable no-unused-vars */
import { Injectable } from "@nestjs/common";
import { LoginCommand } from "src/user/domain";
import { UserService } from "src/user/user.service";
import * as jwt from "jsonwebtoken";

export interface LoginResponse {
  flag: boolean;
  token?: string;
}

@Injectable()
export class AuthService {
  private secretKey = "secretKey";
  constructor(private usersService: UserService) {}

  async signIn(command: LoginCommand): Promise<LoginResponse> {
    const user = await this.usersService.findOne(command.username);
    if (user?.password !== command.password) {
      return {
        flag: false,
      };
    }
    const payload = { sub: user.id, username: user.username };
    return {
      flag: true,
      token: jwt.sign(payload, this.secretKey),
    };
  }

  public authenticateUser(token: string) {
    return jwt.verify(token, this.secretKey);
  }
}
