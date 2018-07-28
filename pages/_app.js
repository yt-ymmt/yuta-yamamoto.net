import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../src/withReduxStore';
import { ThemeProvider } from 'styled-components';
import theme from '../src/components/theme';
import Particle from '../src/components/atoms/Particle';

class RootApp extends App {
    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </Provider>
                <Particle />
            </Container>
        );
    }
}

export default withReduxStore(RootApp);
