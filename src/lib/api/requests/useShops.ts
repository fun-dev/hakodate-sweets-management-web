import useRequest from './useRequest';
import { Shop } from '../models/Shop';

type GetShopsResponse = {
  shops: Shop[];
};

export function useShops() {
  const { data, response, error, isValidating, revalidate, mutate } = useRequest<GetShopsResponse, Error>({
    url: '/shops',
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
