import axios from "axios";
import { API_URL_LATIHAN, axiosWithBearer } from "data/api";

const createPertanyaan = async (values, bearerToken) => {
  const response = axiosWithBearer(bearerToken).post(
    `${API_URL_LATIHAN}/insert`,
    values
  );
  return response.data;
};

const updatePertanyaan = async (id, values, bearerToken) => {
  const response = axiosWithBearer(bearerToken).put(
    `${API_URL_LATIHAN}/update?id=${id}`,
    values
  );
  return response.data;
};

const deletePertanyaan = async (id, bearerToken) => {
  const response = axiosWithBearer(bearerToken).get(
    `${API_URL_LATIHAN}/delete?id=${id}`
  );
  return response.data;
};

const getPertanyaan = async () => {
  const response = await axios.get(`${API_URL_LATIHAN}/getlatihan`);
  return response.data;
};

const getPertanyaanByCourseId = async (idCourse) => {
  const response = await axios.get(
    `${API_URL_LATIHAN}/getbyidCourse?id=${idCourse}`
  );
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
  getPertanyaanByCourseId,
  getDetailPertanyaan,
};
