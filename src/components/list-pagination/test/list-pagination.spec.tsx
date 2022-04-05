import { newSpecPage } from '@stencil/core/testing';
import { ListPagination } from '../list-pagination';

describe('list-pagination', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ListPagination],
      html: `<list-pagination></list-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <list-pagination>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </list-pagination>
    `);
  });
});
