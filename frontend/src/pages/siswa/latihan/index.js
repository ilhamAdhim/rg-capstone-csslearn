import Layout from "components/layout";
import useDocumentTitle from "hooks/useDocumentTitle";
import { Container, Stack, Heading, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { mockGetCourse } from "data/admin/CourseCRUD";
import CourseList from "components/CourseList";
import { useNavigate } from "react-router";

function Latihan() {
  useDocumentTitle(`Latihan`);

  const navigate = useNavigate();
  const [dataCourse, setDataCourse] = useState([]);
  const [isCourseLoaded, setIsCourseLoaded] = useState(false);

  const handlePilihTopik = (selectedCourse) => {
    const newUrl = selectedCourse?.judul_course
      .toLowerCase()
      .replace(/\s/g, "");

    navigate(`/siswa/latihan/${newUrl}/1`);
  };

  useEffect(() => {
    mockGetCourse().then((data) => {
      setDataCourse(data);
      setIsCourseLoaded(true);
    });
  }, []);

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
