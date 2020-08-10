import useRequest from './useRequest';
import { Shop } from '../models/Shop';

export type GetShopParams = {
  id: number;
};

type GetShopResponse = {
  shops: Shop;
};

export function useShop({ id }: GetShopParams) {
  const { data, response, error, isValidating, revalidate, mutate } = useRequest<GetShopResponse, Error>({
    url: `/shops/${id}`,
  });

  return {
    data,
    response,
    error,
    isValidating,
    revalidate,
    mutate,
  };
}
