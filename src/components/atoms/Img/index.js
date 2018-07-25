import React from 'react';
import styled, { withTheme } from 'styled-components';

const StyledImg = styled.img`
    margin: 0;
    padding: 0;
    vertical-align: bottom;
    border-radius: ${props => {
        return props.circle ? '50%' : '0';
    }};
`;

const Img = ({ src, width = 'auto', height = 'auto', alt = '', ...props }) => (
    <StyledImg src={src} width={width} height={height} alt={alt} {...props} />
);

export default withTheme(Img);
