import { Injectable, OnModuleInit } from '@nestjs/common';
import { Markup, Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';

dotenv.config(); // .env 파일 로드

@Injectable()
export class TelegramBotService implements OnModuleInit {
  configDotenv;
  private bot: Telegraf;

  constructor() {
    // Telegraf 인스턴스를 생성하고, 환경 변수에서 봇 토큰을 가져옵니다.
    this.bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
  }

  // 모듈이 초기화될 때 봇을 설정하고 실행합니다.
  async onModuleInit() {
    // /start 명령어를 처리합니다.
    this.bot.start((ctx) => {
      ctx.reply(
        'Welcome to the NestJS Telegram Bot!',
        Markup.inlineKeyboard([
          Markup.button.webApp('미니 앱 열기', 'https://your-mini-app-url.com'),
        ]),
      );
    });

    // /help 명령어를 처리합니다.
    this.bot.help((ctx) => {
      ctx.reply('Send me any message and I will echo it back to you.');
    });

    try {
      // 봇을 시작합니다.
      await this.bot.launch();
      console.log('텔레그램 봇이 시작되었습니다.');
    } catch (error) {
      console.error('텔레그램 봇 시작에 실패했습니다.', error);
    }
  }
}
