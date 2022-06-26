import axios from "axios";
import { API_URL_TOPIC, axiosWithBearer, MOCK_API_URL_MATERI } from "data/api";

const createMateri = async (values, bearerToken) => {
  const response = axiosWithBearer(bearerToken).post(
    `${API_URL_TOPIC}/create`,
    values
  );
  return response.data;
};

const updateMateri = async (id, values, bearerToken) => {
  const response = axiosWithBearer(bearerToken).put(
    `${API_URL_TOPIC}/update?id=${id}`,
    values
  );
  return response.data;
};

const deleteMateri = async (id, bearerToken) => {
  const response = axiosWithBearer(bearerToken).get(
    `${API_URL_TOPIC}/delete?id=${id}`
  );
  return response.data;
};

const getMateri = async (bearerToken) => {
  const response = await axiosWithBearer(bearerToken).get(
    `${API_URL_TOPIC}/gettopics`
  );
  return response.data;
};

// TODO : tambah lagi getMateriByCourseID ya
// ...

const getMateriByCourseID = async (id, bearerToken) => {
  const response = await axiosWithBearer(bearerToken).get(
    `${API_URL_TOPIC}/getbyidCourse?id=${id}`
  );
  return response.data;
};

const mockGetMateriFromCourse = async () => {
  const response = await axios.get(MOCK_API_URL_MATERI);
  return response.data;
};

const getDetailMateri = async (id, bearerToken) => {
  const response = await axiosWithBearer(bearerToken).get(
    `${API_URL_TOPIC}/getcoursebyid?id=${id}`
  );
  return response.data;
};

export {
  createMateri,
  updateMateri,
  deleteMateri,
  getMateri,
  getDetailMateri,
  getMateriByCourseID,
  mockGetMateriFromCourse,
};
