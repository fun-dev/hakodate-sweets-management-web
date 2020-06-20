import axios from '../axios';
import { Shop } from '../models/Shop';

export type GetShopRequestParams = {
  id: number;
};

export async function getShopRequest({ id }: GetShopRequestParams) {
  try {
    return (await axios.get<Shop>(`/shops/${id}`)).data;
  } catch (e) {
    throw new Error(e);
  }
}
