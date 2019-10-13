import App, { AppContext } from 'next/app';
import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../src/components/theme';
import OfflineSupport from '../src/components/OfflineSupport';

const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
    font-size: 0.16rem;
    font-family: "YakuHanJP", "NotoSansCJKjp", "NotoSansCJKsc", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}
* {
    box-sizing: border-box;
}`;

class RootApp extends App {
    static async getInitialProps({ Component, ctx }: AppContext) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Fragment>
                <GlobalStyle />

                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>

                <OfflineSupport />
            </Fragment>
        );
    }
}

export default RootApp;
