import { render, fireEvent } from '@test/renderers/withCalculator';
import DiscountToggle from '.';

describe('Toggle component', () => {
  it('should render the Toggle component', () => {
    const { getByLabelText } = render(<DiscountToggle />);

    const input = getByLabelText('toggle-input');
    const slider = getByLabelText('toggle-slider');

    expect(input).toBeInTheDocument();
    expect(slider).toBeInTheDocument();
  });

  it('should toggle when clicked', () => {
    const { getByLabelText } = render(<DiscountToggle />);

    const input = getByLabelText('toggle-input') as HTMLInputElement;

    fireEvent.click(input);

    expect(input.checked).toBe(true);
  });
});
