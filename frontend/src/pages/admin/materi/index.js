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
import { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import ModalCustom from "../../../components/ModalCustom";
import { mockGetMateriFromCourse } from "../../../data/admin/MateriCRUD";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { ucfirst } from "../../../common";
import CourseList from "../../../components/CourseList";

function MateriAdminPage() {
  useDocumentTitle("Materi");

  const toast = useToast();
  const modal = useDisclosure();

  const [selectedCourse, setSelectedCourse] = useState({});
  const [isMateriSelected, setIsMateriSelected] = useState(false);

  const [dataMateri, setDataMateri] = useState([]);
  const [isMateriLoaded, setIsMateriLoaded] = useState(false);
  const [selectedMateri, setSelectedMateri] = useState({});

  const [modalRole, setModalRole] = useState("");

  const handleOpenModal = (role, entity = {}) => {
    modal.onOpen();
    setSelectedMateri(entity);
    setModalRole(role);
    console.log("Current Materi ", entity, " role : ", role);
  };

  const handleCreateMateri = () => {
    // TODO : connect endpoint CreateMateri
    // ...

    toast({
      title: "Materi baru telah dibuat",
      variant: "solid",
      status: "success",
      isClosable: true,
      duration: 3000,
      position: "top",
    });
  };

  const handleUpdateMateri = () => {
    // TODO : connect endpoint UpdateMateri
    // ...

    toast({
      title: `Materi ${selectedMateri} berhasil diubah`,
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
      title: `Materi ${selectedMateri} berhasil dihapus`,
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
    if (selectedMateri !== undefined) {
      setIsMateriLoaded(false);

      mockGetMateriFromCourse().then((data) => {
        setDataMateri(
          data?.filter((item) => item.judul_course.includes(selectedMateri))
        );
        setIsMateriLoaded(true);
      });
    }
  }, [selectedMateri]);

  useEffect(() => {
    console.log(dataMateri);
  }, [dataMateri]);

  return (
    <>
      <Layout>
        <Text fontSize="xl" fontWeight="bold">
          Materi dari Materi
        </Text>
        <CourseList
          setSelectedCourse={setSelectedMateri}
          setIsCourseSelected={setIsMateriSelected}
        />
        <Box mt="8" mb="8" p="8">
          <Text
            textAlign="center"
            fontSize={isMateriSelected ? "4xl" : "2xl"}
            fontWeight="bold"
            mb="4"
          >
            {" "}
            {isMateriSelected
              ? `Materi untuk ${selectedMateri || "Materi"}`
              : "Harap pilih topik diatas terlebih dahulu"}{" "}
          </Text>

          {isMateriLoaded ? (
            <Stack spacing={4}>
              {dataMateri.map((item, id) => (
                <Box key={id} bg="gray.800" p="2em">
                  <Flex justifyContent="space-between">
                    <Box width="80%">
                      <Text fontSize="xl" fontWeight="bold">
                        {item.Materi}
                      </Text>
                      <Text fontSize="md" mt="1em">
                        {item.materi}
                      </Text>
                    </Box>
                    <Button
                      m="auto 0"
                      colorScheme="red"
                      onClick={() => handleOpenModal("delete", item)}
                    >
                      Hapus{" "}
                    </Button>
                  </Flex>
                </Box>
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
          selectedEntity={selectedMateri}
          title={ucfirst(
            modalRole !== "create"
              ? `${modalRole} Materi ${selectedMateri}`
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
