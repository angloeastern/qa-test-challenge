export enum PageViews {
  PV_10K = '10K',
  PV_50K = '50K',
  PV_100K = '100K',
  PV_500k = '500K',
  PV_1M = '1M'
}

const {
  VITE_PRICE_10K,
  VITE_PRICE_50K,
  VITE_PRICE_100K,
  VITE_PRICE_500k,
  VITE_PRICE_1M
} = import.meta.env;

export const priceMap = new Map<PageViews, number>([
  [PageViews.PV_10K, parseInt(VITE_PRICE_10K, 10)],
  [PageViews.PV_50K, parseInt(VITE_PRICE_50K, 10)],
  [PageViews.PV_100K, parseInt(VITE_PRICE_100K, 10)],
  [PageViews.PV_500k, parseInt(VITE_PRICE_500k, 10)],
  [PageViews.PV_1M, parseInt(VITE_PRICE_1M, 10)]
]);
