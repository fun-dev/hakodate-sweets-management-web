import { SmallCategory } from '../models/SmallCategory';
import useRequest from './useRequest';

type GetSmallCategoriesResponse = {
  small_categories: SmallCategory[];
};

export function useCategories() {
  const { data, response, error, isValidating, revalidate, mutate } = useRequest<GetSmallCategoriesResponse, Error>({
    url: '/small_categories',
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
