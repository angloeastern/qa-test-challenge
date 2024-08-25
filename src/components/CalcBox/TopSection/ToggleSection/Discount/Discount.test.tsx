import { render } from '@test/renderers/withCalculator';
import { vi } from 'vitest';
import Discount from '.';

describe('Discount component', () => {
  beforeEach(() => {
    (window as any).matchMedia = vi.fn().mockImplementation((query: string) => {
      return {
        matches: query === '(min-width: 768px)',
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      };
    });
  });

  it('should render the Discount component with mobile and desktop text', () => {
    const { getByText } = render(<Discount />);

    const container = getByText('25%');
    const mobileText = getByText('-');
    const desktopText = getByText('discount');

    expect(container).toBeInTheDocument();
    expect(mobileText).toBeInTheDocument();
    expect(desktopText).toBeInTheDocument();
  });

  it('should display only mobile text on mobile view', () => {
    // Simulate mobile view
    (globalThis as any).innerWidth = 375;
    globalThis.dispatchEvent(new Event('resize'));

    setTimeout(() => {
      const { getByText, queryByText } = render(<Discount />);
      const container = getByText('25%');
      const mobileText = getByText('-');
      const desktopText = queryByText('discount');

      expect(container).toBeInTheDocument();
      expect(mobileText).toBeInTheDocument();
      expect(desktopText).not.toBeInTheDocument();
    }, 100); // Wait for 100ms after the resize event
  }, 5000); // Timeout set to 5 seconds

  it('should display only desktop text on desktop view', () => {
    // Simulate desktop view
    (globalThis as any).innerWidth = 768;
    globalThis.dispatchEvent(new Event('resize'));

    setTimeout(() => {
      const { queryByText } = render(<Discount />);
      const mobileText = queryByText('-');
      const desktopText = queryByText('discount');

      expect(mobileText).not.toBeInTheDocument();
      expect(desktopText).toBeInTheDocument();
    }, 100); // Wait for 100ms after the resize event
  }, 5000); // Timeout set to 5 seconds
});
