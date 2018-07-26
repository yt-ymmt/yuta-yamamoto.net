import React from 'react';
import styled, { withTheme } from 'styled-components';
import Icon from '../../atoms/Icon';
import Txt from '../../atoms/Txt';
import Anchor from '../../atoms/Anchor';

const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: ${props => props.theme.margin_l} 0 0 0;
    border-top: 1px dashed ${props => props.theme.color_white};
`;

const StyledLi = styled.li`
    margin: 0 ${props => props.theme.margin_m};
    padding: 0;
    list-style: none;
`;

const StyledAnchor = styled(Anchor)`
    display: flex;
    align-items: center;
    color: ${props => props.theme.color_white};
`;

const StyledIcon = styled(Icon)`
    max-width: 30px;
    margin-right: ${props => props.theme.margin_s};
`;

const SNSList = ({ snsItems, ...props }) => (
    <StyledUl {...props}>
        {snsItems.map((snsItem, index) => (
            <StyledLi key={index}>
                <Txt size="m">
                    <StyledAnchor href={snsItem.url} target="_blank">
                        <StyledIcon
                            category={snsItem.iconCategory}
                            name={snsItem.iconName}
                            size="1x"
                            fixedWidth
                        />
                        {snsItem.name}
                    </StyledAnchor>
                </Txt>
            </StyledLi>
        ))}
    </StyledUl>
);

export default withTheme(SNSList);
