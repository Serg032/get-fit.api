import { Inject, Injectable } from "@nestjs/common";
import { User } from "./domain/user.model";

@Injectable()
export class UserService {
  // eslint-disable-next-line no-unused-vars
  constructor(@Inject("USER_REPOSITORY") private userModel: typeof User) {}
  async register() {
    return await this.userModel.create({
      name: "Sergio",
    });
  }
  async findAll(): Promise<User[]> {
    return await this.userModel.findAll();
  }
}
