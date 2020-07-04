import { flexibleLayoutContainer, flexibleLayoutItem } from './flexibleLayout';

describe('flexibleLayoutContainer()', () => {
    test('it returns className for Flexible Box Layout container #1', () => {
        const expected = {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
            justifyItems: 'flex-end',
            alignItems: 'flex-end'
        };

        expect(
            flexibleLayoutContainer({
                direction: 'row',
                wrap: 'nowrap',
                justifyContent: 'flex-end',
                alignContent: 'flex-end',
                alignItems: 'flex-end',
                justifyItems: 'flex-end'
            })
        ).toMatchObject(expected);
    });

    test('it returns className for Flexible Box Layout container #2', () => {
        const expected = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
        };

        expect(
            flexibleLayoutContainer({
                direction: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
            })
        ).toMatchObject(expected);
    });
});

describe('flexibleLayoutItem()', () => {
    test('it returns className for Flexible Box Layout item #1', () => {
        const expected = {
            order: 1,
            flexGrow: 2,
            flexShrink: 3,
            flexBasis: 4,
            alignSelf: 'flex-start'
        };

        expect(
            flexibleLayoutItem({
                order: 1,
                grow: 2,
                shrink: 3,
                basis: 4,
                alignSelf: 'flex-start'
            })
        ).toMatchObject(expected);
    });

    test('it returns className for Flexible Box Layout item #2', () => {
        const expected = {
            flexGrow: 3,
            flexBasis: 8
        };

        expect(
            flexibleLayoutItem({
                grow: 3,
                basis: 8
            })
        ).toMatchObject(expected);
    });
});
