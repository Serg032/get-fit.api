import { Module } from "@nestjs/common";
import { ExerciseService } from "./exercise.service";
import { ExerciseController } from "./exercise.controller";
import { DatabaseModule } from "src/database/database-module";
import { userProviders } from "./exercice-providers";
import { AuthService } from "src/auth/auth/auth.service";

@Module({
  imports: [DatabaseModule],
  controllers: [ExerciseController],
  providers: [ExerciseService, AuthService, ...userProviders],
})
export class UserModule {}
