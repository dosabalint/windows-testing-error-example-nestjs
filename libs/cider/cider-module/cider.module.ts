import { Module } from '@nestjs/common';
import { CiderService } from './cider.service';
import { AppleModule } from "@apple-lib/apple-module/apple.module";

@Module({
  imports: [AppleModule],
  providers: [CiderService],
  exports: [CiderService, AppleModule],
})
export class CiderModule {}
