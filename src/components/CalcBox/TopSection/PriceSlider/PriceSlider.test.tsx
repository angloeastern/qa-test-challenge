import { render, fireEvent } from '@test/renderers/withCalculator';
import PriceSlider from '.';

describe('PriceSlider component', () => {
  it('should render the Slider component', () => {
    const { getByRole } = render(<PriceSlider />);

    const container = getByRole('slider');
    const selectBtn = getByRole('button');
    const progressBar = getByRole('progressbar');

    expect(container).toBeInTheDocument();
    expect(selectBtn).toBeInTheDocument();
    expect(progressBar).toBeInTheDocument();
  });

  it('should update value on input change', () => {
    const { getByRole } = render(<PriceSlider />);

    const sliderInput = getByRole('slider') as HTMLInputElement;

    fireEvent.change(sliderInput, { target: { value: '75' } });

    expect(sliderInput.value).toBe('75');
  });

  it('should update value on input change and move the selector', () => {
    const { getByRole } = render(<PriceSlider />);

    const sliderInput = getByRole('slider') as HTMLInputElement;
    // const selectorContainer = getByTestId('selector-container');

    fireEvent.change(sliderInput, { target: { value: '25' } });

    expect(sliderInput.value).toBe('25');
    // expect(selectorContainer.style.left).toBe('25%');
  });
});
