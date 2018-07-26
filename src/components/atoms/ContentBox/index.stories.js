import React from 'react';
import { storiesOf } from '@storybook/react';

import ContentBox from './index';

storiesOf('Atoms/ContentBox', module).add('default', () => (
    <ContentBox>ここにコンテンツが入ります</ContentBox>
));
