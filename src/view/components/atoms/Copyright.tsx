import { NextComponentType } from 'next';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

type Props = {
    className?: string;
};

const Copyright: NextComponentType<
    Record<string, unknown>,
    Record<string, unknown>,
    Props
> = ({ className }) => (
    <Root className={className}>
        <Typography variant="body2">© yuta.yamamoto.dev.</Typography>
    </Root>
);

const Root = styled('div')({});

export default Copyright;
