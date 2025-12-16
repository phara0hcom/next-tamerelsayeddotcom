import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Personal web-site of Tamer Elsayed a Web-Developer. You can find his CV, skills here and links to his Social media accounts. He currently lives in Tokyo, Japan"
          />
          <meta
            name="keywords"
            content="web-developer,tamer elsayed,elsayed tamer,エルサイエット,テーマァ,software-developer,developer,portfolio,cv,tokyo dev,tokyo web,tokyo developer,tokyo"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/apple-icon.png" />
          <meta name="theme-color" content="#317EFB" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
