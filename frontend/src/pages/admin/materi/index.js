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
import Layout from "components/layout";
import ModalCustom from "components/ModalCustom";
import { mockGetMateriFromCourse } from "data/admin/MateriCRUD";
import useDocumentTitle from "hooks/useDocumentTitle";
import { ucfirst } from "common";
import CourseListFilter from "components/CourseListFilter";
import { useNavigate } from "react-router-dom";
import BoxItem from "components/BoxItem";

function MateriAdminPage() {
  useDocumentTitle("Materi");
  const toast = useToast();
  const modal = useDisclosure();
  const navigate = useNavigate();

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

  const goCreateMateriPage = () => {
    navigate({
      pathname: "/admin/materi/tambah",
      search: `?courseId=${selectedMateri?.id}`,
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
            item.course.includes(selectedMateri.judul_course)
          )
        );
        setIsMateriLoaded(true);
      });
    }
  }, [selectedMateri]);

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
                <BoxItem
                  hasPreview
                  hasDelete
                  key={id}
                  item={item}
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
        </Box>

        <ModalCustom
          role={modalRole}
          isOpen={modal.isOpen}
          onClose={modal.onClose}
          onHandleSubmit={modalRole === "delete" && handleDeleteMateri}
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
