import Document, {
    Head,
    Main,
    NextScript,
    DocumentContext
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import GlobalNav from '../view/components/morecules/GlobalNav';

class AppDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />)
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
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
                    <GlobalNav />
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default AppDocument;
