import App, { AppContext } from 'next/app';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import OfflineSupport from '../view/components/OfflineSupport';
import { CssBaseline, StylesProvider } from '@material-ui/core';
import theme from '../theme';
import GlobalStyle from '../globalStyles';

class RootApp extends App {
    static async getInitialProps({ Component, ctx }: AppContext) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }

    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles) {
            jssStyles.parentNode!.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Root>
                <StylesProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <GlobalStyle />
                        <Component {...pageProps} />
                    </ThemeProvider>
                    <OfflineSupport />
                </StylesProvider>
            </Root>
        );
    }
}

const Root = styled('div')({
    padding: 24
});

export default RootApp;
