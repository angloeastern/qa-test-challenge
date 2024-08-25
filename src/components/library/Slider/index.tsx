import { useState } from 'react';
import SC from './style';

const Slider: React.FC<{
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (v: number) => void;
}> = ({ min = 0, max = 100, step = 1, value = 0, onChange = () => null }) => {
  const [theValue, setTheValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(event.target.value);
    setTheValue(v);
    onChange && onChange(v);
  };

  return (
    <SC.Container>
      <SC.SliderInput
        type="range"
        min={min}
        max={max}
        step={step}
        value={theValue}
        onChange={handleInputChange}
      />
      <SC.SelectorContainer value={theValue}>
        <SC.SelectBtn role="button" />
      </SC.SelectorContainer>
      <SC.ProgressBar value={theValue} role="progressbar" />
    </SC.Container>
  );
};

export default Slider;
