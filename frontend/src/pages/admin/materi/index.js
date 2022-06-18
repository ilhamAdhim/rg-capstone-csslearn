import {
  Box,
  Button,
  Flex,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { mockGetMateriFromCourse } from "../../../data/admin/MateriCRUD";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { ucfirst } from "../../../common";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/layout";
import CourseListFilter from "../../../components/CourseListFilter";
import ModalCustom from "../../../components/ModalCustom";
import BoxItem from "../../../components/BoxItem";

function MateriAdminPage() {
  useDocumentTitle("Materi");
  const toast = useToast();
  const modal = useDisclosure();
  const navigate = useNavigate();

  const textTambahMateriColor = useColorModeValue("white", "black");
  const [selectedCourse, setSelectedCourse] = useState({});

  const [dataMateri, setDataMateri] = useState([]);
  const [selectedMateri, setSelectedMateri] = useState({});
  const [isMateriSelected, setIsMateriSelected] = useState(false);
  const [isMateriLoaded, setIsMateriLoaded] = useState(false);

  const [modalRole, setModalRole] = useState("");

  const handleOpenModal = (role, entity = {}) => {
    modal.onOpen();
    if (role !== "create") setSelectedMateri(entity);
    setModalRole(role);
    console.log("Current Materi ", entity, " role : ", role);
  };

  const goCreateMateriPage = () => {
    navigate({
      pathname: "/admin/materi/tambah",
      search: `?courseId=${selectedCourse?.id}`,
    });
  };

  const handleUpdateMateri = () => {
    // TODO : connect endpoint UpdateMateri
    // ...

    toast({
      title: `Materi ${selectedCourse} berhasil diubah`,
      variant: "solid",
      status: "success",
      isClosable: true,
      duration: 3000,
      position: "top",
    });
  };

  const handleDeleteMateri = () => {
    // TODO : connect endpoint DeleteMateri
    // ...
    toast({
      title: `Materi ${selectedCourse} berhasil dihapus`,
      variant: "solid",
      status: "success",
      isClosable: true,
      duration: 3000,
      position: "top",
    });
  };

  useEffect(() => {
    // TODO : Consume data materi ketika ada perubahan Materi yang dipilih
    // ...
    if (selectedCourse !== undefined) {
      setIsMateriLoaded(false);

      mockGetMateriFromCourse().then((data) => {
        // ? Ini kalau endpointnya gak terbalik, bisa langsung setDataMateri(data)
        setDataMateri(
          data?.filter((item) =>
            item.judul_course.includes(selectedCourse.judul_course)
          )
        );
        setIsMateriLoaded(true);
      });
    }
  }, [selectedCourse]);

  useEffect(() => {
    console.log(dataMateri);
  }, [dataMateri]);

  return (
    <>
      <Layout>
        <Text fontSize="xl" fontWeight="bold">
          Materi dari Course
        </Text>
        <CourseListFilter
          setSelectedCourse={setSelectedCourse}
          setIsCourseSelected={setIsMateriSelected}
        />
        <Box mt="8" mb="8" p="8">
          {!isMateriSelected ? (
            <Text mb="4" fontWeight="bold" textAlign="center" fontSize="2xl">
              Harap pilih topik diatas terlebih dahulu
            </Text>
          ) : (
            <Flex justifyContent="space-between">
              <Text mb="4" fontWeight="bold" fontSize={["lg", "2xl"]}>
                Materi untuk {selectedCourse.judul_course || "Materi"}
              </Text>
              <Button
                colorScheme="cyan"
                color={textTambahMateriColor}
                onClick={() => goCreateMateriPage()}
              >
                Tambah Materi
              </Button>
            </Flex>
          )}

          {isMateriLoaded ? (
            <Stack spacing={4}>
              {dataMateri.map((item, id) => (
                <BoxItem
                  item={item}
                  hasDelete
                  hasPreview
                  entity="materi"
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
        </Box>

        <ModalCustom
          isOpen={modal.isOpen}
          onClose={modal.onClose}
          role={modalRole}
          onHandleSubmit={
            modalRole === "create"
              ? handleCreateMateri
              : modalRole === "update"
              ? handleUpdateMateri
              : handleDeleteMateri
          }
          selectedEntity={selectedCourse}
          title={ucfirst(
            modalRole !== "create"
              ? `${modalRole} Materi di ${selectedCourse?.judul_course}`
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
