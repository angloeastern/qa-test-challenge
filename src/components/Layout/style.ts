import styled from "styled-components";
import backgroundImg from '@assets/bg-pattern.svg';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Background = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: auto;
  background-color: ${({ theme }) => theme.main.backGround};
  background-position-y: -50px;
  background-position-x: left;
 
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    background-position-y: top;
    background-position-x: center;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

const SC = {
  Container,
  Background,
  Content
}

export default SC;