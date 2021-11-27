import { Sweet } from '../models/Sweet';
import { createSweetRequest } from './createSweetRequest';
import { uploadSweetImage } from './uploadSweetImage';

type CreateSweetParams = {
  shopId: number;
  name: string;
  price: string;
  description: string;
  small_category_ids: number[];
  productImageFile: File | null;
};

export function useMutateSweet() {
  const createSweet = async ({
    shopId,
    name,
    price,
    description,
    small_category_ids,
    productImageFile,
  }: CreateSweetParams): Promise<Sweet | null> => {
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

      const createdSweet = response.data?.sweet;
      if (response.status === 200 && createdSweet?.id && productImageFile) {
        const response = await uploadSweetImage({ id: createdSweet.id }, { file: productImageFile });
        return response.data.sweet;
      }
      return createdSweet;
    } catch (e) {
      throw new Error(e);
    }
  };

  return {
    createSweet,
  };
}
