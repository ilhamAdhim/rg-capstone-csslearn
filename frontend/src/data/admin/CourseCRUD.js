import axios from "axios";
import { MOCK_API_URL_COURSE } from "../api";

const createCourse = async (values) => {
  const response = axios.post(`${MOCK_API_URL_COURSE}`, values);
  return response.data;
};

const updateCourse = async (id, values) => {
  const response = axios.put(`${MOCK_API_URL_COURSE}/${id}`, values);
  return response.data;
};

const deleteCourse = async (id) => {
  const response = axios.delete(`${MOCK_API_URL_COURSE}/${id}`);
  return response.data;
};

const getCourse = async () => {
  const response = await axios.get(MOCK_API_URL_COURSE);

  return response.data;
};

const mockGetCourse = async () => {
  const response = await axios.get(MOCK_API_URL_COURSE);
  let distinctData = [];
  response.data.map(
    (item) =>
      !distinctData.includes(item.judul_course) &&
      distinctData.push(item.judul_course)
  );

  return distinctData;
};

const getDetailCourse = async (id) => {
  const response = await axios.get(`${MOCK_API_URL_COURSE}/${id}`);
  return response.data;
};

export {
  createCourse,
  updateCourse,
  deleteCourse,
  getCourse,
  mockGetCourse,
  getDetailCourse,
};
