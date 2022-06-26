import {
  Box,
  Button,
  Flex,
  Skeleton,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import Layout from "components/layout";
import ModalCustom from "components/ModalCustom";
import {
  deleteMateri,
  getMateri,
  getMateriByCourseID,
  mockGetMateriFromCourse,
} from "data/admin/MateriCRUD";
import useDocumentTitle from "hooks/useDocumentTitle";
import { toastProps, ucfirst } from "common";
import CourseListFilter from "components/CourseListFilter";
import { Link, useNavigate } from "react-router-dom";
import BoxItem from "components/BoxItem";

function MateriAdminPage() {
  useDocumentTitle("Materi");
  const toast = useToast();
  const modal = useDisclosure();
  const navigate = useNavigate();

  // Untuk filter
  const [selectedCourse, setSelectedCourse] = useState();
  const [isCourseSelected, setIsCourseSelected] = useState(false);

  const [dataMateri, setDataMateri] = useState([]);
  const [isMateriLoaded, setIsMateriLoaded] = useState(false);
  const [selectedMateri, setSelectedMateri] = useState({});

  const [modalRole, setModalRole] = useState("");

  const [tokenJWT, setTokenJWT] = useState("");

  const handleOpenModal = (role, entity = {}) => {
    modal.onOpen();
    if (role !== "create") setSelectedMateri(entity);
    setModalRole(role);
    console.log("Current Materi ", entity, " role : ", role);
  };
  const goCreateMateriPage = () => {
    console.log(selectedMateri);
    navigate({
      pathname: "/admin/materi/tambah",
      search: `?courseId=${selectedCourse?.id_course}`,
    });
  };

  const fetchDataMateri = useCallback(() => {
    // TODO : Bisa dari localstorage / Zustand
    if (
      localStorage.getItem("token") !== undefined &&
      selectedCourse !== undefined
    ) {
      console.log(selectedCourse);
      setIsMateriLoaded(false);

      setTokenJWT(localStorage.getItem("token"));
      getMateriByCourseID(selectedCourse?.id_course).then((data) => {
        console.log(data);
        setDataMateri(data.gettopic);
        setIsMateriLoaded(true);
      });
    }
  }, [selectedCourse]);

  const handleDeleteMateri = (idObj) => {
    deleteMateri(idObj, tokenJWT)
      .then(() => {
        toast({
          title: `Course ${selectedMateri.materi} berhasil dihapus`,
          ...toastProps,
        });
        fetchDataMateri();
        modal.onClose();
      })
      .catch(() => console.log("Belum bisa delete course"));
  };

  useEffect(() => {
    fetchDataMateri();
  }, [fetchDataMateri]);

  return (
    <>
      <Layout>
        <Text fontSize="xl" fontWeight="bold">
          Materi dari Course
        </Text>
        <CourseListFilter
          setSelectedCourse={setSelectedCourse}
          setIsCourseSelected={setIsCourseSelected}
        />
        <Box mt="8" mb="8" p="8">
          {!isCourseSelected ? (
            <Text mb="4" fontWeight="bold" textAlign="center" fontSize="2xl">
              Harap pilih topik diatas terlebih dahulu
            </Text>
          ) : (
            <>
              <Flex justifyContent="space-between">
                <Text mb="4" fontWeight="bold" fontSize="2xl">
                  Materi untuk {selectedCourse.nama_course || "Materi"}
                </Text>
                <Link to={`/admin/materi/tambah/${selectedCourse?.id_course}`}>
                  <Button colorScheme="cyan">Tambah Materi</Button>
                </Link>
              </Flex>
              {isMateriLoaded ? (
                <Stack spacing={4}>
                  {dataMateri.map((item, id) => (
                    <BoxItem
                      key={id}
                      item={item}
                      hasDelete
                      hasPreview
                      entity="Materi"
                      isPreviewOpenNewPage
                      handleOpenModal={handleOpenModal}
                    />
                  ))}
                </Stack>
              ) : (
                <Stack gap={4}>
                  <Skeleton h="200px" />
                  <Skeleton h="200px" />
                  <Skeleton h="200px" />
                </Stack>
              )}
            </>
          )}
        </Box>

        <ModalCustom
          role={modalRole}
          isOpen={modal.isOpen}
          onClose={modal.onClose}
          onHandleSubmit={
            modalRole === "delete"
              ? () => handleDeleteMateri(selectedMateri?.id_materi)
              : () => {}
          }
          selectedEntity={selectedMateri}
          title={ucfirst(
            modalRole !== "create"
              ? `${modalRole} Materi di ${selectedMateri?.title}`
              : `Tambah Materi baru`
          )}
        >
          Modal custom nih {modalRole}
        </ModalCustom>
      </Layout>
    </>
  );
}

export default MateriAdminPage;
