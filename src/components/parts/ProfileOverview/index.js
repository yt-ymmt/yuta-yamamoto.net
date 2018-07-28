import React from 'react';
import styled, { withTheme } from 'styled-components';
import Img from '../../atoms/Img';
import DataList from '../../atoms/DataList';

const StyledContainer = styled.div`
    margin-bottom: ${props => props.theme.margin_xl};
`;

const StyledImg = styled(Img)`
    display: block;
    margin: 0 auto ${props => props.theme.margin_xl};
`;

const StyledDataList = styled(DataList)`
    display: inline-block;
    color: ${props => props.theme.color_white};
    text-align: left;
`;

const ProfileOverview = ({ profileItems, ...props }) => (
    <StyledContainer {...props}>
        <StyledImg src="/static/thumb.jpg" width="180" height="180" />
        <StyledDataList dataItems={profileItems} />
    </StyledContainer>
);

export default withTheme(ProfileOverview);
