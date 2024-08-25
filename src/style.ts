import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width:  100%;
  padding: 60px 20px;
  align-items: center;
  gap: 28px;

  @media (min-width: 768px) {
    padding: 70px 20px;
    gap: 50px;
  }
`;

const SC = {
  Container
};

export default SC;