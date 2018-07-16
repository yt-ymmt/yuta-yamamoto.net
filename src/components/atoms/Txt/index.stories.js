import React from 'react';
import { storiesOf } from '@storybook/react';

import Txt, { InfoTxt, WarningTxt } from './index';

storiesOf('Atoms/Txt', module)
    .add('default', () => <Txt>Txt is Here!</Txt>)
    .add('infoTxt', () => <InfoTxt>InfoTxt is here!</InfoTxt>)
    .add('warningTxt', () => <WarningTxt>WarningTxt is here!</WarningTxt>)
    .add('l', () => <Txt size={'l'}>Txt is here!</Txt>)
    .add('m', () => <Txt size={'m'}>Txt is here!</Txt>)
    .add('s', () => <Txt size={'s'}>Txt is here!</Txt>);
