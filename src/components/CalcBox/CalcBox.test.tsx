import { render } from '@test/renderers/withCalculator';
import CalcBox from '.';

describe('CalcBox component', () => {
  it('should render the CalcBox component correctly', () => {
    const { getByLabelText } = render(<CalcBox />);

    expect(getByLabelText('top-section')).toBeInTheDocument();
    expect(getByLabelText('bottom-section')).toBeInTheDocument();
  });
});
