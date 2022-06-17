import {
  Button,
  Flex,
  Heading,
  Stack,
  Image,
  Text,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import JumbotronAdd from "../../../components/JumbotronAdd";
import Layout from "../../../components/layout";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

function LatihanAdminPage() {
  useDocumentTitle(`Latihan`);
  const modal = useDisclosure();

  const [selectedPertanyaan, setSelectedPertanyaan] = useState({});
  const [modalRole, setModalRole] = useState("");

  const handleOpenModal = (role, entity = {}) => {
    modal.onOpen();
    setSelectedPertanyaan(entity);
    setModalRole(role);
    console.log("Current Pertanyaan ", entity, " role : ", role);
  };

  return (
    <>
      <Layout>
        <Container maxW={"7xl"}>
          <JumbotronAdd
            text="Tambahkan Latihan CSS Baru untuk dikerjakan"
            buttonText="Tambah Pertanyaan Baru"
            handleOpenModal={handleOpenModal}
          />
        </Container>
      </Layout>
    </>
  );
}

export default LatihanAdminPage;
