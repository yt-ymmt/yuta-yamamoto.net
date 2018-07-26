import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './index';

storiesOf('Atoms/Icon', module)
    .add('default', () => <Icon category="fab" name="twitter" size="1x" />)
    .add('size 2x', () => <Icon category="fab" name="facebook" size="2x" />)
    .add('spin', () => <Icon category="fas" name="pencil-alt" size="2x" spin />)
    .add('pulse', () => (
        <Icon category="fas" name="pencil-alt" size="2x" pulse />
    ))
    .add('border', () => (
        <Icon category="fas" name="pencil-alt" size="2x" border />
    ))
    .add('fixedWidth', () => (
        <Icon category="fas" name="pencil-alt" size="2x" fixedWidth />
    ));
