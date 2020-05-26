import axios from '../axios';
import { Sweet } from '../models/Sweet';

export async function getSweetsRequest() {
  try {
    return (await axios.get<Array<any>>('/sweets')).data;
  } catch (e) {
    console.log(JSON.stringify(e, null, 2));
    throw new Error(e);
  }
}
