import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '../src/components/theme';
import { StaticPage } from '../src/page';

import IndexTemplate from '../src/components/templates/IndexTemplate';

class IndexPage extends StaticPage {
    render() {
        return (
            <Provider store={this.store}>
                <ThemeProvider theme={theme}>
                    <IndexTemplate />
                </ThemeProvider>
            </Provider>
        );
    }
}

export default IndexPage;
