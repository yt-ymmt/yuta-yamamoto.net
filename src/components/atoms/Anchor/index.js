import React from 'react';
import styled, { withTheme } from 'styled-components';
import Link from 'next/link';

const StyledAnchor = styled.a`
    margin: 0;
    padding: 0;
    color: ${props => props.theme.color_link};
`;

const Anchor = ({ children, href, ...props }) => {
    return (
        <Link href={href} passHref>
            <StyledAnchor {...props}>{children}</StyledAnchor>
        </Link>
    );
};

export default withTheme(Anchor);
