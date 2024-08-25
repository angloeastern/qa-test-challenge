import { useEffect, useState } from 'react';
import { useCalculator } from '@context/Calculator';
import { priceMap, PageViews } from '@context/Calculator/types';
import Slider from '@library/Slider';

const PriceSlider: React.FC = () => {
  const { haveDiscount, setPageView, setDollarPrice } = useCalculator();
  const [value, setValue] = useState(50);

  const handleInputChange = (v: number) => {
    setValue(Math.round(v / 25));
  };

  const valueToPageView = () => {
    const pageViewsLookup: Record<number, PageViews> = {
      0: PageViews.PV_10K,
      1: PageViews.PV_50K,
      2: PageViews.PV_100K,
      3: PageViews.PV_500k,
      4: PageViews.PV_1M,
    };

    return pageViewsLookup[value];
  };

  useEffect(() => {
    const { VITE_YEARLY_DISCOUNT } = import.meta.env;
    const pv = valueToPageView() || PageViews.PV_100K;
    setPageView(pv);
    const price = priceMap.get(pv);
    if (price)
      setDollarPrice(
        haveDiscount
          ? price * (1 - parseInt(VITE_YEARLY_DISCOUNT, 10) / 100)
          : price
      );
  }, [value, haveDiscount]);

  return (
    <Slider
      min={0}
      max={100}
      step={25}
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default PriceSlider;
