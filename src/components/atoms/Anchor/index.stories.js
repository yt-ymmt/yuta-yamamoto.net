import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Anchor from './index';

// prefetchを使うために必要
import Router from 'next/router';
const mockedRouter = { push: () => {}, prefetch: () => {} };
Router.router = mockedRouter;

storiesOf('Atoms/Anchor', module).add('default', () => (
    <Anchor href="/" onClick={action('クリックされました')}>
        Link
    </Anchor>
));
