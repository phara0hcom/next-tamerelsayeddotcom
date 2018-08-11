// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-46341330-2');
ReactGA.pageview(window.location.pathname + window.location.search);

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
