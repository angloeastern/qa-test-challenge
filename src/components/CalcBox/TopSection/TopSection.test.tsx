import { render } from '@test/renderers/withCalculator';
import { vi } from 'vitest';
import TopSection from '.';

vi.mock('@context/Calculator', async () => ({
  ...vi.importActual('@context/Calculator'),
  CalculatorProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  useCalculator: () => ({
    pageView: '100K',
    setPageView: vi.fn(),
    setDollarPrice: vi.fn(),
  }),
}));

describe('TopSection component', () => {
  it('should render the TopSection component correctly', () => {
    const { getByText } = render(<TopSection />);

    expect(getByText('100K PageViews')).toBeInTheDocument();
  });
});
