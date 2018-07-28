import React from 'react';
import { storiesOf } from '@storybook/react';
import ProfileOverview from './index';

import { profileItems } from '../../../mock/data';

storiesOf('Parts/ProfileOverview', module).add('default', () => (
    <ProfileOverview profileItems={profileItems} />
));
