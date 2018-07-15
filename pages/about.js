import { Provider } from 'react-redux';
import Link from 'next/link';
import Heading from '../src/components/atoms/Heading';
import { StaticPage } from './_page';

class AboutPage extends StaticPage {
    render() {
        return (
            <Provider store={this.store}>
                <div>
                    <Heading>About</Heading>
                    <Link prefetch={true} href="./index">
                        <a>Top</a>
                    </Link>
                </div>
            </Provider>
        );
    }
}

export default AboutPage;
