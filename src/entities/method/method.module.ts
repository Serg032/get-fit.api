import { Module } from "@nestjs/common";
import { MethodService } from "./method.service";
import { MethodController } from "./method.controller";
import { DatabaseModule } from "src/database/database-module";
import { methodProviders } from "./method-providers";

@Module({
  imports: [DatabaseModule],
  controllers: [MethodController],
  providers: [MethodService, ...methodProviders],
})
export class MethodModule {}
