import styled from "styled-components";
import checkIcon from '@assets/icon-check.svg';

const Container = styled.li`
  display: flex;
  gap: 15px;
`;

const Check = styled.div.attrs({ 'role': 'img' })`
  flexx: 1 0 10px;
  align-self: center;
  width: 10px;
  height: 10px;
  background-image: url(${checkIcon});
  background-position: center;
  background-repeat: no-repeat;
`;

const Label = styled.div`
  flex: 1 1;
  font-size: 0.82em;
`;

const SC = {
  Container,
  Check,
  Label
};

export default SC;