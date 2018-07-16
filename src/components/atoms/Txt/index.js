import React from 'react';
import styled from 'styled-components';

const StyledTxt = styled.p`
    margin: 0;
    padding: 0;
    color: black;
    font-size: ${props => (props.size ? props.size : 14)}px;
`;

const StyledInfo = StyledTxt.extend`
    color: cadetblue;
`;

const StyledWarning = StyledTxt.extend`
    color: tomato;
`;

const textFactory = role => ({ size = 'm', ...props }) => {
    const fontSize = (() => {
        switch (size) {
            case 'l':
                return 16;
            case 'm':
                return 14;
            case 's':
                return 12;
            default:
                return 12;
        }
    })();

    switch (role) {
        case 'info':
            return <StyledInfo size={fontSize} {...props} />;
        case 'warning':
            return <StyledWarning size={fontSize} {...props} />;
        default:
            return <StyledTxt size={fontSize} {...props} />;
    }
};

const Index = textFactory('default');

export default Index;
export const InfoTxt = textFactory('info');
export const WarningTxt = textFactory('warning');
