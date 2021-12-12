import axios from '../axios';
import { Sweet } from '../models/Sweet';
import nookies from 'nookies';

type DeleteSweetPath = {
  id: Sweet['id'];
};

export async function deleteSweetRequest({ id }: DeleteSweetPath) {
  try {
    const cookies = nookies.get();

    return await axios.delete<null>(`/sweets/${id}`, {
      headers: {
        Authorization: `bearer ${cookies.token}`,
      },
    });
  } catch (e) {
    console.log('deleteSweetRequest error', e);
    return null;
  }
}
