import { Injectable, OnModuleInit } from '@nestjs/common';
import { Markup, Telegraf } from 'telegraf';
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

  // 봇 설명을 설정하는 메소드
  async setBotDescription() {
    const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const url = `https://api.telegram.org/bot${TOKEN}/setMyDescription`;

    try {
      const response = await axios.post(url, {
        description: 'Welcome to the Maraton Telegram Bot!',
      });

      console.log('설명 설정 완료 : ', response.data);
    } catch (error) {
      console.error('설명 설정 실패 : ', error.response.data);
    }
  }

  // 메뉴 버튼을 설정하는 메소드
  async setMenuButton() {
    const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const url = `https://api.telegram.org/bot${TOKEN}/setChatMenuButton`;

    try {
      const response = await axios.post(url, {
        menu_button: {
          type: 'web_app',
          text: '☰',
          web_app: {
            url: 'https://siyeong0926.github.io/bottest/',
          },
        },
      });

      console.log('메뉴 버튼 생성 완료 : ', response.data);
    } catch (error) {
      console.error('메뉴 버튼 생성 실패 : ', error.response.data);
    }
  }

  // 모듈이 초기화될 때 봇을 설정하고 실행합니다.
  async onModuleInit() {
    // 봇 설명과 메뉴 버튼 설정
    await this.setBotDescription();
    await this.setMenuButton();

    this.bot.start((ctx) => {
      ctx.replyWithPhoto(
        {
          url: 'https://raw.githubusercontent.com/siyeong0926/image/main/image%20(2).png',
        }, // 이미지 URL
        {
          caption: `💵 With MARATON, you're not just staking TON - you're running a race to high yields. Leverage our Arbitrage Bot for maximum returns and take the lead!`,
          reply_markup: Markup.inlineKeyboard([
            [
              Markup.button.webApp(
                '🌈 Onboarding',
                'https://maraton-frontend-typescript.vercel.app',
              ),
            ],
            [
              Markup.button.webApp(
                '🚀 Open Maraton',
                'https://maraton-frontend-typescript.vercel.app',
              ),
            ],
            [
              Markup.button.url(
                '🌍 Join our Global Channel',
                'https://maraton-frontend-typescript.vercel.app',
              ),
            ],
            [
              Markup.button.url(
                '👏 Official Website',
                'https://maraton-frontend-typescript.vercel.app',
              ),
            ],
          ]).reply_markup,
        },
      );
    });

    // /start 명령어를 처리합니다.
    // this.bot.start((ctx) => {
    //   ctx.reply(
    //     'Welcome to the\nMaraton Telegram Bot!',
    //     Markup.inlineKeyboard([
    //       Markup.button.webApp(
    //         'OPEN APP',
    //         'https://maraton-frontend-typescript.vercel.app',
    //       ),
    //     ]),
    //   );

    //   ctx.reply('If you need help \n /help');
    // });
    //
    // this.bot.hears('NEXTON', (ctx) => {
    //   ctx.reply("'Here is your link: https://example.com'");
    // });
    //
    // this.bot.hears('MARATON', (ctx) => {
    //   ctx.reply("'Here is your link: https://example.com'");
    // });

    // /help 명령어를 처리합니다.
    // this.bot.help((ctx) => {
    //   ctx.reply(
    //     `Here are the commands you can use :\n\n\n` +
    //       `/start - Start bot \n\n` +
    //       `/help - Help bot \n\n` +
    //       `TEST - Test bot\n\n` +
    //       `NEXTON - Open the Nexton link\n\n` +
    //       `MARATON - Open the Maraton link\n\n`,
    //   );
    // });

    try {
      // 봇을 시작합니다.
      await this.bot.launch();
      console.log('텔레그램 봇이 시작되었습니다.');
    } catch (error) {
      console.error('텔레그램 봇 시작에 실패했습니다.', error);
    }
  }
}
