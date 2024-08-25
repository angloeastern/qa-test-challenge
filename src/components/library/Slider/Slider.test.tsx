import { render, fireEvent } from '@test/renderers/withTheme';
import { vi } from 'vitest';
import Slider from '.';

describe('Slider component', () => {
  it('should render the Slider component correctly', () => {
    const { container } = render(<Slider />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should call the onChange handler when the slider value changes', () => {
    const onChangeMock = vi.fn();
    const { getByRole } = render(<Slider onChange={onChangeMock} />);
    const slider = getByRole('slider');

    fireEvent.change(slider, { target: { value: '75' } });

    expect(onChangeMock).toHaveBeenCalledWith(75);
  });

  it('should update the slider value when dragged', () => {
    const { getByRole } = render(<Slider />);
    const slider = getByRole('slider');

    fireEvent.change(slider, { target: { value: '100' } });

    expect(slider).toHaveValue('100'); // Assert that the slider value has been updated
  });

  it('should render the slider with custom min, max, step, and value', () => {
    const { getByRole } = render(
      <Slider min={0} max={200} step={10} value={100} />
    );
    const slider = getByRole('slider');

    expect(slider).toHaveAttribute('min', '0');
    expect(slider).toHaveAttribute('max', '200');
    expect(slider).toHaveAttribute('step', '10');
    expect(slider).toHaveAttribute('value', '100');
  });

  it('should update the slider value within custom min and max range', () => {
    const { getByRole } = render(<Slider min={0} max={200} />);
    const slider = getByRole('slider');

    fireEvent.change(slider, { target: { value: '150' } });

    expect(slider).toHaveValue('150');
  });
});
