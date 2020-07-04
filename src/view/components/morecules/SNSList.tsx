import { NextComponentType } from 'next';
import styled from 'styled-components';
import ServiceIconWithName from './ServiceIconWithName';
import Link from 'next/link';
import { flexibleLayoutContainer } from '../../styleUtility/flexibleLayout';

type Props = {
    className?: string;
};

const SNSList: NextComponentType<
    Record<string, unknown>,
    Record<string, unknown>,
    Props
> = ({ className }) => (
    <Root className={className}>
        <Item>
            <Link href="https://github.com/yt-ymmt">
                <a target="_blank">
                    <ServiceIconWithName
                        src="/icons/github.svg"
                        name="Github"
                    />
                </a>
            </Link>
        </Item>
        <Item>
            <Link href="https://twitter.com/YtYmmt">
                <a target="_blank">
                    <ServiceIconWithName
                        src="/icons/twitter.svg"
                        name="Twitter"
                    />
                </a>
            </Link>
        </Item>
        <Item>
            <Link href="https://qiita.com/Yuta_Yamamoto">
                <a target="_blank">
                    <ServiceIconWithName src="/icons/qiita.svg" name="Qiita" />
                </a>
            </Link>
        </Item>
        <Item>
            <Link href="https://yuta-yamamoto.hatenablog.com">
                <a target="_blank">
                    <ServiceIconWithName
                        src="/icons/hatenablog.svg"
                        name="Hatena blog"
                    />
                </a>
            </Link>
        </Item>
        <Item>
            <Link href="https://dev.to/yuta_yamamoto">
                <a target="_blank">
                    <ServiceIconWithName
                        src="/icons/dev-dot-to.svg"
                        name="dev.to"
                    />
                </a>
            </Link>
        </Item>
    </Root>
);

const Root = styled('ul')(
    flexibleLayoutContainer({
        alignItems: 'center',
        wrap: 'wrap'
    })
);

const Item = styled('li')({
    margin: '0 16px 16px 0'
});

export default SNSList;
