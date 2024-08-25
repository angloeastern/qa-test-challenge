import SC from './style';

const Banner: React.FC = () => {
  return (
    <SC.Container>
      <SC.Header>Simple, traffic-based pricing</SC.Header>
      <SC.SubHeader>
        Sign-up for our 30-day trial. No credit card required.
      </SC.SubHeader>
    </SC.Container>
  );
};

export default Banner;
