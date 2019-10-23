import { NextPage } from 'next';
import styled from 'styled-components';
import NameWithDescription from '../view/components/morecules/NameWithDesctiption';
import _SNSList from '../view/components/morecules/SNSList';
import _Copyright from '../view/components/atoms/Copyright';

type Props = {
    className?: string;
};

const Home: NextPage<Props> = ({ className }) => (
    <Root className={className}>
        <NameWithDescription />
        <SNSList />
        <Copyright />
    </Root>
);

const Root = styled('div')({});

const SNSList = styled(_SNSList)({
    marginTop: 24
});

const Copyright = styled(_Copyright)({
    marginTop: 24
});

export default Home;
