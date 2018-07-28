import React from 'react';
import styled, { withTheme } from 'styled-components';

const StyledContentBox = styled.section`
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 50vw;
    max-width: 90vw;
    padding: 60px 70px;
    background: ${props => props.theme.color_black};
    transform: translate3d(-50%, -50%, 0);
    text-align: center;
    @media screen and (min-width: 769px) and (max-width: 960px) {
        width: 70vw;
    }
    @media screen and (max-width: 768px) {
        width: 90vw;
        padding: 30px 40px;
    }
`;

const ContentBox = ({ ...props }) => <StyledContentBox {...props} />;

export default withTheme(ContentBox);
