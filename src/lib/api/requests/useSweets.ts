import useRequest from './useRequest';
import { Sweet } from '../models/Sweet';

type GetSweetsResponse = {
  sweets: Sweet[];
};

export function useSweets() {
  const { data, error, isValidating, revalidate, mutate } = useRequest<GetSweetsResponse, Error>({
    url: '/sweets',
  });

  return {
    data,
    error,
    isValidating,
    revalidate,
    mutate,
  };
}
