import axios from '../axios';
import { Shop } from '../models/Shop';

export async function getShopsRequest() {
  try {
    return (await axios.get<Array<Shop>>('/shops')).data;
  } catch (e) {
    throw new Error(e);
  }
}
