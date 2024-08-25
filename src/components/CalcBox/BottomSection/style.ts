import styled from 'styled-components';

const Container = styled.div.attrs({ 'aria-label': 'bottom-section' })`
  background: ${({ theme }) => theme.pricing.backGround};
  border-radius: 0 0 10px 10px;
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  gap: 31px;

  @media only screen and (min-width: 768px) {
    padding: 35px 40px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0;
  }
`;

const Section = styled.div`
  flex: none;

  @media only screen and (min-width: 768px) {
    flex: 1 1 50%;
  }
`;

const CtaSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 62px;

   @media only screen and (min-width: 768px) {
    padding: 0 0 0 88px;
  }
`;

const CtaBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SC = {
  Container,
  InnerBox,
  Section,
  CtaSection,
  CtaBox
};

export default SC;
