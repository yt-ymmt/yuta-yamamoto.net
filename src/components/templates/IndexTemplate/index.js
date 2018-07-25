import React from 'react';
import styled, { withTheme } from 'styled-components';
import { fadeInDown, fadeIn } from '../../utils/Animations';

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

const StyledImg = styled(Img)`
    margin-bottom: ${props => props.theme.margin_xl};
    animation: ${fadeInDown} 2.5s ease 0.2s both;
    filter: brightness(1.3);
    opacity: 0;
`;

const StyledLogo = styled(Logo)`
    animation: ${fadeInDown} 2.5s ease 0s both;
    opacity: 0;
`;

const StyledGlobalNavi = styled(GlobalNavi)`
    animation: ${fadeIn} 2s ease 1.5s both;
`;

const naviItems = [
    {
        title: 'Top',
        href: '/'
    },
    {
        title: 'About',
        href: '/about'
    },
    {
        title: 'Top',
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
                    <StyledGlobalNavi naviItems={naviItems} />
                </StyledHeroItems>
                <Particle />
            </div>
        );
    }
}

export default withTheme(Index);
