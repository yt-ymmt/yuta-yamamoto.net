import { NextComponentType } from 'next';
import { Typography, Avatar } from '@material-ui/core';
import styled from 'styled-components';

type Props = {
    className?: string;
};

const SNSList: NextComponentType<{}, {}, Props> = ({ className }) => (
    <Root className={className}>
        <Avatar src="/icons/github.svg" />
        <Avatar src="/icons/twitter.svg" />
        <Avatar src="/icons/qiita.svg" />
        <Avatar src="/icons/dev-dot-to.svg" />
        <Avatar src="/icons/hatenablog.svg" />
        <Typography variant="body2">Github</Typography>
        <Typography variant="body2">Twitter</Typography>
        <Typography variant="body2">Qiita</Typography>
        <Typography variant="body2">dev.to</Typography>
        <Typography variant="body2">Hatena blog</Typography>
    </Root>
);

const Root = styled('div')({});

export default SNSList;
