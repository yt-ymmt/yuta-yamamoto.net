import { NextComponentType } from 'next';
import _Logo from '../atoms/Logo';
import styled from 'styled-components';
import theme from '../../../theme';

type Props = {
    className?: string;
};

const GlobalNav: NextComponentType<{}, {}, Props> = ({ className }) => (
    <Nav className={className}>
        <Logo />
        <h1>hogeeee</h1>
    </Nav>
);

const Nav = styled('nav')({
    position: 'fixed',
    width: 240,
    height: '100%',
    padding: 24,
    background: theme.palette.grey[900],
    color: '#fff'
});

const Logo = styled(_Logo)({ width: '100%' });

export default GlobalNav;
