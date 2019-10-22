import { NextComponentType } from 'next';
import styled from 'styled-components';

interface Props {
    className?: string;
}

const Logo: NextComponentType<{}, {}, Props> = ({ className }) => (
    <Root className={className}>Logo</Root>
);

const Root = styled('div')({ width: 200, height: 'auto' });

export default Logo;
