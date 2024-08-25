import { render } from '@test/renderers/withCalculator';
import CheckList from '.';

describe('CheckList component', () => {
  it('should render the CheckList component with all provided items', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const { getByText } = render(<CheckList items={items} />);

    items.forEach((item) => {
      const itemElement = getByText(item);
      expect(itemElement).toBeInTheDocument();
    });
  });
});
