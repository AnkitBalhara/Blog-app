import { API_BASE_URL } from "./constants";

async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
    next: { revalidate: 0 },
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const res = await fetch(url, finalOptions);

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const errorMessage =
      errorData?.message ||
      `API Error: ${res.status} ${res.statusText} - ${url}`;
    throw new Error(errorMessage);
  }

  return res.json();
}

export const apiWrapper = {
  get: (endpoint, options = {}) => {
    return request(endpoint, {
      method: "GET",
      ...options,
    });
  },

  post: (endpoint, data = {}, options = {}) => {
    return request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      ...options,
    });
  },

  put: (endpoint, data = {}, options = {}) => {
    return request(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
      ...options,
    });
  },

  patch: (endpoint, data = {}, options = {}) => {
    return request(endpoint, {
      method: "PATCH",
      body: JSON.stringify(data),
      ...options,
    });
  },

  delete: (endpoint, options = {}) => {
    return request(endpoint, {
      method: "DELETE",
      ...options,
    });
  },
};
