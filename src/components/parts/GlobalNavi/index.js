import React from 'react';
import styled, { withTheme } from 'styled-components';
import Anchor from '../../atoms/Anchor';

const StyledGlobalNavi = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

const StyledGlobalNaviItem = styled.li`
    margin: 0 ${props => props.theme.margin_m};
    padding: 0;
    list-style-type: none;
`;

const GlobalNavi = ({ naviItems, ...props }) => (
    <nav>
        <StyledGlobalNavi {...props}>
            {naviItems.map((naviItem, index) => (
                <StyledGlobalNaviItem key={index}>
                    <Anchor href={naviItem.href}>{naviItem.title}</Anchor>
                </StyledGlobalNaviItem>
            ))}
        </StyledGlobalNavi>
    </nav>
);

export default withTheme(GlobalNavi);
