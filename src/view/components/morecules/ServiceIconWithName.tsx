import { NextComponentType } from 'next';
import { Avatar, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { flexibleLayoutContainer } from '../../styleUtility/flexibleLayout';

type Props = {
    src: string;
    name: string;
    className?: string;
};

const ServiceIconWithName: NextComponentType<{}, {}, Props> = ({
    src,
    name,
    className
}) => (
    <Root>
        <Icon src={src} className={className} />
        <Typography variant="body2">{name}</Typography>
    </Root>
);

const Root = styled('div')(flexibleLayoutContainer({ alignItems: 'center' }));

const Icon = styled(Avatar)({
    width: 24,
    height: 24,
    marginRight: 8,
    borderRadius: 0
});

export default ServiceIconWithName;
