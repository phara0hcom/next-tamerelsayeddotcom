import Document, { Html, Head, Main, NextScript } from 'next/document';
import ReactGA from 'react-ga';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <title>Tamer Elsayed - Web-Developer</title>
        <meta
          name="Description"
          content="Personal web-site of Tamer Elsayed a Web-Developer, You can find his CV, skills here and links to his Social media accounts. He currently lives in Tokyo, Japan"
        />
        <meta
          name="keywords"
          content="web-developer,tamer elsayed,elsayed tamer,エルサイエット,テーマァ,software-developer,developer,portfolio,cv,tokyo dev,tokyo web,tokyo developer,tokyo"
        />
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
