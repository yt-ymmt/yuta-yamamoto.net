import Document, { Head, Main, NextScript } from 'next/document';
import { createGlobalStyle } from 'styled-components';

class AppDocument extends Document {
    render() {
        return (
            <html lang="ja">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta
                        name="description"
                        content="Yuta Yamamoto is Frontend Developer."
                    />
                    <link rel="manifest" href="/static/manifest.json" />
                    <meta content="#333" name="theme-color" />
                    <link
                        rel="apple-touch-icon"
                        href="/static/icons/icon-72x72.png"
                    />
                    <link rel="favicon" href="/static/icons/icon-72x72.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default AppDocument;
