import styled from "styled-components";

const Container = styled.div.attrs({ 'aria-label': 'discount' })`
  background: ${({ theme }) => theme.discount.backGround};
  color: ${({ theme }) => theme.discount.text};
  padding: 4px 8px;
  font-size: 0.65em;
  font-weight: 800;
  border-radius: 20px;
  margin-left: 5px;
`;

const MobileText = styled.span`
  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopText = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: inline;
  }
`;

const SC = {
  Container,
  MobileText,
  DesktopText
};

export default SC;