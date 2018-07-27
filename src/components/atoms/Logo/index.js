import React from 'react';
import styled, { withTheme } from 'styled-components';

const StyledLogo = styled.h1`
    margin: 0;
    padding: 0;
    color: ${props => props.theme.color_white};
    font-size: 42px;
    font-weight: bold;
    text-align: center;
    word-break: break-word;
`;

const Logo = ({ ...props }) => <StyledLogo {...props} />;

export default withTheme(Logo);
