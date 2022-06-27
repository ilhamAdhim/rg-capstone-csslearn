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
  Flex,
  Select,
  Text,
} from "@chakra-ui/react";
import ModalCustom from "components/ModalCustom";
import { toastProps, ucfirst } from "common";
import ModalPertanyaanUpdate from "components/ModalLatihanContent/ModalPertanyaanUpdate";
import ModalPertanyaanCreate from "components/ModalLatihanContent/ModalPertanyaanCreate";
import ModalPertanyaanDelete from "components/ModalLatihanContent/ModalPertanyaanDelete";
import BoxItem from "components/BoxItem";
import { getCourse } from "data/admin/CourseCRUD";
import {
  deletePertanyaan,
  getPertanyaanByCourseId,
  updatePertanyaan,
} from "data/admin/PertanyaanCRUD";
import { useCookies } from "react-cookie";

function LatihanAdminPage() {
  useDocumentTitle(`latihan`);
  const toast = useToast();
  const modal = useDisclosure();
  const [cookies] = useCookies();
  const [tokenJWT, setTokenJWT] = useState(cookies?.token);

  const [modalRole, setModalRole] = useState("");

  const [dataLatihan, setDataLatihan] = useState([]);
  const [isLatihanLoaded, setIsLatihanLoaded] = useState(false);

  const [dataCourse, setDataCourse] = useState([]);
  const [isCourseLoaded, setIsCourseLoaded] = useState(false);

  const [selectedLatihan, setSelectedLatihan] = useState({});
  const [selectedCourse, setSelectedCourse] = useState("");

  const [formObj, setFormObj] = useState({
    nama_course: "",
    content: "",
  });

  const handleFilterByCourse = (value) => setSelectedCourse(value);

  const handleOpenModal = (role, Latihan = {}) => {
    modal.onOpen();
    setSelectedLatihan(Latihan);
    setModalRole(role);
    console.log("Current Latihan ", Latihan, " role : ", role);
  };

  const handleCreateLatihan = (formObj) => {
    // TODO : connect endpoint CreateLatihan
    // ...

    toast({
      title: "Latihan baru telah dibuat",
      ...toastProps,
    });
  };

  const handleUpdateLatihan = (formObj) => {
    // TODO : connect endpoint UpdateLatihan
    // ...
    updatePertanyaan(formObj?.id_latihan, formObj, tokenJWT)
      .then((res) => {
        toast({
          title: `Latihan ${selectedLatihan.question} berhasil diubah`,
          ...toastProps,
        });
      })
      .catch(() => console.log("Belum bisa update latihan"));
  };

  const handleDeleteLatihan = (idObj) => {
    // TODO : connect endpoint DeleteLatihan
    // ...
    deletePertanyaan(idObj, tokenJWT)
      .then(() => {
        toast({
          title: `Latihan ${selectedLatihan.question} berhasil dihapus`,
          ...toastProps,
        });
        fetchDataCourse();
      })
      .catch(() => console.log("Belum bisa delete course"));
  };

  const fetchDataCourse = useCallback(() => {
    getCourse().then((res) => {
      setDataCourse(res.course);
      setIsCourseLoaded(true);
    });
  }, []);

  const fetchDataLatihanByCourseId = useCallback(() => {
    if (selectedCourse !== "")
      getPertanyaanByCourseId(selectedCourse).then((res) => {
        setDataLatihan(res.getlatihan);
        setIsLatihanLoaded(true);
      });
  }, [selectedCourse]);

  useEffect(() => {
    fetchDataLatihanByCourseId();
  }, [fetchDataLatihanByCourseId]);

  useEffect(() => {
    fetchDataCourse();
  }, [fetchDataCourse]);

  useEffect(() => {
    setTokenJWT(localStorage.getItem("token"));
  }, []);

  return (
    <>
      <Layout>
        <Container maxW={"7xl"}>
          <Heading color={"#FF6905"}>List Latihan </Heading>

          <Flex mt={8} justifyContent="space-between" direction={"row"}>
            <Text>Filter berdasarkan course</Text>
            {isCourseLoaded && (
              <Select
                size="md"
                width={40}
                color="gray.400"
                variant="outline"
                borderColor={"#33A9DC"}
                placeholder="Pilih Course ..."
                onChange={(e) => handleFilterByCourse(e.target.value)}
              >
                {dataCourse.map((item) => (
                  <option value={item.id_course} key={item?.id_latihan}>
                    {item.nama_course}
                  </option>
                ))}
              </Select>
            )}
          </Flex>
          {isLatihanLoaded ? (
            <>
              <Flex gap="1em" flexDir="column" mt="1em">
                {dataLatihan?.map((item) => (
                  <BoxItem
                    hasEdit
                    hasDelete
                    item={item}
                    key={item.id}
                    handleOpenModal={handleOpenModal}
                    entity="Pertanyaan"
                  />
                ))}
              </Flex>
            </>
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
                ? () => handleCreateLatihan(formObj)
                : modalRole === "update"
                ? () => handleUpdateLatihan(formObj)
                : () => handleDeleteLatihan(selectedLatihan?.id_latihan)
            }
            selectedEntity={selectedLatihan}
            title={ucfirst(
              modalRole !== "create"
                ? `${modalRole} Latihan `
                : `Tambah Latihan baru`
            )}
          >
            {modalRole === "update" && (
              <ModalPertanyaanUpdate
                formObj={formObj}
                setFormObj={setFormObj}
                currentLatihan={selectedLatihan}
              />
            )}

            {modalRole === "create" && (
              <ModalPertanyaanCreate setFormObj={setFormObj} />
            )}

            {modalRole === "delete" && (
              <ModalPertanyaanDelete currentLatihan={selectedLatihan} />
            )}
          </ModalCustom>
        </Container>
      </Layout>
    </>
  );
}

export default LatihanAdminPage;
