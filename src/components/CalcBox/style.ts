import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.main.backGround};
  gap: 3px;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.12);
  width: 100%;

  @media only screen and (min-width: 768px) {
    max-width: 600px;
  }
`;

const SC = {
  Container
};

export default SC;