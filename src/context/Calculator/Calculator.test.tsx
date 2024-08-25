import { render, act, screen, waitFor } from '@test/renderers/withCalculator';
import { useCalculator } from '.';
import { PageViews } from './types';

(window as any).fetch = () =>
  Promise.resolve({
    json: () => Promise.resolve({ 'crypto-com-chain': { usd: 0.1 } }),
  });

describe('CalculatorProvider', () => {
  it('should provide the correct initial context values', async () => {
    await act(async () => {
      render(<TestComponent />);
    });

    function TestComponent() {
      const contextValue = useCalculator();

      expect(contextValue.pageView).toBe(PageViews.PV_100K);
      expect(contextValue.dollarPrice).toBe(16);
      expect(contextValue.haveDiscount).toBeFalsy();

      waitFor(() => {
        expect(contextValue.conversionRate).toBeNull();
      });

      return null;
    }
  });

  it('should set the pageView state correctly', async () => {
    const TestComponent = () => {
      const { pageView } = useCalculator();
      return <div>{pageView}</div>;
    };

    act(() => {
      render(<TestComponent />);
    });

    expect(await screen.findByText('100K')).toBeInTheDocument();
  });
});
