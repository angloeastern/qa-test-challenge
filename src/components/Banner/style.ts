import styled from "styled-components";
import patternCircles from '@assets/pattern-circles.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  background-image: url(${patternCircles});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  height: 145px;
  justify-content: center;
`;

const Header = styled.h1`
  font-weight: 800;
  color: ${({ theme }) => theme.main.darkText};
  font-size: 1.3em;

  @media only screen and (min-width: 768px) {
    font-size: 1.82em;
  }
`;

const SubHeader = styled.h3`
  font-weight: 600;
  font-size: 0.9em;
  color: ${({ theme }) => theme.main.defaultText};
  width: 180px;
  text-align: center;
  line-height: 1.7em;

  @media only screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 1em;
    padding: 0;
    width: auto;
  }
`;

const SC = {
  Container,
  Header,
  SubHeader
};

export default SC;