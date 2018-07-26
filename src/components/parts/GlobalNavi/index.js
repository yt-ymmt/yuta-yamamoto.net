import React from 'react';
import styled, { withTheme } from 'styled-components';
import Anchor from '../../atoms/Anchor';
import Txt from '../../atoms/Txt';

const StyledGlobalNavi = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 ${props => props.theme.margin_xl} 0;
    padding: 0;
`;

const StyledGlobalNaviItem = styled.li`
    margin: 0 ${props => props.theme.margin_m};
    padding: 0;
    list-style-type: none;
`;

const StyledAnchor = styled(Anchor)`
    color: ${props => props.theme.color_white};
`;

const GlobalNavi = ({ naviItems, ...props }) => (
    <nav>
        <StyledGlobalNavi {...props}>
            {naviItems.map((naviItem, index) => (
                <StyledGlobalNaviItem key={index}>
                    <Txt size="l">
                        <StyledAnchor href={naviItem.href}>
                            {naviItem.title}
                        </StyledAnchor>
                    </Txt>
                </StyledGlobalNaviItem>
            ))}
        </StyledGlobalNavi>
    </nav>
);

export default withTheme(GlobalNavi);
