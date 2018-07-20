import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class AppDocument extends Document {
    static async getInitialProps({ renderPage }) {
        console.log(renderPage);

        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props =>
            sheet.collectStyles(<App {...props} />)
        );
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>
                    <title>MyPage</title>
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
