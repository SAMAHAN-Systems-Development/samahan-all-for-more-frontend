const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

interface ApiConfig {
  headers?: Record<string, string>;
}

interface ApiResponse<T> {
  data: T;
  message?: string;
}

interface ErrorResponse {
  message: string;
}

const createRequestOptions = <T>(
  method: string,
  data?: T,
  config: ApiConfig = {}
): RequestInit => {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...config.headers,
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  return options;
};

const handleResponse = async <T>(
  response: Response
): Promise<ApiResponse<T>> => {
  if (!response.ok) {
    const error: ErrorResponse = await response
      .json()
      .catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Something went wrong');
  }

  const data = (await response.json()) as T;
  return { data };
};

const apiRequest = async <T>(
  url: string,
  options: RequestInit
): Promise<ApiResponse<T>> => {
  const response = await fetch(`${BASE_URL}${url}`, options);
  return handleResponse<T>(response);
};

const _get = async <T>(
  url: string,
  config: ApiConfig = {}
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(url, createRequestOptions('GET', undefined, config));
};

const _delete = async <T>(
  url: string,
  config: ApiConfig = {}
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(url, createRequestOptions('DELETE', undefined, config));
};

const _put = async <T, U>(
  url: string,
  data: U,
  config: ApiConfig = {}
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(url, createRequestOptions<U>('PUT', data, config));
};

const _post = async <T, U>(
  url: string,
  data: U,
  config: ApiConfig = {}
): Promise<ApiResponse<T>> => {
  return apiRequest<T>(url, createRequestOptions<U>('POST', data, config));
};

// Export API methods
export { _get, _delete, _put, _post };
