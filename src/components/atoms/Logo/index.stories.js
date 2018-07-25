import React from 'react';
import { storiesOf } from '@storybook/react';

import Logo from './index';

storiesOf('Atoms/Logo', module).add('default', () => (
    <Logo>Yuta Yamamoto</Logo>
));