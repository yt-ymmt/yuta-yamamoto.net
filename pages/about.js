import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '../src/components/theme';
import { StaticPage } from '../src/page';

import AboutTemplate from '../src/components/templates/AboutTemplate/index';

class AboutPage extends StaticPage {
    render() {
        return (
            <Provider store={this.store}>
                <ThemeProvider theme={theme}>
                    <AboutTemplate />
                </ThemeProvider>
            </Provider>
        );
    }
}

export default AboutPage;
