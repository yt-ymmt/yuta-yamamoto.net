import React from 'react';
import styled, { withTheme } from 'styled-components';
import Head from 'next/head';
import Logo from '../../atoms/Logo';
import GlobalNavi from '../../parts/GlobalNavi';
import Img from '../../atoms/Img/index';
import Particle from '../../atoms/Particle';

const StyledHeroItems = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    text-align: center;
`;

const naviItems = [
    {
        title: 'TOP',
        href: '/'
    },
    {
        title: 'About',
        href: '/about'
    }
];

class Index extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>top</title>
                </Head>
                <StyledHeroItems>
                    <Logo>Yuta Yamamoto</Logo>
                    <GlobalNavi naviItems={naviItems} />
                    <Img src="/static/thumb.jpg" width="200" height="200" />
                </StyledHeroItems>
                <Particle />
            </div>
        );
    }
}

export default withTheme(Index);
