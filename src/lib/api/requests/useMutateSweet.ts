import { createSweetRequest } from './createSweetRequest';
import { deleteSweetRequest } from './deleteSweetRequest';
import { uploadSweetImage } from './uploadSweetImage';
import { useSweets } from './useSweets';

type CreateSweetParams = {
  shopId: number;
  name: string;
  price: string;
  description: string;
  small_category_ids: number[];
  productImageFile: File | null;
};

type DeleteSweetParams = {
  id: number;
};

export function useMutateSweet() {
  const { mutate } = useSweets();
  const createSweet = async ({
    shopId,
    name,
    price,
    description,
    small_category_ids,
    productImageFile,
  }: CreateSweetParams) => {
    try {
      const response = await createSweetRequest(
        { shopId },
        {
          sweet: {
            name,
            price,
            description,
            from_rdf: false,
            small_category_ids,
          },
        }
      );

      if (response.status === 200) {
        const createdSweet = response.data?.sweet;
        if (createdSweet?.id && productImageFile) {
          const response = await uploadSweetImage({ id: createdSweet.id }, { file: productImageFile });
          if (response.status === 200) {
            return { sweet: response.data.sweet, status: 200 } as const;
          }
        }
        return { sweet: createdSweet, status: 200 } as const;
      }
      return { status: response.status } as const;
    } catch (e) {
      return { error: new Error(e) } as const;
    }
  };

  const deleteSweet = async ({ id }: DeleteSweetParams) => {
    try {
      const response = await deleteSweetRequest({ id });
      if (response.status === 204) {
        mutate((data) => {
          const deletedIndex = data.sweets.findIndex((sweet) => sweet.id === id);
          return {
            ...data,
            sweets: [...data.sweets.slice(0, deletedIndex), ...data.sweets.slice(deletedIndex + 1)],
          };
        });
      }
      return { status: response.status } as const;
    } catch (e) {
      return { error: new Error(e) } as const;
    }
  };

  return {
    createSweet,
    deleteSweet,
  };
}
