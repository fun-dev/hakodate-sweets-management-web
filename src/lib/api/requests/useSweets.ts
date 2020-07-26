import useRequest from './useRequest';
import { Sweet } from '../models/Sweet';

type GetSweetsResponse = {
  sweets: Sweet[];
};

export function useSweets() {
  const { data, response, error, isValidating, revalidate, mutate } = useRequest<GetSweetsResponse, Error>({
    url: '/sweets',
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
