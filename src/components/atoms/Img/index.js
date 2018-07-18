import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    margin: 0;
    padding: 0;
    vertical-align: bottom;
`;

const Img = ({ src, width = 'auto', height = 'auto', alt = '', ...props }) => (
    <StyledImg src={src} width={width} height={height} alt={alt} {...props} />
);

export default Img;
