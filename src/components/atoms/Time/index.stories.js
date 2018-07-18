import React from 'react';
import { storiesOf } from '@storybook/react';

import Time from './index';

storiesOf('Atoms/Time', module)
    .add('default', () => <Time format="YYYY/MM/DD HH:mm" />)
    .add('time', () => (
        <Time format="YYYY/MM/DD HH:mm" time="2013-02-08 09:30" />
    ))
    .add('format', () => (
        <Time format="MM/DD" time="2013-02-08 09:30" />
    ));
