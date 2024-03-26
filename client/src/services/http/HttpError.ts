import {
    AxiosError,
    isAxiosError
} from 'axios';

const NETWORK_CODE_LIST = [
    AxiosError.ERR_NETWORK,
    AxiosError.ETIMEDOUT,
    AxiosError.ECONNABORTED,
];

export class NetworkError extends Error {
  type = "NetworkError" as const;
  static match(error: Error) {
    return isAxiosError(error) && !!error.code && NETWORK_CODE_LIST.includes(error.code);
  }
};

type ErrorConstructorArgs<ErrorResponse = unknown>  = {
  message?: string,
  options?: ErrorOptions
  status: number,
  responseBody?: ErrorResponse
}

export class ServerError<ErrorResponse = unknown> extends Error {
  type = "ServerError" as const;
  status: number;
  responseBody: ErrorResponse | undefined;
  constructor({
    message,
    options,
    status,
    responseBody,
  }: ErrorConstructorArgs<ErrorResponse>) {
    super(message, options);
    this.status = status;
    this.responseBody = responseBody;
  }

  static match(error: Error) {
    return isAxiosError(error) && !!(error?.response?.status && error.response.status >= 500);
  }
};

export class ClientError<ErrorResponse = unknown> extends Error {
  type = "ClientError" as const;
  status: number;
  responseBody: ErrorResponse | undefined;
  constructor({
    message,
    options,
    status,
    responseBody,
  }: ErrorConstructorArgs<ErrorResponse>) {
    super(message, options);
    this.status = status;
    this.responseBody = responseBody;
  }

  static match(error: Error) {
    return isAxiosError(error) && !!error?.response?.status &&
    error.response.status >= 400 &&
    error.response.status < 500;
  }
};

export class UnknownError extends Error {
  type = "UnknownError" as const;
};

export class CancelledRequestError extends Error {
  type = "CancelledRequestError" as const;

  static match(error: Error) {
    return isAxiosError(error) && error.code === AxiosError.ERR_CANCELED;
  }
};

export class InvalidResponseError extends Error {
  type = "InvalidResponseError" as const;
}

export type HttpError<ErrorResponse = unknown> =
  | CancelledRequestError
  | UnknownError
  | ClientError<ErrorResponse>
  | ServerError
  | NetworkError
  | InvalidResponseError;

export type HttpErrorType = HttpError["type"];
