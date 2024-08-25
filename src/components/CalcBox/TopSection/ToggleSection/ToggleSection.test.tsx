import { render } from '@test/renderers/withCalculator';
import ToggleSection from '.';

describe('ToggleSection component', () => {
  it('should render the ToggleSection component with monthly and yearly billing options', () => {
    const { getByText, getByLabelText } = render(<ToggleSection />);

    const monthlyBillingText = getByText('Monthly Billing');
    const yearlyBillingText = getByText('Yearly Billing');
    const toggleComponent = getByLabelText('toggle');
    const discountComponent = getByLabelText('discount');

    expect(monthlyBillingText).toBeInTheDocument();
    expect(yearlyBillingText).toBeInTheDocument();
    expect(toggleComponent).toBeInTheDocument();
    expect(discountComponent).toBeInTheDocument();
  });
});
