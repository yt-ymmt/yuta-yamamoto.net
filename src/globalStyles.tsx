import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle({
    '*': {
        margin: 0,
        boxSizing: `border-box`!
    },
    'html, body': {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        lineHeight: 1,
        fontFamily: `"YakuHanJP", "NotoSansCJKjp", "NotoSansCJKsc", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif`
    }
});

export default GlobalStyle;
