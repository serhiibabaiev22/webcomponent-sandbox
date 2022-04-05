import { newE2EPage } from '@stencil/core/testing';

describe('list-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<list-pagination></list-pagination>');

    const element = await page.find('list-pagination');
    expect(element).toHaveClass('show');
  });
});
