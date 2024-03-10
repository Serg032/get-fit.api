import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { DatabaseModule } from "src/database/database-module";
import { userProviders } from "./user-providers";
import { AuthService } from "src/auth/auth/auth.service";
// import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, AuthService, ...userProviders],
})
export class UserModule {}
