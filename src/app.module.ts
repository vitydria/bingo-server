import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BingoController } from './bingo/bingo.controller';

@Module({
  imports: [],
  controllers: [AppController, BingoController],
  providers: [AppService],
})
export class AppModule {}
