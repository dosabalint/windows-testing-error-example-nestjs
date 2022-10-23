import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppleModule } from '@apple-lib/apple-module/apple.module';
import { BananaModule } from '@banana-lib/banana-module/banana.module';
import { CiderModule } from '@cider-lib/cider-module/cider.module';

@Module({
  imports: [AppleModule, BananaModule, CiderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
