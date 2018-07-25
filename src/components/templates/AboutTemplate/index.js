import React from 'react';
import Head from 'next/head';
import { withTheme } from 'styled-components';
import Heading from '../../atoms/Heading/index';
import GlobalNavi from '../../parts/GlobalNavi';

const naviItems = [
    {
        title: 'TOP',
        href: '/'
    },
    {
        title: 'About',
        href: '/about'
    }
];

class Index extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>about</title>
                </Head>
                <Heading>About</Heading>
                <GlobalNavi naviItems={naviItems} />
            </div>
        );
    }
}

export default withTheme(Index);
