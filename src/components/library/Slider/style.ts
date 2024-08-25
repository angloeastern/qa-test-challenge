import styled from 'styled-components';
import sliderIcon from '@assets/icon-slider.svg';

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const SliderInput = styled.input`
  appearance: none;
  width: 100%;
  height: 7px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.slider.emptyBar};

  &::-webkit-slider-thumb {
    appearance: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: relative;
    z-index: 3;

    &:active {
      cursor: grabbing;
    }
  }

  &:hover:not(:active) + div > div {
    background-color: ${({ theme }) => theme.slider.hover};
  }

  &:active {
    cursor: grabbing;

    & + div > div {
      background-color: ${({ theme }) => theme.slider.active};
    }
  }
`;

const SelectBtn = styled.div`
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.slider.backGround};
  background-image: url(${sliderIcon});
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  box-shadow: 0px 20px 30px ${({ theme }) => theme.slider.shadow};
`;

const SelectorContainer = styled.div<{ value: number }>`
  height: 40px;
  width: 40px;
  position: absolute;
  bottom: -12px;
  left: ${({ value }) => `${value}%`};
  transform: translateX(-50%);
  z-index: 2;
`;

const ProgressBar = styled.div<{ value: number }>`
  width: ${({ value }) => `${value}%`};
  height: 7px;
  background: ${({ theme }) => theme.slider.fullBar};
  border-radius: 3px;
  position: absolute;
  bottom: 4px;
  left: 0;
`;

const SC = {
  Container,
  SliderInput,
  SelectBtn,
  SelectorContainer,
  ProgressBar
}

export default SC;
