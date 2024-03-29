import useRequest from './useRequest';
import { Coupon } from '../models/Coupon';

type GetCouponsResponse = {
  coupons: Coupon[];
};

export function useCoupons() {
  const { data, error, isValidating, revalidate, mutate } = useRequest<GetCouponsResponse, Error>({
    url: '/coupons',
  });

  return {
    data,
    error,
    isValidating,
    revalidate,
    mutate,
  };
}
