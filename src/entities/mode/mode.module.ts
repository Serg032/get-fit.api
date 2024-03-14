import { Module } from "@nestjs/common";
import { ModeService } from "./mode.service";
import { ModeController } from "./mode.controller";
import { DatabaseModule } from "src/database/database-module";
import { modeProviders } from "./mode-providers";

@Module({
  imports: [DatabaseModule],
  controllers: [ModeController],
  providers: [ModeService, ...modeProviders],
})
export class MethodModule {}
