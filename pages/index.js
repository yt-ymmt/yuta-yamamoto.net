import { Provider } from 'react-redux';
import Link from 'next/link';
import Heading from '../src/components/atoms/Heading';
import { StaticPage } from '../src/page';

class IndexPage extends StaticPage {
    render() {
        return (
            <Provider store={this.store}>
                <div>
                    <Heading>TOP</Heading>
                    <Link prefetch={true} href="/about">
                        <a>About</a>
                    </Link>
                </div>
            </Provider>
        );
    }
}

export default IndexPage;
