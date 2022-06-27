import axios from "axios";
import { API_URL_COURSE, axiosWithBearer, MOCK_API_URL_COURSE } from "data/api";

const createCourse = async (values, bearerToken) => {
  const response = axiosWithBearer(bearerToken).post(
    `${API_URL_COURSE}/create`,
    values
  );
  return response.data;
};

const updateCourse = async (id, values, bearerToken) => {
  const response = axiosWithBearer(bearerToken).put(
    `${API_URL_COURSE}/update?id=${id}`,
    values
  );
  return response.data;
};

const deleteCourse = async (id, bearerToken) => {
  const response = axiosWithBearer(bearerToken).get(
    `${API_URL_COURSE}/delete?id=${id}`
  );
  return response.data;
};

const getCourse = async () => {
  const response = await axiosWithBearer().get(`${API_URL_COURSE}/getcourse`);
  return response.data;
};

const mockGetCourse = async () => {
  const response = await axiosWithBearer().get(MOCK_API_URL_COURSE);
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
  const response = await axiosWithBearer().get(
    `${API_URL_COURSE}/getbyid?id=${id}`
  );
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
