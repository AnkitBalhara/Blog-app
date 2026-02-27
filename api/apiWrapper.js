import { API_BASE_URL } from "./constants";

// Base fetch function — all methods go through this
async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
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

  // Response interceptor — handle errors in one place
  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const errorMessage = errorData?.message || "Something went wrong";
    throw new Error(errorMessage);
  }

  return res.json();
}

// API wrapper — get method live here
export const apiWrapper = {
  get: (endpoint, options = {}) => {
    return request(endpoint, {
      method: "GET",
      ...options,
    });
  },

  // Add other methods here like post, put, delete...
};