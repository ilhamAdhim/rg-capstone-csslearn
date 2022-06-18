import {
  Box,
  Button,
  Flex,
  Skeleton,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import ModalCustom from "../../../components/ModalCustom";
import { mockGetMateriFromCourse } from "../../../data/admin/MateriCRUD";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { ucfirst } from "../../../common";
import CourseListFilter from "../../../components/CourseListFilter";
import { FaEye, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function MateriAdminPage() {
  useDocumentTitle("Materi");
  const toast = useToast();
  const modal = useDisclosure();
  const navigate = useNavigate();

  const boxMateriBg = useColorModeValue("gray.200", "gray.800");
  const [isMateriSelected, setIsMateriSelected] = useState(false);

  const [dataMateri, setDataMateri] = useState([]);
  const [isMateriLoaded, setIsMateriLoaded] = useState(false);
  const [selectedMateri, setSelectedMateri] = useState({});

  const [modalRole, setModalRole] = useState("");

  const handleOpenModal = (role, entity = {}) => {
    modal.onOpen();
    if (role !== "create") setSelectedMateri(entity);
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

  const goCreateMateriPage = () => {
    navigate({
      pathname: "/admin/materi/tambah",
      search: `?courseId=${selectedMateri?.id}`,
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
        // ? Ini kalau endpointnya gak terbalik, bisa langsung setDataMateri(data)
        setDataMateri(
          data?.filter((item) =>
            item.judul_course.includes(selectedMateri.judul_course)
          )
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
          Materi dari Course
        </Text>
        <CourseListFilter
          setSelectedCourse={setSelectedMateri}
          setIsCourseSelected={setIsMateriSelected}
        />
        <Box mt="8" mb="8" p="8">
          {!isMateriSelected ? (
            <Text mb="4" fontWeight="bold" textAlign="center" fontSize="2xl">
              Harap pilih topik diatas terlebih dahulu
            </Text>
          ) : (
            <Flex justifyContent="space-between">
              <Text mb="4" fontWeight="bold" fontSize="2xl">
                Materi untuk {selectedMateri.judul_course || "Materi"}
              </Text>
              <Button colorScheme="cyan" onClick={() => goCreateMateriPage()}>
                Tambah Materi
              </Button>
            </Flex>
          )}

          {isMateriLoaded ? (
            <Stack spacing={4}>
              {dataMateri.map((item, id) => (
                <Box key={id} bg={boxMateriBg} p="2em">
                  <Flex
                    gap="1em"
                    justifyContent="space-between"
                    flexDir={["column", "row"]}
                  >
                    <Box width="80%">
                      <Text fontSize="xl" fontWeight="bold">
                        {item.course}
                      </Text>
                      <Text fontSize="md" mt="1em">
                        {item.materi}
                      </Text>
                    </Box>
                    <Flex m="auto 0" gap="1em">
                      <Box>
                        <Tooltip
                          hasArrow
                          placement="top"
                          label="Preview Materi"
                        >
                          {/* // ! Masih mock lho ya */}
                          <Link to={`${id + 1}`}>
                            <Button
                              flex={1}
                              colorScheme="blue"
                              // onClick={() => handleOpenModal("delete", item)}
                              children={<FaEye />}
                            />
                          </Link>
                        </Tooltip>
                      </Box>
                      <Box>
                        <Tooltip hasArrow placement="top" label="Delete Materi">
                          <Button
                            flex={1}
                            colorScheme="red"
                            onClick={() => handleOpenModal("delete", item)}
                            children={<FaTrash />}
                          />
                        </Tooltip>
                      </Box>
                    </Flex>
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
              ? `${modalRole} Materi di ${selectedMateri?.judul_course}`
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
