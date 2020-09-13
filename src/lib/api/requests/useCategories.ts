import { useMemo } from 'react';
import { SmallCategory, LargeCategoryId } from '../models/Category';
import useRequest from './useRequest';

type GetSmallCategoriesResponse = {
  small_categories: SmallCategory[];
};

export function useCategories() {
  const { data, error, isValidating, revalidate, mutate } = useRequest<GetSmallCategoriesResponse, Error>(
    {
      url: '/small_categories',
    },
    {
      dedupingInterval: 360000, // 何回も /smallcategories のリクエストが発生したときに実際にリクエストする間隔．ここでは1時間おきにしている．
    }
  );

  const japanese =
    useMemo(
      () => data?.small_categories.filter((category) => category.large_category_id === LargeCategoryId.JAPANESE),
      [data?.small_categories]
    ) ?? [];
  const western =
    useMemo(() => data?.small_categories.filter((category) => category.large_category_id === LargeCategoryId.WESTERN), [
      data?.small_categories,
    ]) ?? [];
  const other =
    useMemo(() => data?.small_categories.filter((category) => category.large_category_id === LargeCategoryId.OTHER), [
      data?.small_categories,
    ]) ?? [];

  return {
    data,
    classifiedCategories: {
      japanese,
      western,
      other,
    },
    error,
    isValidating,
    revalidate,
    mutate,
  };
}
