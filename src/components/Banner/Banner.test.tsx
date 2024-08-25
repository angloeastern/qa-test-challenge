import { render } from '@test/renderers/withTheme';
import Banner from '.';

describe('Banner component', () => {
  test('renders header and subheader correctly', () => {
    const headerText = 'Simple, traffic-based pricing';
    const subHeaderText =
      'Sign-up for our 30-day trial. No credit card required.';

    const { getByRole } = render(<Banner />);

    const headerElement = getByRole('heading', { name: headerText });
    const subHeaderElement = getByRole('heading', { name: subHeaderText });

    expect(headerElement).toBeInTheDocument();
    expect(subHeaderElement).toBeInTheDocument();

    expect(headerElement).toHaveTextContent(headerText);
    expect(subHeaderElement).toHaveTextContent(subHeaderText);
  });
});
