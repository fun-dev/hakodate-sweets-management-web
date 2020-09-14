import { AxiosResponse } from 'axios';
import axios from '../axios';
import { Sweet } from '../models/Sweet';
import nookies from 'nookies';
import { SmallCategory } from '../models/Category';

type PutSweetPath = {
  id: Sweet['id'];
};

type PutSweetBody = {
  sweet: {
    small_category_ids: SmallCategory['id'][];
  };
};

type PutSweetResponse = {
  sweet: Sweet;
};

export async function updateSweetRequest(
  { id }: PutSweetPath,
  body: PutSweetBody
): Promise<AxiosResponse<PutSweetResponse> | null> {
  try {
    const cookies = nookies.get();

    return await axios.put<PutSweetResponse>(`/sweets/${id}`, body, {
      headers: {
        Authorization: `bearer ${cookies.token}`,
      },
    });
  } catch (e) {
    console.log('updateSweetRequest error', e);
    return null;
  }
}
