import React from 'react';
import styled, { withTheme } from 'styled-components';

const StyledLogo = styled.h1`
    margin: 0 0 ${props => props.theme.margin_l} 0;
    color: ${props => props.theme.color_white};
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    text-align: center;
`;

const Logo = ({ ...props }) => <StyledLogo {...props} />;

export default withTheme(Logo);
