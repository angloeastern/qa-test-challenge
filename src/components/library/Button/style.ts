import styled from "styled-components";

const Container = styled.button`
  display: inline-block;
  padding: 12px;
  background-color: ${({ theme }) => theme.cta.backGround};
  color: ${({ theme }) => theme.cta.text};
  font-weight: 800;
  font-size: 0.8em;
  border-radius: 25px;
  width: 100%;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    &:hover {
      color: ${({ theme }) => theme.main.backGround};
    }
  }
`;

const SC = {
  Container
};

export default SC;