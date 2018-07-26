import React from 'react';
import styled, { withTheme } from 'styled-components';
import { fadeInDown, fadeIn } from '../../utils/Animations';

import Head from 'next/head';
import Logo from '../../atoms/Logo';
import Txt from '../../atoms/Txt';
import GlobalNavi from '../../parts/GlobalNavi';
import Img from '../../atoms/Img/index';
import Particle from '../../atoms/Particle';

const StyledHeroItems = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    padding: ${props => props.theme.margin_xl} 60px;
    background: ${props => props.theme.color_black};
    transform: translate3d(-50%, -50%, 0);
    text-align: center;
`;

const StyledImg = styled(Img)`
    margin-bottom: ${props => props.theme.margin_l};
    animation: ${fadeInDown} 2.5s ease 0.7s both;
    filter: brightness(1.2);
    opacity: 0;
`;

const StyledLogo = styled(Logo)`
    margin-bottom: ${props => props.theme.margin_s};
    animation: ${fadeInDown} 2.5s ease 0.5s both;
    opacity: 0;
`;

const StyledTxt = styled(Txt)`
    margin-bottom: ${props => props.theme.margin_xl};
    color: ${props => props.theme.color_white};
    animation: ${fadeInDown} 2.5s ease 0.5s both;
    opacity: 0;
`;

const StyledGlobalNavi = styled(GlobalNavi)`
    animation: ${fadeIn} 2s ease 1.5s both;
`;

const naviItems = [
    {
        title: 'TOP',
        href: '/'
    },
    {
        title: 'ABOUT',
        href: '/about'
    },
    {
        title: 'TOP',
        href: '/'
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
                    <StyledImg
                        circle={true}
                        src="/static/thumb.jpg"
                        width="200"
                        height="200"
                    />
                    <StyledLogo>Yuta Yamamoto</StyledLogo>
                    <StyledTxt size="l">I am Developper.</StyledTxt>
                    <StyledGlobalNavi naviItems={naviItems} />
                </StyledHeroItems>
                <Particle />
            </div>
        );
    }
}

export default withTheme(Index);
