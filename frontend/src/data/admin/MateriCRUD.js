import axios from "axios";
import { MOCK_API_URL_MATERI } from "data/api";

const createMateri = async (values) => {
  const response = axios.post(`${MOCK_API_URL_MATERI}`, values);
  return response.data;
};

const updateMateri = async (id, values) => {
  const response = axios.put(`${MOCK_API_URL_MATERI}/${id}`, values);
  return response.data;
};

const deleteMateri = async (id) => {
  const response = axios.delete(`${MOCK_API_URL_MATERI}/${id}`);
  return response.data;
};

const getMateri = async () => {
  const response = await axios.get(MOCK_API_URL_MATERI);

  return response.data;
};

const mockGetMateriFromCourse = async () => {
  const response = await axios.get(MOCK_API_URL_MATERI);
  return response.data;
};

const getDetailMateri = async (id) => {
  const response = await axios.get(`${MOCK_API_URL_MATERI}/${id}`);
  return response.data;
};

export {
  createMateri,
  updateMateri,
  deleteMateri,
  getMateri,
  getDetailMateri,
  mockGetMateriFromCourse,
};
