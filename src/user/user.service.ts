import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.model";
import { randomUUID } from "crypto";

@Injectable()
export class UserService {
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
