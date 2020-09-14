import useSWR, { ConfigInterface, responseInterface } from 'swr';
import { AxiosRequestConfig, AxiosError } from 'axios';
import axios from '../axios';

export type GetRequest = AxiosRequestConfig | null;

interface Return<Data, Error>
  extends Pick<responseInterface<Data, AxiosError<Error>>, 'isValidating' | 'revalidate' | 'error' | 'mutate'> {
  data: Data | undefined;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<ConfigInterface<Data, AxiosError<Error>>, 'initialData'> {
  initialData?: Data;
}

export default function useRequest<Data = unknown, Error = unknown>(
  request: GetRequest,
  { initialData, ...config }: Config<Data, Error> = {}
): Return<Data, Error> {
  const { data, error, isValidating, revalidate, mutate } = useSWR<Data, AxiosError<Error>>(
    request.url,
    async () => await (await axios(request)).data,
    {
      ...config,
      refreshWhenHidden: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      errorRetryCount: 2,
      initialData,
    }
  );

  return {
    data,
    error,
    isValidating,
    revalidate,
    mutate,
  };
}
