import { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import Latihan from "./Latihan";

import {
  Container,
  Stack,
  Heading,
  useDisclosure,
  Skeleton,
  useToast,
} from "@chakra-ui/react";
import ModalCustom from "../../../components/ModalCustom";
import { ucfirst } from "../../../common";
import ModalPertanyaanUpdate from "../../../components/ModalLatihanContent/ModalPertanyaanUpdate";
import ModalPertanyaanCreate from "../../../components/ModalLatihanContent/ModalPertanyaanCreate";
import ModalPertanyaanDelete from "../../../components/ModalLatihanContent/ModalPertanyaanDelete";

function LatihanAdminPage() {
  useDocumentTitle(`Latihan`);
  const toast = useToast();
  const modal = useDisclosure();

  const [modalRole, setModalRole] = useState("");

  const [dataLatihan, setDataLatihan] = useState([]);
  const [isLatihanLoaded, setIsLatihanLoaded] = useState(false);
  const [selectedLatihan, setSelectedLatihan] = useState({});

  const handleOpenModal = (role, latihan = {}) => {
    modal.onOpen();
    setSelectedLatihan(latihan);
    setModalRole(role);
    console.log("Current Latihan ", latihan, " role : ", role);
  };

  const handleCreateLatihan = () => {
    // TODO : connect endpoint CreateLatihan
    // ...

    toast({
      title: "Latihan baru telah dibuat",
      variant: "solid",
      status: "success",
      isClosable: true,
      duration: 3000,
      position: "top",
    });
  };

  const handleUpdateLatihan = () => {
    // TODO : connect endpoint UpdateLatihan
    // ...

    toast({
      title: `Latihan ${selectedLatihan.judul_Latihan} berhasil diubah`,
      variant: "solid",
      status: "success",
      isClosable: true,
      duration: 3000,
      position: "top",
    });
  };

  const handleDeleteLatihan = () => {
    // TODO : connect endpoint DeleteLatihan
    // ...
    toast({
      title: `Latihan ${selectedLatihan.judul_Latihan} berhasil dihapus`,
      variant: "solid",
      status: "success",
      isClosable: true,
      duration: 3000,
      position: "top",
    });
  };

  useEffect(() => {
    setIsLatihanLoaded(true);
  });

  return (
    <>
      <Layout>
        <Container maxW={"7xl"}>
          <Heading color={"#FF6905"}>List Latihan </Heading>
          {isLatihanLoaded ? (
            <Latihan
              dataLatihan={dataLatihan}
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
                ? handleCreateLatihan
                : modalRole === "update"
                ? handleUpdateLatihan
                : handleDeleteLatihan
            }
            selectedEntity={selectedLatihan}
            title={ucfirst(
              modalRole !== "create"
                ? `${modalRole} Latihan ${selectedLatihan?.judul_latihan}`
                : `Tambah Latihan baru`
            )}
          >
            {modalRole === "update" && (
              <ModalPertanyaanUpdate currentLatihan={selectedLatihan} />
            )}

            {modalRole === "create" && <ModalPertanyaanCreate />}

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
