import type { AxiosRequestConfig, AxiosResponse } from "axios";

import type { Result } from "ts-results-es";
import type { Schema } from "yup";
import { HttpError } from "./HttpError";

export type ApiResult<T, E = unknown> = Result<AxiosResponse<T>, HttpError<E>>;

export type HttpConfig<T = unknown, D = unknown> = AxiosRequestConfig<D> & {
  responseBodySchema?: Schema<T>;
};

export interface HttpClient {

  get<T = unknown, E = unknown>(
    url: string,
    config?: HttpConfig<T>
  ): Promise<ApiResult<T, E>>;

  delete<T = unknown, E = unknown>(
    url: string,
    config?: HttpConfig<T>
  ): Promise<ApiResult<T, E>>;

  head<T = any, E = unknown>(
    url: string,
    config?: HttpConfig<T>
  ): Promise<ApiResult<T, E>>;

  options<T = any, E = unknown>(
    url: string,
    config?: HttpConfig<T>
  ): Promise<ApiResult<T, E>>;

  post<T = any, D = any, E = unknown>(
    url: string,
    data?: D,
    config?: HttpConfig<T, D>
  ): Promise<ApiResult<T, E>>;

  put<T = any, D = any, E = unknown>(
    url: string,
    data?: D,
    config?: HttpConfig<T, D>
  ): Promise<ApiResult<T, E>>;

  patch<T = any, D = any, E = unknown>(
    url: string,
    data?: D,
    config?: HttpConfig<T, D>
  ): Promise<ApiResult<T, E>>;

  postForm<T = any, D = any, E = unknown>(
    url: string,
    data?: D,
    config?: HttpConfig<T, D>
  ): Promise<ApiResult<T, E>>;
  putForm<T = any, D = any, E = unknown>(
    url: string,
    data?: D,
    config?: HttpConfig<T, D>
  ): Promise<ApiResult<T, E>>;
  patchForm<T = any, D = any, E = unknown>(
    url: string,
    data?: D,
    config?: HttpConfig<T, D>
  ): Promise<ApiResult<T, E>>;

  sse(url: string): EventSource;

  request<T = any, D = any, E = unknown>(
    config: HttpConfig<T, D>
  ): Promise<ApiResult<T, E>>;
}
