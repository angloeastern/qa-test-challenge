import { ThemeProvider } from 'styled-components';
import theme from './theme';

export const Provider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
