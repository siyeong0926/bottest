import { Injectable, OnModuleInit } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config(); // .env 파일 로드

@Injectable()
export class TelegramBotService implements OnModuleInit {
  private bot: Telegraf;

  constructor() {
    // Telegraf 인스턴스를 생성하고, 환경 변수에서 봇 토큰을 가져옵니다.
    this.bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
  }

  // 모듈이 초기화될 때 봇을 설정하고 실행합니다.
  async onModuleInit() {
    const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const url = `https://api.telegram.org/bot${TOKEN}/setChatMenuButton`;

    try {
      // Telegram API를 통해 메뉴 버튼 설정
      const response = await axios.post(url, {
        menu_button: {
          type: 'web_app',
          text: 'VIEW MENU',
          web_app: {
            url: 'https://siyeong0926.github.io/bottest/', // 이곳에 실제 미니앱 URL을 넣으세요.
          },
        },
      });

      console.log('Menu button set successfully:', response.data);
    } catch (error) {
      console.error('Failed to set menu button:', error);
    }

    // // /start 명령어를 처리합니다.
    // this.bot.start((ctx) => {
    //   ctx.reply(
    //     'Welcome to the\nNexton Telegram Bot!',
    //     Markup.inlineKeyboard([
    //       Markup.button.webApp(
    //         'OPEN APP',
    //         'https://maraton-frontend-typescript.vercel.app',
    //       ),
    //     ]),
    //   );
    //
    //   ctx.reply(
    //     'Click APP !!',
    //     Markup.keyboard([['NEXTON', 'MARATON', 'TEST']]) // 두 버튼을 한 줄에 표시
    //       .resize(),
    //     // .oneTime()
    //   );
    // });

    this.bot.hears('NEXTON', (ctx) => {
      ctx.reply("'Here is your link: https://example.com'");
    });

    this.bot.hears('MARATON', (ctx) => {
      ctx.reply("'Here is your link: https://example.com'");
    });

    // /help 명령어를 처리합니다.
    this.bot.help((ctx) => {
      ctx.reply(
        `Here are the commands you can use :\n\n\n` +
          `/start - Start bot \n\n` +
          `/help - Help bot \n\n` +
          `TEST - Test bot\n\n` +
          `NEXTON - Open the Nexton link\n\n` +
          `MARATON - Open the Maraton link\n\n`,
      );
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
