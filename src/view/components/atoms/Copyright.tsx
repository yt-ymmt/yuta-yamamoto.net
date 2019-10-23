import { NextComponentType } from 'next';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

type Props = {
    className?: string;
};

const Copyright: NextComponentType<{}, {}, Props> = ({ className }) => (
    <Root className={className}>
        <Typography variant="body2">
            © 2019 yuta.yamamoto.dev All Rights Reserved.
        </Typography>
    </Root>
);

const Root = styled('div')({});

export default Copyright;
