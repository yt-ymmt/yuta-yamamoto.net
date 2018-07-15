import React from 'react';
import { storiesOf } from '@storybook/react';

import Heading from './index';

storiesOf('Atoms/Heading', module)
    .add('default', () => <Heading>Heading is here!</Heading>)
    .add('h2', () => <Heading level={2}>Heading is here!</Heading>)
    .add('h3', () => <Heading level={3}>Heading is here!</Heading>)
    .add('h4', () => <Heading level={4}>Heading is here!</Heading>)
    .add('h5', () => <Heading level={5}>Heading is here!</Heading>)
    .add('h6', () => <Heading level={6}>Heading is here!</Heading>);
