import React from 'react';
import { storiesOf } from '@storybook/react';
import DataList from './index';

import { ProfileItems } from '../../../mock/data';

storiesOf('Atoms/DataList', module).add('default', () => (
    <DataList dataItems={ProfileItems} />
));
