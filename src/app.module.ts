import { Module } from "@nestjs/common";
import { UserModule } from "./entities/user/user.module";
import { ExerciseModule } from "./entities/exercise/exercise.module";

@Module({
  imports: [UserModule, ExerciseModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
