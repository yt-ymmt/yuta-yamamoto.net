import { NextComponentType } from 'next';
import styled from 'styled-components';
import { Link as MuiLink } from '@material-ui/core';
import ServiceIconWithName from './ServiceIconWithName';
import Link from 'next/link';
import { flexibleLayoutContainer } from '../../styleUtility/flexibleLayout';

type Props = {
    className?: string;
};

const SNSList: NextComponentType<{}, {}, Props> = ({ className }) => (
    <Root className={className}>
        <Item>
            <Link href="https://github.com/yt-ymmt">
                <MuiLink target="_blank">
                    <ServiceIconWithName
                        src="/icons/github.svg"
                        name="Github"
                    />
                </MuiLink>
            </Link>
        </Item>
        <Item>
            <Link href="https://twitter.com/YtYmmt">
                <MuiLink target="_blank">
                    <ServiceIconWithName
                        src="/icons/twitter.svg"
                        name="Twitter"
                    />
                </MuiLink>
            </Link>
        </Item>
        <Item>
            <Link href="https://qiita.com/Yuta_Yamamoto">
                <MuiLink target="_blank">
                    <ServiceIconWithName src="/icons/qiita.svg" name="Qiita" />
                </MuiLink>
            </Link>
        </Item>
        <Item>
            <Link href="https://yuta-yamamoto.hatenablog.com">
                <MuiLink target="_blank">
                    <ServiceIconWithName
                        src="/icons/hatenablog.svg"
                        name="Hatena blog"
                    />
                </MuiLink>
            </Link>
        </Item>
        {/* <Link href="https://github.com/yt-ymmt">
            <MuiLink target="_blank">
                <ServiceIconWithName
                    src="/icons/dev-dot-to.svg"
                    name="dev.to"
                />
            </MuiLink>
        </Link> */}
    </Root>
);

const Root = styled('ul')(
    flexibleLayoutContainer({
        alignItems: 'center'
    })
);

const Item = styled('li')({
    marginRight: 16
});

export default SNSList;
