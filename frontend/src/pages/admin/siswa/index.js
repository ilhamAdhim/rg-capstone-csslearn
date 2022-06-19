import { useEffect, useState } from "react";
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
// import { mockGetDaftarSiswa } from "data/admin/PertanyaanCRUD";
import ModalSiswaPreview from "components/ModalSiswaContent/ModalSiswaPreview";

function DaftarSiswaAdminPage() {
  useDocumentTitle(`DaftarSiswa`);
  const toast = useToast();
  const modal = useDisclosure();

  const [modalRole, setModalRole] = useState("");

  const [dataDaftarSiswa, setDataDaftarSiswa] = useState([]);
  const [isDaftarSiswaLoaded, setIsDaftarSiswaLoaded] = useState(false);
  const [selectedDaftarSiswa, setSelectedDaftarSiswa] = useState({});

  const handleOpenModal = (role, DaftarSiswa = {}) => {
    modal.onOpen();
    setSelectedDaftarSiswa(DaftarSiswa);
    setModalRole(role);
    console.log("Current DaftarSiswa ", DaftarSiswa, " role : ", role);
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
          <Heading color={"#FF6905"}>List DaftarSiswa </Heading>
          {isDaftarSiswaLoaded ? (
            <DaftarSiswa
              dataDaftarSiswa={dataDaftarSiswa}
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
            onHandleSubmit={"preview" === modalRole ? handleSiswaPreview : null}
            selectedEntity={selectedDaftarSiswa}
          >
            {modalRole === "preview" && (
              <ModalSiswaPreview currentDaftarSiswa={selectedDaftarSiswa} />
            )}
          </ModalCustom>
        </Container>
      </Layout>
    </>
  );
}

export default DaftarSiswaAdminPage;
