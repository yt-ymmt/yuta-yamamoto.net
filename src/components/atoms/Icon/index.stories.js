import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './index';

storiesOf('Atoms/Icon', module)
    .add('default', () => <Icon name="spinner" size="1x" spin={false} />)
    .add('size 2x', () => <Icon name="spinner" size="2x" spin={false} />)
    .add('spin', () => <Icon name="spinner" size="2x" spin={true} />)
    .add('twitter', () => <Icon name="twitter" size="1x" />);
