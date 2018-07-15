import React from 'react';
import { configure, addDecorator } from '@storybook/react';

const req = require.context('../view/', true, /.stories.(js|jsx)$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
