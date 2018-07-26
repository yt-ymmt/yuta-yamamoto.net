import React from 'react';
import styled, { withTheme } from 'styled-components';
import Link from 'next/link';

const StyledAnchor = styled.a`
    margin: 0;
    padding: 0;
    color: ${props => props.theme.color_link};
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
        text-decoration: underline;
    }
`;

const Anchor = ({ children, href, ...props }) => {
    return (
        <Link href={href} prefetch passHref>
            <StyledAnchor {...props}>{children}</StyledAnchor>
        </Link>
    );
};

export default withTheme(Anchor);
