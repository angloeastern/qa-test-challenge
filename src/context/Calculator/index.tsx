import { createContext, useState, useContext, FC, useEffect } from 'react';
import { priceMap, PageViews } from './types';

interface CalculatorContextType {
  pageView: PageViews;
  setPageView: React.Dispatch<React.SetStateAction<PageViews>>;
  dollarPrice: number;
  setDollarPrice: React.Dispatch<React.SetStateAction<number>>;
  conversionRate: number | null;
  setConversionRate: React.Dispatch<React.SetStateAction<number | null>>;
  haveDiscount: boolean;
  setHaveDiscount: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(
  undefined
);

export const CalculatorProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pageView, setPageView] = useState<PageViews>(PageViews.PV_100K);
  const initialDollarPrice = priceMap.get(PageViews.PV_100K) || 0;
  const [dollarPrice, setDollarPrice] = useState<number>(initialDollarPrice);
  const [conversionRate, setConversionRate] = useState<number | null>(null);
  const [haveDiscount, setHaveDiscount] = useState(false);

  const contextValue: CalculatorContextType = {
    pageView,
    setPageView,
    dollarPrice,
    setDollarPrice,
    conversionRate,
    setConversionRate,
    haveDiscount,
    setHaveDiscount,
  };

  useEffect(() => {
    let isMounted = true;
    const { VITE_COINGECKO_API_URL } = import.meta.env;

    fetch(VITE_COINGECKO_API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          const usdToBTC = data['bitcoin'].usd;
          setConversionRate(usdToBTC);
        }
      })
      .catch((error) => {
        console.error('Error fetching conversion rate:', error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <CalculatorContext.Provider value={contextValue}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = (): CalculatorContextType => {
  const context = useContext(CalculatorContext);

  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }

  return context;
};
