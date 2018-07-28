import React from 'react';
import Head from 'next/head';
import styled, { withTheme } from 'styled-components';

import Heading from '../../atoms/Heading';
import ContentBox from '../../atoms/ContentBox';
import GlobalNavi from '../../parts/GlobalNavi';
import ProfileOverview from '../../parts/ProfileOverview';

const StyledHeading = styled(Heading)`
    margin-bottom: ${props => props.theme.margin_xl};
    color: ${props => props.theme.color_white};
`;

class Index extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>about | Yuta Yamamoto</title>
                </Head>
                <ContentBox>
                    <StyledHeading>About</StyledHeading>
                    <ProfileOverview profileItems={this.props.profileItems} />
                    <GlobalNavi naviItems={this.props.naviItems} />
                </ContentBox>
            </div>
        );
    }
}

export default withTheme(Index);
