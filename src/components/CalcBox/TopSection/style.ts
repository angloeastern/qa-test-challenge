import styled from 'styled-components';

const Container = styled.div.attrs({ 'aria-label': 'top-section' })`
  background: ${({ theme }) => theme.pricing.backGround};
  border-radius: 10px 10px 0 0;
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 12px;

  @media only screen and (min-width: 768px) {
    padding: 50px 40px 38px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const PageViews = styled.div`
  flex: 1;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.82em;
  letter-spacing: 2px;
  align-self: center;

  @media (min-width: 768px) {
    order: 1;
    flex: none;
    width: 50%;
    font-size: 0.9em;
    align-self: start;
    padding-top: 13px;
  }
`;

const Slider = styled.div`
  flex: 1;
  padding: 40px 15px;

  @media (min-width: 768px) {
    order: 3;
    flex: none;
    width: 100%;
    padding: 20px 0 8px 0;
  }
`;

const SC = {
  Container,
  InnerBox,
  PageViews,
  Slider
};

export default SC;
