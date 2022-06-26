import React, { useEffect, useState } from "react";
import Layout from "components/layout";
import useDocumentTitle from "hooks/useDocumentTitle";
// import { Navigate } from "react-router-dom";

import {
  Container,
  Stack,
  Heading,
  useDisclosure,
  Skeleton,
  useToast,
} from "@chakra-ui/react";
import ModalCustom from "components/ModalCustom";
import { ucfirst } from "common"; 
import { mockGetCourse } from "data/admin/CourseCRUD";
import JumbotronAdd from "components/JumbotronAdd";
import ModalCourseUpdate from "components/ModalCourseContent/ModalCourseUpdate";
import ModalCourseDelete from "components/ModalCourseContent/ModalCourseDelete";
import ModalCourseCreate from "components/ModalCourseContent/ModalCourseCreate";
import CourseList from "components/CourseList";
// TODO : Pindah semua toast ke API handlers (folder data)
// Caranya pakai const toast = createStandaloneToast();

function CourseAdminPage() {
  // const token = localStorage.getItem("token");
  // console.log("token: ", token);

  // if (!token) {
  //   return <Navigate to="/login" />;
  // }
  useDocumentTitle(`Course`);
  const toast = useToast();
  const modal = useDisclosure();

  const [modalRole, setModalRole] = useState("");

  const [dataCourse, setDataCourse] = useState([]);
  const [isCourseLoaded, setIsCourseLoaded] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});

  const handleOpenModal = (role, course = {}) => {
    modal.onOpen();
    setSelectedCourse(course);
    setModalRole(role);
    console.log("Current course ", course, " role : ", role);
  };

  const handleCreateCourse = () => {
    // TODO : connect endpoint CreateCourse
    // ...

    toast({
      title: "Course baru telah dibuat",
      variant: "solid",
      status: "success",
      isClosable: true,
      duration: 3000,
      position: "top",
    });
  };

  const handleUpdateCourse = () => {
    // TODO : connect endpoint UpdateCourse
    // ...

    toast({
      title: `Course ${selectedCourse.judul_course} berhasil diubah`,
      variant: "solid",
      status: "success",
      isClosable: true,
      duration: 3000,
      position: "top",
    });
  };

  const handleDeleteCourse = () => {
    // TODO : connect endpoint DeleteCourse
    // ...
    toast({
      title: `Course ${selectedCourse.judul_course} berhasil dihapus`,
      variant: "solid",
      status: "success",
      isClosable: true,
      duration: 3000,
      position: "top",
    });
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
          <JumbotronAdd
            text="Tambahkan Course CSS Baru untuk diikuti"
            buttonText="Tambah Course Baru"
            handleOpenModal={handleOpenModal}
          />

          <Heading color={"#FF6905"}>List Course </Heading>
          {isCourseLoaded ? (
            <CourseList
              dataCourse={dataCourse}
              handleOpenModal={handleOpenModal}
              />
          ) : (
            <Stack spacing={6} mt={6}>
              <Skeleton h="300px" />
              <Skeleton h="300px" />
              <Skeleton h="300px" />
            </Stack>
          )}

          <ModalCustom
            isOpen={modal.isOpen}
            onClose={modal.onClose}
            role={modalRole}
            onHandleSubmit={
              modalRole === "create"
                ? handleCreateCourse
                : modalRole === "update"
                ? handleUpdateCourse
                : handleDeleteCourse
            }
            selectedEntity={selectedCourse}
            title={ucfirst(
              modalRole !== "create"
                ? `${modalRole} course ${selectedCourse.judul_course}`
                : `Tambah Course baru`
            )}
          >
            {modalRole === "update" && (
              <ModalCourseUpdate currentCourse={selectedCourse} />
            )}

            {modalRole === "create" && <ModalCourseCreate />}

            {modalRole === "delete" && (
              <ModalCourseDelete currentCourse={selectedCourse} />
            )}
          </ModalCustom>
        </Container>
      </Layout>
    </>
  );
}

export default CourseAdminPage;
