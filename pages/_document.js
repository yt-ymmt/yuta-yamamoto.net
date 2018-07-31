import Document, { Head, Main, NextScript } from 'next/document';
import { injectGlobal, ServerStyleSheet } from 'styled-components';

// Global Style Sheets
injectGlobal`
html, body {
    margin: 0;
    padding: 0;
    font-size: ${props => props.theme.fz_m};
    font-family: "YakuHanJP", "NotoSansCJKjp", "NotoSansCJKsc", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}
* {
    box-sizing: border-box;
}
`;

class AppDocument extends Document {
    static async getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props =>
            sheet.collectStyles(<App {...props} />)
        );
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
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
                    {this.props.styleTags}
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
