import axios from "axios";

export const BASE_URL = "";

export const axiosWithBearer = (bearerToken) =>
  axios.create({
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
