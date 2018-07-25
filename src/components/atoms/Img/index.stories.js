import React from 'react';
import { storiesOf } from '@storybook/react';

import Img from './index';

storiesOf('Atoms/Img', module)
    .add('default', () => <Img src="/static/thumb.jpg" />)
    .add('width/haight', () => (
        <Img src="/static/thumb.jpg" width="20" height="20" />
    ))
    .add('circle', () => (
        <Img src="/static/thumb.jpg" width="20" height="20" circle={true} />
    ));
