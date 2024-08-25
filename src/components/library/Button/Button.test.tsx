import { render, fireEvent } from '@test/renderers/withTheme';
import { vi } from 'vitest';
import Button from '.';

describe('Button component', () => {
  it('should render the Button component with the provided label', () => {
    const labelText = 'Click me';
    const { getByRole } = render(<Button>{labelText}</Button>);
    const button = getByRole('button', { name: labelText, hidden: true });

    expect(button).toBeInTheDocument();
  });

  it('should call the onClick handler when clicked', () => {
    const onClickMock = vi.fn();
    const labelText = 'Click me';
    const { getByRole } = render(
      <Button onClick={onClickMock}>{labelText}</Button>
    );
    const button = getByRole('button', { name: labelText, hidden: true });

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('should have hover effect when hovered over', () => {
    (globalThis as any).innerWidth = 375;
    globalThis.dispatchEvent(new Event('resize'));

    setTimeout(() => {
      const labelText = 'Click me';
      const { getByRole } = render(<Button>{labelText}</Button>);
      const button = getByRole('button', { name: labelText, hidden: true });

      fireEvent.mouseEnter(button);

      expect(button).toHaveStyle('color: hsl(230, 100%, 99%)');
    }, 100);
  }, 5000);
});
