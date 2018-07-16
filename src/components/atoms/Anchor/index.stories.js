import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Anchor from './index';

storiesOf('Atoms/Anchor', module).add('default', () => (
    <Anchor href="/" onClick={action('クリックされました')}>
        Link
    </Anchor>
));
