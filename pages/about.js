import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '../src/components/theme';
import Heading from '../src/components/atoms/Heading';
import Anchor from '../src/components/atoms/Anchor';
import { StaticPage } from '../src/page';

class AboutPage extends StaticPage {
    render() {
        return (
            <Provider store={this.store}>
                <ThemeProvider theme={theme}>
                    <div>
                        <Heading>About</Heading>
                        <Anchor href="/">Top</Anchor>
                    </div>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default AboutPage;
