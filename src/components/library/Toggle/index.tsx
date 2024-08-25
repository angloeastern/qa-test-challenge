import { useState } from 'react';
import SC from './style';

const Toggle: React.FC<{
  size: number;
  value?: boolean;
  onChange?: (b: boolean) => void;
}> = ({ size, value = false, onChange = () => null }) => {
  const [checked, setChecked] = useState(value);

  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange && onChange(newValue);
  };

  return (
    <SC.Container $size={size}>
      <SC.Input type="checkbox" checked={checked} onChange={handleChange} />
      <SC.Slider />
    </SC.Container>
  );
};

export default Toggle;
