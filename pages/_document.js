// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charset="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <meta
                        name="Description"
                        content="Tamer Elsayed - Web-Designer / Web-Developer, Portfolio"
                    />
                    <title>Tamer Elsayed - Web-Designer / Web-Developer</title>
                    <meta name="theme-color" content="#03072b" />

                    <meta property="og:type" content="WebApp" />
                    <meta
                        property="og:site_name"
                        content="Tamer Elsayed - Web-Designer"
                    />
                    <meta property="og:title" content="Tamer Elsayed" />
                    <meta property="og:url" content="" />
                    <meta
                        property="og:description"
                        content="About Tamer Elsayed, Portfolio"
                    />
                    <meta property="og:image" content="" />
                    <link rel="manifest" href="./static/manifest.json" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <link
                        rel="shortcut icon"
                        type="image/png"
                        href="./static/favicon.png"
                    />
                    <meta
                        name="google-site-verification"
                        content="JWrxL6cU-BnnEofbhayp-Uce71MFqCgk7vItAD4kl84"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
