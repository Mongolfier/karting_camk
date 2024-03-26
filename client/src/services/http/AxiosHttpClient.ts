import axios, {
  AxiosError,
  AxiosInstance, AxiosResponse,
  type CreateAxiosDefaults,
  isAxiosError
} from "axios";
import { inject, injectable, interfaces } from 'inversify';
import { Err, Ok } from "ts-results-es";
import {
  HttpError,
  CancelledRequestError,
  ClientError,
  InvalidResponseError,
  NetworkError,
  ServerError,
  UnknownError
} from "./HttpError";
import { HttpClient, HttpConfig, ApiResult } from "./HttpClient";

export const AxiosHttpClientDefaults: interfaces.ServiceIdentifier<AxiosHttpClientDefaults>  = Symbol('AxiosHttpClientDefaults');
export type AxiosHttpClientDefaults = CreateAxiosDefaults;

@injectable()
export class AxiosHttpClient implements HttpClient {
  private _apiUrl: string = "";
  private axiosInstance: AxiosInstance
  constructor(@inject(AxiosHttpClientDefaults) config?: AxiosHttpClientDefaults) { 
    this.axiosInstance = axios.create(config);
  }

  get defaults() {
    return this.axiosInstance.defaults;
  }

  axiosResponseToAPIResult = async <T, D, E>(
    axiosResponsePromise: Promise<AxiosResponse<T, D>>,
    config?: HttpConfig<T, D>
  ): Promise<ApiResult<T, E>> => {
    try {
      const response = await axiosResponsePromise;
      if (!config?.responseBodySchema) {
        return Ok(response);
      }

      if (config.responseBodySchema.isValidSync(response.data)) {
        return Ok(response);
      } else {
        return Err(new InvalidResponseError());
      }
    } catch (error: unknown) {
      if (isAxiosError<E, D>(error)) {
        return Err(this.axiosErrorToApiError(error));
      }
      return Err(new UnknownError());
    }
  };

  axiosErrorToApiError = <E, D>(error: AxiosError<E, D>): HttpError<E> => {
    if (NetworkError.match(error)) {
      return new NetworkError();
    }
    if (CancelledRequestError.match(error)) {
      return new CancelledRequestError();
    }
    if (ClientError.match(error)) {
      return new ClientError({
        message: error.message,
        status: error.response!.status!,
        responseBody: error.response?.data
      });
    }
    if (ServerError.match(error)) {
      return new ServerError({
        message: error.message,
        status: error.response!.status!,
        responseBody: error.response!.data
      });
    }
    return new UnknownError();
  };

  async get<T = unknown, E = unknown>(
    url: string,
    config?: HttpConfig<T>
  ): Promise<ApiResult<T, E>> {
    return this.axiosResponseToAPIResult(
      this.axiosInstance.get<T, AxiosResponse<T>>(url, config),
      config
    );
  }
  async delete<T = unknown, E = unknown>(
    url: string,
    config?: HttpConfig<T>
  ): Promise<ApiResult<T, E>> {
    return this.axiosResponseToAPIResult(
      this.axiosInstance.delete<T, AxiosResponse<T>>(url, config),
      config
    );
  }
  async head<T = any, E = unknown>(
    url: string,
    config?: HttpConfig<T>
  ): Promise<ApiResult<T, E>> {
    return this.axiosResponseToAPIResult(
      this.axiosInstance.head<T, AxiosResponse<T>>(url, config),
      config
    );
  }
  async options<T = any, E = unknown>(
    url: string,
    config?: HttpConfig<T>
  ): Promise<ApiResult<T, E>> {
    return this.axiosResponseToAPIResult(
      this.axiosInstance.options<T, AxiosResponse<T>>(url, config),
      config
    );
  }
  async post<T = any, D = any, E = unknown>(
    url: string,
    data?: D,
    config?: HttpConfig<T, D>
  ): Promise<ApiResult<T, E>> {
    return this.axiosResponseToAPIResult(
      this.axiosInstance.post<T, AxiosResponse<T, D>, D>(url, data, config),
      config
    );
  }
  async put<T = any, D = any, E = unknown>(
    url: string,
    data?: D,
    config?: HttpConfig<T, D>
  ): Promise<ApiResult<T, E>> {
    return this.axiosResponseToAPIResult(
      this.axiosInstance.put<T, AxiosResponse<T, D>, D>(url, data, config),
      config
    );
  }
  async patch<T = any, D = any, E = unknown>(
    url: string,
    data?: D,
    config?: HttpConfig<T, D>
  ): Promise<ApiResult<T, E>> {
    return this.axiosResponseToAPIResult(
      this.axiosInstance.patch<T, AxiosResponse<T, D>, D>(url, data, config),
      config
    );
  }
  async postForm<T = any, D = any, E = unknown>(
    url: string,
    data?: D,
    config?: HttpConfig<T, D>
  ): Promise<ApiResult<T, E>> {
    return this.axiosResponseToAPIResult(
      this.axiosInstance.postForm<T, AxiosResponse<T, D>, D>(url, data, config),
      config
    );
  }
  async putForm<T = any, D = any, E = unknown>(
    url: string,
    data?: D,
    config?: HttpConfig<T, D>
  ): Promise<ApiResult<T, E>> {
    return this.axiosResponseToAPIResult(
      this.axiosInstance.putForm<T, AxiosResponse<T, D>, D>(url, data, config),
      config
    );
  }
  async patchForm<T = any, D = any, E = unknown>(
    url: string,
    data?: D,
    config?: HttpConfig<T, D>
  ): Promise<ApiResult<T, E>> {
    return this.axiosResponseToAPIResult(
      this.axiosInstance.patchForm<T, AxiosResponse<T, D>, D>(
        url,
        data,
        config
      ),
      config
    );
  }

  sse(url: string) {
    const sse = new EventSource(`${this._apiUrl}${url}`, {
      withCredentials: true,
    });
    return sse;
  }

  request<T = any, D = any, E = unknown>(
    config: HttpConfig<T, D>
  ): Promise<ApiResult<T, E>> {
    return this.axiosResponseToAPIResult(
      this.axiosInstance.request<T, AxiosResponse<T, D>, D>(config),
      config
    );
  }
}
