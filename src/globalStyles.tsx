import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle({
    '*, *::before, *::after': {
        margin: 0,
        boxSizing: `border-box`!
    },
    'html, body': {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        lineHeight: 1,
        fontFamily: `usual, 'Noto Sans', 'Yu Gothic', sans-serif`
    },
    'h1, h2, h3, h4, h5, h6': {
        margin: 0
    },
    ul: {
        margin: 0,
        padding: 0
    },
    li: {
        margin: 0,
        padding: 0,
        listStyleType: 'none'
    }
});

export default GlobalStyle;
