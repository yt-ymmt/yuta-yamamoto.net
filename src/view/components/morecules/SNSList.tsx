import { NextComponentType } from 'next';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

type Props = {
    className?: string;
};

const SNSList: NextComponentType<{}, {}, Props> = ({ className }) => (
    <Root className={className}>
        <Typography variant="body2">Github</Typography>
        <Typography variant="body2">Twitter</Typography>
        <Typography variant="body2">Qiita</Typography>
        <Typography variant="body2">dev.to</Typography>
        <Typography variant="body2">Hatena blog</Typography>
        <Typography variant="body2">Wantedly</Typography>
        <Typography variant="body2">Lapras</Typography>
    </Root>
);

const Root = styled('div')({});

export default SNSList;
