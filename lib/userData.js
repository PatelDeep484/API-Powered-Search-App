import { getToken } from "./authenticate.js";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function makeRequest(method, url) {
  const token = getToken();
  const options = {
    method,
    headers: {
      Authorization: `JWT ${token}`,
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`${API_URL}${url}`, options);
  if (response.ok) {
    return response.json();
  } else {
    return [];
  }
}

export async function addToFavourites(id) {
  return makeRequest("PUT", `/favourites/${id}`);
}

export async function removeFromFavourites(id) {
  return makeRequest("DELETE", `/favourites/${id}`);
}

export async function getFavourites() {
  return makeRequest("GET", "/favourites");
}

export async function addToHistory(id) {
  return makeRequest("PUT", `/history/${id}`);
}

export async function removeFromHistory(id) {
  return makeRequest("DELETE", `/history/${id}`);
}

export async function getHistory() {
  return makeRequest("GET", "/history");
}
