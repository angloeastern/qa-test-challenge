import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  @media only screen and (min-width: 768px) {
    align-items: start;
  }
`;

const SC = {
  Container
};

export default SC;