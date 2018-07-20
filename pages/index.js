import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '../src/components/theme';
import Heading from '../src/components/atoms/Heading';
import Img from '../src/components/atoms/Img';
import Anchor from '../src/components/atoms/Anchor';
import { StaticPage } from '../src/page';

class IndexPage extends StaticPage {
    render() {
        return (
            <Provider store={this.store}>
                <ThemeProvider theme={theme}>
                    <div>
                        <Heading>TOP</Heading>
                        <Anchor href="/about">About</Anchor>
                        <Img src="/static/thumb.jpg" />
                    </div>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default IndexPage;
