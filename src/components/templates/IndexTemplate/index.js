import React from 'react';
import Head from 'next/head';
import styled, { withTheme } from 'styled-components';
import { fadeInDown, fadeIn } from '../../utils/Animations';

import ContentBox from '../../atoms/ContentBox';
import Logo from '../../atoms/Logo';
import Txt from '../../atoms/Txt';
import SNSList from '../../parts/SNSList';
import GlobalNavi from '../../parts/GlobalNavi';
import Img from '../../atoms/Img/index';

const StyledImg = styled(Img)`
    margin-bottom: ${props => props.theme.margin_l};
    animation: ${fadeIn} 3s ease 1.5s both;
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

const StyledSNSList = styled(SNSList)`
    animation: ${fadeIn} 3s ease 2s both;
`;

const StyledGlobalNavi = styled(GlobalNavi)`
    animation: ${fadeIn} 2s ease 1.5s both;
`;

class Index extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Yuta Yamamoto</title>
                </Head>
                <ContentBox>
                    <StyledImg
                        circle={true}
                        src="/static/thumb.jpg"
                        width="200"
                        height="200"
                    />
                    <StyledLogo>Yuta Yamamoto</StyledLogo>
                    <StyledTxt size="m">"I am Frontend Developer."</StyledTxt>
                    <StyledGlobalNavi naviItems={this.props.naviItems} />
                    <StyledSNSList snsItems={this.props.snsItems} />
                </ContentBox>
            </div>
        );
    }
}

export default withTheme(Index);
