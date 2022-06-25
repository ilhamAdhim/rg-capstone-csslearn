import axios from "axios";

export const BASE_URL = "https://csslearn.ilhamadhim.me/api";

export const MOCK_BASE_URL = "https://62a601a6430ba53411cfc9de.mockapi.io";

export const API_URL_USER = `${BASE_URL}/user`;
export const API_URL_COURSE = `${BASE_URL}/course`;
export const API_URL_TOPIC = `${BASE_URL}/topic`;
export const API_URL_LATIHAN = `${BASE_URL}/latihan`;

// ? Kalau udah sync, di delete

export const MOCK_API_URL_SISWA = `${MOCK_BASE_URL}/siswa`;
export const MOCK_API_URL_COURSE = `${MOCK_BASE_URL}/course`;

// ? Belum ada untuk mockapi materi
export const MOCK_API_URL_MATERI = `${MOCK_BASE_URL}/materi`;

export const axiosWithBearer = (bearerToken) =>
  axios.create({
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
