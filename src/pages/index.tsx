import { NextPage } from 'next';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

type Props = {
    className?: string;
};

const Home: NextPage<Props> = ({ className }) => (
    <Root className={className}>
        <MyName variant="h6" component="h3">
            Yuta Yamamoto <br />
            Born in 1985. Living in Tokyo.<br />
            Front-end Developer and Engineering Manager.
        </MyName>
        <NameDescription variant="body2">
            2013 - 2018 / DMM GAMES : Front-end Developer.<br />
            2018 - Now / Kaizen Platform, Inc. : Front-end Developer.<br />
            I like Fighting Games, Delicious foods, Creative things, Human
            growth.
        </NameDescription>
    </Root>
);

const Root = styled('div')({});

const MyName = styled(Typography)({
    marginBottom: 12
});

const NameDescription = styled(Typography)({
    lineHeight: 1.7
});

export default Home;
