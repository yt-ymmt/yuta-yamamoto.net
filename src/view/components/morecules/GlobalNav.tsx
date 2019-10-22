import { NextComponentType } from 'next';
import Logo from '../atoms/Logo';
import styled from 'styled-components';
import theme from '../../../theme';

type Props = {
    className?: string;
};

const GlobalNav: NextComponentType<{}, {}, Props> = ({ className }) => (
    <Nav className={className}>
        <Logo />
    </Nav>
);

const Nav = styled('nav')({
    width: 200,
    background: theme.palette.grey[900]
});

export default GlobalNav;
