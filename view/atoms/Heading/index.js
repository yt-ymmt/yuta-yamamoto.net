import React from 'react';
import styled from 'styled-components';
import { containPresenter } from '../../utils/Hoc';

const Head = styled.h1`
    margin: 0 0 12px 0;
    color: black;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.4;
`;

const Head2 = Head.withComponent('h2').extend`
    margin-bottom: 12px;
    font-size: 1.8rem;
`;

const Head3 = Head.withComponent('h3').extend`
    margin-bottom: 12px;
    font-size: 1.6rem;
`;

const Head4 = Head.withComponent('h4').extend`
    margin-bottom: 12px;
    font-size: 1.4rem;
`;

const Head5 = Head.withComponent('h5').extend`
    margin-bottom: 12px;
    font-size: 1.2rem;
`;

const Head6 = Head.withComponent('h6').extend`
    margin-bottom: 12px;
    font-size: 1rem;
`;

const HeadingPresenter = ({ level, ...props }) => {
    switch (level) {
        case 1:
            return <Head {...props} />;
        case 2:
            return <Head2 {...props} />;
        case 3:
            return <Head3 {...props} />;
        case 4:
            return <Head4 {...props} />;
        case 5:
            return <Head5 {...props} />;
        case 6:
            return <Head6 {...props} />;
        default:
            return <Head {...props} />;
    }
};

export const HeadingContainer = ({ presenter, level = 1, ...props }) => {
    return presenter({ level, ...props });
};

const Index = containPresenter(HeadingContainer, HeadingPresenter);
export default Index;
