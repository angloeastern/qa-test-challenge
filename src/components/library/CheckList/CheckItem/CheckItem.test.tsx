import { render } from '@test/renderers/withCalculator';
import CheckItem from '.';

describe('CheckItem component', () => {
  it('should render the CheckItem component with the provided label', () => {
    const labelText = 'Check this item';
    const { getByText } = render(<CheckItem>{labelText}</CheckItem>);
    const labelElement = getByText(labelText);

    expect(labelElement).toBeInTheDocument();
  });

  it('should render the check icon', () => {
    const { container } = render(<CheckItem>Item</CheckItem>);
    const checkIcon = container.querySelector('div[role="img"]');

    expect(checkIcon).toBeInTheDocument();
    expect(checkIcon).toHaveStyle('width: 10px');
    expect(checkIcon).toHaveStyle('height: 10px');
  });
});
