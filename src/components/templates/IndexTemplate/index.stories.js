import React from 'react';
import { storiesOf } from '@storybook/react';
import IndexTemplate from './index';
import { snsItems, naviItems } from '../../../mock/data';

storiesOf('Templates/Index', module).add('default', () => (
    <IndexTemplate snsItems={snsItems} naviItems={naviItems} />
));
