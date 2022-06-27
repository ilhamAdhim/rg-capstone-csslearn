import React, { useEffect, useState } from "react";
import Layout from "components/layout";
import useDocumentTitle from "hooks/useDocumentTitle";
import DaftarSiswa from "./DaftarSiswa";

import {
  Container,
  Stack,
  Heading,
  useDisclosure,
  Skeleton,
  useToast,
} from "@chakra-ui/react";
import ModalCustom from "components/ModalCustom";
import ModalSiswaPreview from "components/ModalSiswaContent/ModalSiswaPreview";

function DaftarSiswaAdminPage() {
  useDocumentTitle(`DaftarSiswa`);
  const toast = useToast();
  const modal = useDisclosure();

  const [modalRole, setModalRole] = useState("");

  const [isDaftarSiswaLoaded, setIsDaftarSiswaLoaded] = useState(false);
  const [selectedDaftarSiswa, setSelectedDaftarSiswa] = useState({});

  const handleOpenModal = (role, siswa = {}) => {
    modal.onOpen();
    setSelectedDaftarSiswa(siswa);
    setModalRole(role);
  };

  const handleSiswaPreview = () => {
    toast({
      variant: "solid",
      status: "success",
      isClosable: true,
      duration: 3000,
      position: "top",
    });
  };

  useEffect(() => {
    setIsDaftarSiswaLoaded(true);
  }, []);

  return (
    <>
      <Layout>
        <Container maxW={"7xl"}>
          <Heading color={"#FF6905"}>Daftar Siswa </Heading>
          {isDaftarSiswaLoaded ? (
            <DaftarSiswa handleOpenModal={handleOpenModal} />
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
            onHandleSubmit={modalRole === "preview" ? handleSiswaPreview : null}
            selectedEntity={selectedDaftarSiswa}
          >
            {modalRole === "preview" && (
              <ModalSiswaPreview currentSiswa={selectedDaftarSiswa} />
            )}
          </ModalCustom>
        </Container>
      </Layout>
    </>
  );
}

export default DaftarSiswaAdminPage;
