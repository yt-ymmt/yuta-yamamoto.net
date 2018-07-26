import React from 'react';
import styled, { withTheme } from 'styled-components';
import Icon from '../../atoms/Icon';

const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

const StyledLi = styled.li`
    margin: 0 ${props => props.theme.margin_m};
    padding: 0;
    list-style: none;
`;

const SNSList = ({ snsItems, ...props }) => (
    <StyledUl {...props}>
        {snsItems.map((snsItem, index) => (
            <StyledLi key={index}>
                <a href={snsItem.url} target="_blank">
                    <Icon name={snsItem.icon} size="1x" spin={false} />
                </a>
            </StyledLi>
        ))}
    </StyledUl>
);

export default withTheme(SNSList);
