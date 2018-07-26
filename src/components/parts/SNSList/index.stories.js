import React from 'react';
import { storiesOf } from '@storybook/react';

import SNSList from './index';

const snsItems = [
    {
        url: 'https://twitter.com/YtYmmt',
        icon: 'twitter'
    }
];

storiesOf('Parts/SNSList', module).add('default', () => (
    <SNSList snsItems={snsItems} />
));
