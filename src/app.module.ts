import { Module } from "@nestjs/common";
import { UserModule } from "./entities/user/user.module";
import { ExerciseModule } from "./entities/exercise/exercise.module";
import { MethodModule } from "./entities/method/method.module";

@Module({
  imports: [UserModule, ExerciseModule, MethodModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
