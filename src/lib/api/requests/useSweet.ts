import useRequest from './useRequest';
import { Sweet } from '../models/Sweet';

export type GetSweetParams = {
  id: number;
};

type GetSweetResponse = {
  sweet: Sweet;
};

export function useSweet({ id }: GetSweetParams) {
  const { data, response, error, isValidating, revalidate, mutate } = useRequest<GetSweetResponse, Error>({
    url: '/sweet',
    params: {
      id,
    },
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
