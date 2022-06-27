import Layout from "components/layout";
import useDocumentTitle from "hooks/useDocumentTitle";
import {
  Container,
  Stack,
  Heading,
  Skeleton,
  Toast,
  useToast,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { getCourse } from "data/admin/CourseCRUD";
import CourseList from "components/CourseList";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { toastProps } from "common";

function Latihan() {
  useDocumentTitle(`Latihan`);
  const toast = useToast();

  const [cookies, setCookie] = useCookies();

  const [tokenJWT, setTokenJWT] = useState(cookies?.token);

  const navigate = useNavigate();
  const [dataCourse, setDataCourse] = useState([]);
  const [isCourseLoaded, setIsCourseLoaded] = useState(false);

  const handlePilihTopik = (selectedCourse) => {
    const newUrl = selectedCourse?.nama_course.toLowerCase().replace(/\s/g, "");
    navigate(`/siswa/latihan/${newUrl}/1`);
    toast({
      title: `Selamat mengerjakan`,
      ...toastProps,
    });
  };

  const fetchDataCourse = useCallback(() => {
    if (localStorage.getItem("token") !== undefined) {
      setTokenJWT(tokenJWT);
      getCourse().then((res) => {
        setDataCourse(res.course);
        setIsCourseLoaded(true);
      });
    }
  }, []);

  useEffect(() => {
    fetchDataCourse();
  }, [fetchDataCourse]);

  return (
    <>
      <Layout>
        <Container maxW={"7xl"}>
          <Heading color={"#FF6905"}>Let’s pick your exercise</Heading>
          {isCourseLoaded ? (
            <CourseList
              dataCourse={dataCourse}
              handlePilihTopik={handlePilihTopik}
            />
          ) : (
            <Stack spacing={6} mt={6}>
              <Skeleton h="300px" />
              <Skeleton h="300px" />
              <Skeleton h="300px" />
            </Stack>
          )}
        </Container>
      </Layout>
    </>
  );
}

export default Latihan;
