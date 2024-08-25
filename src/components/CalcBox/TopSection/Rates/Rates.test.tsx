import { render } from '@test/renderers/withCalculator';
import Rates from '.';
import { vi } from 'vitest';

describe('Rates component', () => {
  it('should render the dollar amount correctly', () => {
    vi.mock('@context/Calculator', async () => ({
      ...vi.importActual('@context/Calculator'),
      CalculatorProvider: ({ children }: { children: React.ReactNode }) => (
        <div>{children}</div>
      ),
      useCalculator: () => ({
        dollarPrice: 10,
        conversionRate: 0.1,
      }),
    }));

    const { getByText } = render(<Rates />);

    expect(getByText('$10.00')).toBeInTheDocument(); //
  });

  it('should render the Bitcoin amount correctly', () => {
    vi.mock('@context/Calculator', async () => ({
      ...vi.importActual('@context/Calculator'),
      CalculatorProvider: ({ children }: { children: React.ReactNode }) => (
        <div>{children}</div>
      ),
      useCalculator: () => ({
        dollarPrice: 10,
        conversionRate: 0.1,
      }),
    }));

    const { getByText } = render(<Rates />);
    const btcTextRegex = new RegExp('~\\s*100\\s*BTC', 'i');

    expect(getByText(btcTextRegex)).toBeInTheDocument();
  });
});
