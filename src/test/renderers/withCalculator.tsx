import { render } from '@testing-library/react';
import { Provider as ThemeProvider } from '@context/Theme';
import { CalculatorProvider } from '@context/Calculator';

const Providers: React.FC<{ children: any }> = ({ children }) => {
  return (
    <ThemeProvider>
      <CalculatorProvider>{children}</CalculatorProvider>
    </ThemeProvider>
  );
};

export const renderWithContext = (ui: any, options?: any) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { renderWithContext as render };
