import React from 'react';
import styled, { withTheme } from 'styled-components';

const StyledContentBox = styled.section`
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: 90vw;
    padding: 60px 70px;
    background: ${props => props.theme.color_black};
    transform: translate3d(-50%, -50%, 0);
    text-align: center;
`;

const ContentBox = ({ ...props }) => <StyledContentBox {...props} />;

export default withTheme(ContentBox);
