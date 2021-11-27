import { AxiosResponse } from 'axios';
import axios from '../axios';
import { Sweet } from '../models/Sweet';
import nookies from 'nookies';
import { SmallCategory } from '../models/Category';
import { Shop } from '../models/Shop';

type PostSweetPath = {
  shopId: Shop['id'];
};

type PostSweetBody = {
  sweet: {
    name: Sweet['name'];
    price: Sweet['price'];
    description: Sweet['description'];
    from_rdf: Sweet['from_rdf'];
    small_category_ids: SmallCategory['id'][];
  };
};

type PostSweetResponse = {
  sweet: Sweet;
};

export async function createSweetRequest(
  { shopId }: PostSweetPath,
  body: PostSweetBody
): Promise<AxiosResponse<PostSweetResponse> | null> {
  try {
    const cookies = nookies.get();

    return await axios.post<PostSweetResponse>(`/shops/${shopId}/sweets`, body, {
      headers: {
        Authorization: `bearer ${cookies.token}`,
      },
    });
  } catch (e) {
    console.log('createSweetRequest error', e);
    return null;
  }
}
