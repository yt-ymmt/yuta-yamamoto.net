import { gridLayoutContainer, gridLayoutItem } from './gridLayout';

describe('gridLayoutContainer()', () => {
  test('it returns className for CSS Grid Layout container', () => {
    const expected = {
      display: 'grid',
      gridTemplateColumns: '30% 40% 30%',
      gridTemplateRows: '50% 1fr 2fr',
      gridTemplateAreas: '"areaA areaA areaB" "areaA areaA areaB" "areaC areaD areaB"',
    };

    expect(
      gridLayoutContainer({
        columns: ['30%', '40%', '30%'],
        rows: ['50%', '1fr', '2fr'],
        areas: [
          // -------------------------
          // |     areaA     |       |
          // |               | areaB |
          // |---------------|       |
          // | areaC | areaD |       |
          // -------------------------
          ['areaA', 'areaA', 'areaB'],
          ['areaA', 'areaA', 'areaB'],
          ['areaC', 'areaD', 'areaB'],
        ],
      }),
    ).toMatchObject(expected);
  });
});

describe('gridLayoutItem()', () => {
  test('it returns className for CSS Grid Layout item', () => {
    const expected = {
      gridArea: 'areaName',
    };

    expect(gridLayoutItem('areaName')).toMatchObject(expected);
  });
});
