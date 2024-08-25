import { render } from '@test/renderers/withTheme';
import { useTheme } from 'styled-components';
import Provider from '.';
import theme from './theme';

describe('ThemeProvider', () => {
  it('should provide the theme to its children correctly', () => {
    const ChildComponent = () => {
      const theme = useTheme();
      return (
        <div>
          <span>{theme.cta.backGround}</span>
          <span>{theme.pricing.backGround}</span>
        </div>
      );
    };

    const { getByText } = render(
      <Provider>
        <ChildComponent />
      </Provider>
    );

    expect(getByText(theme.cta.backGround)).toBeInTheDocument();
    expect(getByText(theme.pricing.backGround)).toBeInTheDocument();
  });
});
