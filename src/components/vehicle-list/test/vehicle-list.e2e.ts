import { newE2EPage } from '@stencil/core/testing';

describe('vehicle-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vehicle-list></vehicle-list>');

    const element = await page.find('vehicle-list');
    expect(element).toHaveClass('show');
  });
});
