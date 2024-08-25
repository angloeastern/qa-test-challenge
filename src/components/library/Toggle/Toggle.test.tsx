import { render, fireEvent } from '@test/renderers/withCalculator';
import Toggle from '.';

describe('Toggle component', () => {
  it('should render the Toggle component correctly', () => {
    const { getByRole, getByLabelText } = render(<Toggle size={40} />);
    const toggle = getByRole('checkbox');
    const slider = getByLabelText('toggle-slider');

    expect(toggle).toBeInTheDocument();
    expect(slider).toBeInTheDocument();
  });

  it('should toggle the state when clicked', () => {
    const { getByRole } = render(<Toggle size={40} />);
    const toggle = getByRole('checkbox');

    fireEvent.click(toggle);

    expect(toggle).toBeChecked();

    fireEvent.click(toggle);

    expect(toggle).not.toBeChecked();
  });

  it('should call the onChange callback with the new value when clicked', () => {
    const handleChange = vi.fn();
    const { getByRole } = render(<Toggle size={40} onChange={handleChange} />);
    const toggle = getByRole('checkbox');

    fireEvent.click(toggle);

    expect(handleChange).toHaveBeenCalledWith(true);

    fireEvent.click(toggle);

    expect(handleChange).toHaveBeenCalledWith(false);
  });
});
