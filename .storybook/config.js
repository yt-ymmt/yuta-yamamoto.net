import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/components/theme';

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

const req = require.context('../src/', true, /.stories.(js|jsx)$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
