import { render } from '@test/renderers/withTheme';
import Layout from '.';

describe('App component', () => {
  it('renders its children', () => {
    const children = (
      <div data-testid="test-child">
        <p>Test Child Content</p>
      </div>
    );

    const { getByTestId } = render(<Layout>{children}</Layout>);

    expect(getByTestId('test-child')).toBeInTheDocument();
    expect(getByTestId('test-child')).toHaveTextContent('Test Child Content');
  });
});
