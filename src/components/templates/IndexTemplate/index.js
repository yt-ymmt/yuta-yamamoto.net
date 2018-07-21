import React from 'react';
import { withTheme } from 'styled-components';
import Head from 'next/head';
import Heading from '../../atoms/Heading/index';
import Img from '../../atoms/Img/index';
import Anchor from '../../atoms/Anchor/index';

class Index extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>top</title>
                </Head>
                <Heading>TOP</Heading>
                <Anchor href="/about">About</Anchor>
                <Img src="/static/thumb.jpg" />
            </div>
        );
    }
}

export default withTheme(Index);
