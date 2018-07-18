import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledAnchor = styled.a`
    margin: 0;
    padding: 0;
`;

const Anchor = ({ children, href, ...props }) => {
    return (
        <Link href={href}>
            <StyledAnchor {...props}>{children}</StyledAnchor>
        </Link>
    );
};

export default Anchor;
