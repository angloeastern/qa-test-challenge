import styled from "styled-components";

const Container = styled.label.attrs({ 'aria-label': 'toggle' }) <{ $size: number }>`
  position: relative;
  display: inline-block;
  ${({ $size }) => `
    width: ${$size * 2}px;
    height: ${$size}px;
    --size: ${$size}px;
    --circle-size: ${$size * 0.63636363636}px;
    --margin: ${$size * 0.18181818181}px;
  `};
`;

const Input = styled.input.attrs({ 'aria-label': 'toggle-input' })`
  opacity: 0;
  width: 0;
  height: 0;

  &:hover + span {
    box-shadow: 0 0 1px ${({ theme }) => theme.slider.hover};
    background-color: ${({ theme }) => theme.slider.hover};
  }

  @media only screen and (max-width: 768px) {
    &:not(:active) + span {
      box-shadow: none;
      background-color: ${({ theme }) => theme.toggle.backGround};
    }
  }

  &:checked + span:before {
    -webkit-transform: translateX(var(--size));
    -ms-transform: translateX(var(--size));
    transform: translateX(var(--size));
  }
`;

const Slider = styled.span.attrs({ 'aria-label': 'toggle-slider' })`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.toggle.backGround};
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: var(--size);

  &:before {
    position: absolute;
    content: "";
    height: var(--circle-size);
    width: var(--circle-size);
    left: var(--margin);
    bottom: var(--margin);
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`;

const SC = {
  Container,
  Input,
  Slider
};

export default SC;