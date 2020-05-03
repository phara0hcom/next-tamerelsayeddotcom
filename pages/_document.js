import Document, { Html, Head, Main, NextScript } from 'next/document';
import ReactGA from 'react-ga';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <title>Tamer Elsayed - Web-Developer</title>
        <Head>
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap"
            rel="stylesheet"
          />
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
