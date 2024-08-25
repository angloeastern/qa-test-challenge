import { render } from '@testing-library/react';
import { Provider } from '@context/Theme';

const Providers: React.FC<{ children: any }> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export const renderWithContext = (ui: any, options?: any) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { renderWithContext as render };
