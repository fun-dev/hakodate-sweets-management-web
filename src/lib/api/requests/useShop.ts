import useRequest from './useRequest';
import { Shop } from '../models/Shop';

export type GetShopParams = {
  id: number;
};

type GetShopResponse = {
  shop: Shop;
};

export function useShop({ id }: GetShopParams) {
  const { data, error, isValidating, revalidate, mutate } = useRequest<GetShopResponse, Error>({
    url: `/shops/${id}`,
  });

  return {
    data,
    error,
    isValidating,
    revalidate,
    mutate,
  };
}
