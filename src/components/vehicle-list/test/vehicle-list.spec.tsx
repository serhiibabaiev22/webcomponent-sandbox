import { newSpecPage } from '@stencil/core/testing';
import { VehiclesList } from '../vehicle-list';

describe('vehicle-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VehiclesList],
      html: `<pokemon-list></pokemon-list>`,
    });
    expect(page.root).toEqualHtml(`
      <pokemon-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pokemon-list>
    `);
  });
});
