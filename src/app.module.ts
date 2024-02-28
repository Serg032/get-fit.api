import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./user/domain/user.model";

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
