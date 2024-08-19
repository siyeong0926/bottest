import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramBotModule } from './telegram-bot/telegram-bot.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    TelegramBotModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // public 폴더를 정적 파일로 서빙
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
