import { AxiosResponse } from 'axios';
import { Sweet } from '../models/Sweet';
import nookies from 'nookies';
import axios from '../axios';

type UploadSweetImagePath = {
  id: Sweet['id'];
};

type UploadSweetImageSweetBody = {
  file: File;
};

type UploadSweetImageResponse = {
  sweet: Sweet;
};

export async function uploadSweetImage(
  { id }: UploadSweetImagePath,
  { file }: UploadSweetImageSweetBody
): Promise<AxiosResponse<UploadSweetImageResponse> | null> {
  try {
    const cookies = nookies.get();
    const formData = createUploadSweetImageFormData(file);

    return await axios.post<UploadSweetImageResponse>(`/sweets/${id}/upload`, formData, {
      headers: {
        Authorization: `bearer ${cookies.token}`,
      },
    });
  } catch (e) {
    console.log('uploadSweetImage error', e);
    return null;
  }
}

function createUploadSweetImageFormData(file: File) {
  const formData = new FormData();
  formData.append('imagePath', file);

  return formData;
}
