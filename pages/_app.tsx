import App, { AppContext } from 'next/app';
import React, { Fragment } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';
import theme from '../src/theme';
import OfflineSupport from '../src/view/components/OfflineSupport';
import { CssBaseline } from '@material-ui/core';

const GlobalStyle = createGlobalStyle({
    '*': {
        margin: 0,
        boxSizing: 'border-box'
    },
    'html, body': {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        lineHeight: 1,
        fontFamily: `"YakuHanJP", "NotoSansCJKjp", "NotoSansCJKsc", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif`
    }
});

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
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>

                <OfflineSupport />
            </Fragment>
        );
    }
}

export default RootApp;
