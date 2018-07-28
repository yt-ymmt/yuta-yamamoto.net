import React from 'react';
import Head from 'next/head';
import styled, { withTheme } from 'styled-components';

import Heading from '../../atoms/Heading';
import ContentBox from '../../atoms/ContentBox';
import Txt from '../../atoms/Txt';
import GlobalNavi from '../../parts/GlobalNavi';
import Particle from '../../atoms/Particle';

class Index extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>about | Yuta Yamamoto</title>
                </Head>
                <ContentBox>
                    <Heading>About</Heading>
                    <GlobalNavi naviItems={this.props.naviItems} />
                    <Txt>
                        hogehoge
                    </Txt>
                </ContentBox>
                <Particle />
            </div>
        );
    }
}

export default withTheme(Index);
