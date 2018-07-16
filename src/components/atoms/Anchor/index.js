import React from 'react';
import Link from 'next/link';

const Anchor = ({ children, href, ...props }) => {
    return (
        <Link href={href}>
            <a {...props}>{children}</a>
        </Link>
    );
};

export default Anchor;
