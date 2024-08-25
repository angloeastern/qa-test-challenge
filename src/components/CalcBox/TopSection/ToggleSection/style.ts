import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  padding-top: 25px;
  display: flex;
  justify-content: end;
  align-items: center;

  @media (min-width: 768px) {
    order: 4;
    flex: none;
    width: 100%;
    padding-top: 46px;
    padding-right: 14px;
  }
`;

const Text = styled.span`
  display: inline-flex;
  font-size: 0.82em;
  padding: 0;
`;

const LeftText = styled(Text)`
  padding-right: 12px;
`;

const RightText = styled(Text)`
  padding-left: 12px;
`;

const SC = {
  Container,
  LeftText,
  RightText
};

export default SC;
