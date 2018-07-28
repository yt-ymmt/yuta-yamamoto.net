import React from 'react';
import styled, { withTheme } from 'styled-components';

const StyledDataList = styled.dl`
    margin: 0;
    padding: 0;
`;

const StyledDataListWrapper = styled.div`
    display: flex;
`;

const StyledDataTerm = styled.dt`
    display: flex;
    justify-content: space-between;
    min-width: 5rem;
    margin: 0 ${props => props.theme.margin_m} ${props => props.theme.margin_m}
        0;
    padding: 0;
    &:after {
        display: block;
        content: ':';
    }
`;
const StyledDataDescription = styled.dd`
    margin: 0 0 ${props => props.theme.margin_m} 0;
    padding: 0;
    flex: 1;
`;

const DataList = ({ dataItems, ...props }) => (
    <StyledDataList {...props}>
        {dataItems.map((dataItem, index) => (
            <StyledDataListWrapper key={index}>
                <StyledDataTerm>{dataItem.term}</StyledDataTerm>
                <StyledDataDescription>
                    {dataItem.description}
                </StyledDataDescription>
            </StyledDataListWrapper>
        ))}
    </StyledDataList>
);

export default withTheme(DataList);
