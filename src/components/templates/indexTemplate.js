import React from 'react';
import { withTheme } from 'styled-components';
import Heading from '../atoms/Heading';
import Img from '../atoms/Img';
import Anchor from '../atoms/Anchor';

class IndexTemplate extends React.Component {
    render() {
        return (
            <div>
                <Heading>TOP</Heading>
                <Anchor href="/about">About</Anchor>
                <Img src="/static/thumb.jpg" />
            </div>
        );
    }
}

export default withTheme(IndexTemplate);
