import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet preload prefetch"
          href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700&display=swap"
          as="style"
        />
      </Head>
      <Main />
      <NextScript />
    </Html>
  );
}
