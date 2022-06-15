import { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import AdminCourse from "./AdminCourse";

import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useDisclosure,
  Skeleton,
  useToast,
} from "@chakra-ui/react";
import ModalCustom from "../../../components/ModalCustom";
import { ucfirst } from "../../../common";
import { mockGetCourse } from "../../../data/admin/CourseCRUD";

function CourseAdminPage() {
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
      title: `Course ${selectedCourse} berhasil diubah`,
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
      title: `Course ${selectedCourse} berhasil dihapus`,
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
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
              >
                <Text as={"span"} color={"#205375"}>
                  Tambahkan Course CSS Baru untuk diikuti
                </Text>
              </Heading>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={40}
                  colorScheme={"green"}
                  bg={"#3FCD1B"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{ bg: "green.300" }}
                  onClick={() => handleOpenModal("create")}
                >
                  Tambah Course Baru
                </Button>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Flex bg={"#205375"} flex={1}></Flex>
              <Image
                alt={"Add image"}
                align={"center"}
                w="200px"
                src={"https://www.linkpicture.com/q/3d-fluency-add-file_2.png"}
              />
            </Flex>
          </Stack>

          <Heading color={"#FF6905"}>List Course </Heading>
          {isCourseLoaded ? (
            <AdminCourse
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
                ? `${modalRole} course ${selectedCourse}`
                : `Tambah Course baru`
            )}
          >
            Modal custom nih {modalRole}
          </ModalCustom>
        </Container>
      </Layout>
    </>
  );
}

export default CourseAdminPage;
