import { NextPage } from 'next';
import styled from 'styled-components';
import NameWithDescription from '../view/components/morecules/NameWithDesctiption';

type Props = {
    className?: string;
};

const Home: NextPage<Props> = ({ className }) => (
    <Root className={className}>
        <NameWithDescription />
    </Root>
);

const Root = styled('div')({});

export default Home;
