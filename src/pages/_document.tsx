import Document, {
    Head,
    Main,
    NextScript,
    DocumentContext
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/core';

class AppDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(sheets.collect(<App {...props} />))
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheets.getStyleElement()}
                        {sheet.getStyleElement()}
                    </>
                )
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <html lang="ja">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta name="description" content="I am a Yuta Yamamoto" />
                    <meta content="#333" name="theme-color" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="icons/icon-72x72.png" />
                    <link rel="favicon" href="icons/icon-72x72.png" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap"
                        rel="stylesheet"
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

export default AppDocument;
