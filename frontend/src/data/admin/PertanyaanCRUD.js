import axios from "axios";
import { API_URL_LATIHAN } from "data/api";

const createPertanyaan = async (values) => {
  const response = axios.post(`${API_URL_LATIHAN}/insert`, values);
  return response.data;
};

const updatePertanyaan = async (id, values) => {
  const response = axios.put(`${API_URL_LATIHAN}/update?id=${id}`, values);
  return response.data;
};

const deletePertanyaan = async (id) => {
  const response = axios.delete(`${API_URL_LATIHAN}/delete?id=${id}`);
  return response.data;
};

const getPertanyaan = async () => {
  const response = await axios.get(`${API_URL_LATIHAN}/getlatihan`);

  return response.data;
};

const getDetailPertanyaan = async (id) => {
  const response = await axios.get(
    `${API_URL_LATIHAN}/getlatihanbyid?id=${id}`
  );
  return response.data;
};

export {
  createPertanyaan,
  updatePertanyaan,
  deletePertanyaan,
  getPertanyaan,
  getDetailPertanyaan,
};
