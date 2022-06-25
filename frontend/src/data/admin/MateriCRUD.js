import axios from "axios";
import { API_URL_TOPIC, MOCK_API_URL_MATERI } from "data/api";

const createMateri = async (values) => {
  const response = axios.post(`${API_URL_TOPIC}/insertcourse`, values);
  return response.data;
};

const updateMateri = async (id, values) => {
  const response = axios.put(`${API_URL_TOPIC}/updatecourse?id=${id}`, values);
  return response.data;
};

const deleteMateri = async (id) => {
  const response = axios.delete(`${API_URL_TOPIC}/deletecourse?id=${id}`);
  return response.data;
};

const getMateri = async () => {
  const response = await axios.get(`${API_URL_TOPIC}/getcourse`);

  return response.data;
};

const mockGetMateriFromCourse = async () => {
  const response = await axios.get(MOCK_API_URL_MATERI);
  return response.data;
};

const getDetailMateri = async (id) => {
  const response = await axios.get(`${API_URL_TOPIC}/getcoursebyid?id=${id}`);
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
