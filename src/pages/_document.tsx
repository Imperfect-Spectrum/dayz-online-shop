import { Html, Head, Main, NextScript } from 'next/document';
import { useEffect } from 'react';

export default function Document() {
  return (
    <>
      <Head>
        <title>Last Hope - Последняя надежда STALKER RP</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Официальный сайт Last Hope STALKER RP. Присоединяйтесь к нашим серверам и исследуйте зону с другими игроками."
        />
        <meta
          name="keywords"
          content="STALKER RP, Last Hope, онлайн игра, ролевые игры, STALKER сервер, Dayz, Dayz RP, stalker, Last, Hope, LastHope, Сталкер рп"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Last Hope" />

        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />

        {/* Apple Specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/path-to-icon.png" />
      </Head>
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
}
