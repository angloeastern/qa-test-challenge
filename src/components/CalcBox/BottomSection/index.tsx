import Button from '@library/Button';
import CheckList from '@library/CheckList';
import SC from './style';

const BottomSection: React.FC = () => {
  return (
    <SC.Container>
      <SC.InnerBox>
        <SC.Section>
          <CheckList
            items={[
              'Unlimited websites',
              '100% data ownership',
              'Email reports',
            ]}
          />
        </SC.Section>
        <SC.CtaSection>
          <SC.CtaBox>
            <Button>Start my trial</Button>
          </SC.CtaBox>
        </SC.CtaSection>
      </SC.InnerBox>
    </SC.Container>
  );
};

export default BottomSection;
