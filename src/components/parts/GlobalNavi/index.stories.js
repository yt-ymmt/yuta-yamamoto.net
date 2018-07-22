import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import GlobalNavi from './index';

// prefetchを使うために必要
import Router from 'next/router';
const mockedRouter = { push: () => {}, prefetch: () => {} };
Router.router = mockedRouter;

// mock data
const naviItems = [
    {
        title: 'TOP',
        href: '/'
    },
    {
        title: 'About',
        href: '/about'
    }
];

storiesOf('Parts/GlobalNavi', module).add('default', () => (
    <GlobalNavi naviItems={naviItems} />
));
