import { Provider } from 'react-redux';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import theme from '../src/components/theme';
import Heading from '../src/components/atoms/Heading';
import { StaticPage } from '../src/page';

class AboutPage extends StaticPage {
    render() {
        return (
            <Provider store={this.store}>
                <ThemeProvider theme={theme}>
                    <div>
                        <Heading>About</Heading>
                        <Link prefetch={true} href="/">
                            <a>Top</a>
                        </Link>
                    </div>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default AboutPage;
