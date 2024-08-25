import { render } from '@test/renderers/withCalculator';
import BottomSection from '.';

describe('BottomSection component', () => {
  it('should render the BottomSection component with CheckList and Button components', () => {
    const { getByText } = render(<BottomSection />);

    const checkListItem1 = getByText('Unlimited websites');
    const checkListItem2 = getByText('100% data ownership');
    const checkListItem3 = getByText('Email reports');
    const button = getByText('Start my trial');

    expect(checkListItem1).toBeInTheDocument();
    expect(checkListItem2).toBeInTheDocument();
    expect(checkListItem3).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
