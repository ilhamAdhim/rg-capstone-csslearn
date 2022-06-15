import axios from "axios";

export const BASE_URL = "";

export const MOCK_BASE_URL = "https://62a601a6430ba53411cfc9de.mockapi.io";

export const MOCK_API_URL_SISWA = `${MOCK_BASE_URL}/siswa`;
export const MOCK_API_URL_MATERI = `${MOCK_BASE_URL}/course`;

export const axiosWithBearer = (bearerToken) =>
  axios.create({
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
