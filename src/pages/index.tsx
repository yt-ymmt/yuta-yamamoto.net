import { NextPage } from 'next';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

type Props = {
    className?: string;
};

const Home: NextPage<Props> = ({ className }) => (
    <Root className={className}>
        <Typography variant="h6">Yuta Yamamoto</Typography>
        <Typography variant="subtitle1">
            I am a Front-end Developer and Engineering Manager based in Tokyo.
            2013-2018 DMM GAMES: Front-end Developer. 2018~ Kaizen Platform,
            Inc.: Front-end Developer. I Love Fighting Game, Delicious food,
            Creatives.
        </Typography>
    </Root>
);

const Root = styled('div')({});

export default Home;
