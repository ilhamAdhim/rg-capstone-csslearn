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

  // ? Sekarang kan mockapi nya kebalik antara endpoint course sama materi. Nanti kalo udah bener, langsung return response.data aja

  response.data.map(
    (dataResponse) =>
      !distinctData.some((item) =>
        item.judul_course.includes(dataResponse.judul_course)
      ) &&
      distinctData.push({
        id: dataResponse.id,
        judul_course: dataResponse.judul_course,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      })
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
