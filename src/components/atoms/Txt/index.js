import React from 'react';
import styled, { withTheme } from 'styled-components';

const StyledTxt = styled.p`
    margin: 0;
    padding: 0;
    color: black;
    font-size: ${props => (props.size ? props.size : 14)}px;
`;

const StyledInfo = StyledTxt.extend`
    color: ${props => props.theme.color_blue};
`;

const StyledWarning = StyledTxt.extend`
    color: ${props => props.theme.color_red};
`;

const textFactory = role => ({ size = 'm', ...props }) => {
    const fontSize = (() => {
        switch (size) {
            case 'l':
                return 21;
            case 'm':
                return 16;
            case 's':
                return 10;
            default:
                return 15;
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

export default withTheme(Index);
export const InfoTxt = withTheme(textFactory('info'));
export const WarningTxt = withTheme(textFactory('warning'));
