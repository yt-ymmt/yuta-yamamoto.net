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
        fontFamily: `usual,'Yu Gothic',sans-serif`
    }
});

export default GlobalStyle;
