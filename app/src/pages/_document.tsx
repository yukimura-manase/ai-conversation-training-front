import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <title>キメラAIと会話トレーニング🌟</title>
        <meta
          name="description"
          content="キメラAIと会話トレーニング🌟 by ぴゅぴゅ丸開発チーム "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* 他の共通のmetaタグをここに追加 */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
