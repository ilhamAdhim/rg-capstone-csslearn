import React, { useCallback, useEffect, useState } from "react";
import Layout from "components/layout";
import useDocumentTitle from "hooks/useDocumentTitle";

import {
  Container,
  Stack,
  Heading,
  useDisclosure,
  Skeleton,
  useToast,
} from "@chakra-ui/react";
import ModalCustom from "components/ModalCustom";
import { toastProps, ucfirst } from "common";
import {
  createCourse,
  deleteCourse,
  getCourse,
  updateCourse,
} from "data/admin/CourseCRUD";
import JumbotronAdd from "components/JumbotronAdd";
import ModalCourseUpdate from "components/ModalCourseContent/ModalCourseUpdate";
import ModalCourseDelete from "components/ModalCourseContent/ModalCourseDelete";
import ModalCourseCreate from "components/ModalCourseContent/ModalCourseCreate";
import CourseList from "components/CourseList";
import { useCookies } from "react-cookie";

function CourseAdminPage() {
  const [cookies, setCookie] = useCookies();

  useDocumentTitle(`Course`);
  const toast = useToast();
  const modal = useDisclosure();

  const [modalRole, setModalRole] = useState("");
  const [tokenJWT, setTokenJWT] = useState(cookies?.token);

  const [dataCourse, setDataCourse] = useState([]);
  const [isCourseLoaded, setIsCourseLoaded] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});

  // Ini untuk create dan update
  const [formObj, setFormObj] = useState({
    nama_course: "",
    content: "",
  });

  const fetchDataCourse = useCallback(() => {
    // TODO : Bisa dari localstorage / Zustand
    if (localStorage.getItem("token") !== undefined) {
      setTokenJWT(localStorage.getItem("token"));
      getCourse().then((res) => {
        setDataCourse(res.course);
        setIsCourseLoaded(true);
      });
    }
  }, []);

  const handleOpenModal = (role, course = {}) => {
    modal.onOpen();
    setSelectedCourse(course);
    setModalRole(role);
    console.log("Current course ", course, " role : ", role);
  };

  const handleCreateCourse = (formObj) => {
    createCourse(formObj, tokenJWT)
      .then(() => {
        toast({
          title: "Course baru telah dibuat",
          ...toastProps,
        });
        fetchDataCourse();
        modal.onClose();
      })
      .catch(() => console.log("Belum bisa create course"));
  };

  const handleUpdateCourse = (formObj) => {
    updateCourse(selectedCourse?.id_course, formObj, tokenJWT)
      .then(() => {
        console.log("apa ini");
        toast({
          title: `Course ${selectedCourse.nama_course} berhasil diubah`,
          ...toastProps,
        });
        fetchDataCourse();
        modal.onClose();
      })
      .catch(() => console.log("Belum bisa update course"));
  };

  const handleDeleteCourse = (idObj) => {
    deleteCourse(idObj, tokenJWT)
      .then(() => {
        toast({
          title: `Course ${selectedCourse.nama_course} berhasil dihapus`,
          ...toastProps,
        });
        fetchDataCourse();
      })
      .catch(() => console.log("Belum bisa delete course"));
  };

  useEffect(() => {
    fetchDataCourse();
  }, [fetchDataCourse]);

  // ? Mode dev : disable dulu
  // const token = localStorage.getItem("token");
  // console.log("token: ", token);
  // if (!token) return <Navigate to="/login" />;
  // else
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
                ? () => handleCreateCourse(formObj)
                : modalRole === "update"
                ? () => handleUpdateCourse(formObj)
                : () => handleDeleteCourse(selectedCourse?.id_course)
            }
            selectedEntity={selectedCourse}
            title={ucfirst(
              modalRole !== "create"
                ? `${modalRole} course ${selectedCourse.nama_course}`
                : `Tambah Course baru`
            )}
          >
            {modalRole === "update" && (
              <ModalCourseUpdate
                formObj={formObj}
                setFormObj={setFormObj}
                currentCourse={selectedCourse}
              />
            )}

            {modalRole === "create" && (
              <ModalCourseCreate setFormObj={setFormObj} />
            )}

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
