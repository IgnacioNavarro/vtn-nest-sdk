import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Erc721Module } from './erc721/erc721.module';

@Module({
  imports: [Erc721Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
