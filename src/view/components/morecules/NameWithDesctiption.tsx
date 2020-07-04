import { NextComponentType } from 'next';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

type Props = {
    className?: string;
};

const NameWithDescription: NextComponentType<
    Record<string, unknown>,
    Record<string, unknown>,
    Props
> = ({ className }) => (
    <Root className={className}>
        <MyName variant="h6">
            Yuta Yamamoto <br />
            Born in 1985. Living in Tokyo.
            <br />
            Front-end Developer and Engineering Manager.
        </MyName>
        <NameDescription variant="body2">
            2013 - 2018 / DMM GAMES : Front-end Developer, Sub Manager.
            <br />
            2018 - Now / Kaizen Platform, Inc. : Front-end Developer,
            Engineering Manager.
            <br />
            Lang / JavaScript, TypeScript, Rust, Ocaml, etc
            <br />
            Interest / Web, Creative things, Human growth, Fighting Games.
        </NameDescription>
    </Root>
);

const Root = styled('div')({});

const MyName = styled(Typography)({ marginBottom: 12 });

const NameDescription = styled(Typography)({ lineHeight: 1.7 });

export default NameWithDescription;
