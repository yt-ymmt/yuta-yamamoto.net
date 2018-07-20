import React from 'react';
import { withTheme } from 'styled-components';
import Heading from '../../atoms/Heading/index';
import Anchor from '../../atoms/Anchor/index';

class Index extends React.Component {
    render() {
        return (
            <div>
                <Heading>About</Heading>
                <Anchor href="/">Top</Anchor>
            </div>
        );
    }
}

export default withTheme(Index);
