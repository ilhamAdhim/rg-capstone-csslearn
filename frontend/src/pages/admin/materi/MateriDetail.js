import { Text } from "@chakra-ui/react";
import { useParams } from "react-router";
import Layout from "../../../components/layout";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

function MateriDetailAdminPage() {
  // ? Ini untuk preview materi dan edit materi
  useDocumentTitle("Materi Detail Admin");
  const { idMateri } = useParams();

  return (
    <>
      <Layout>
        Halo ini detail materi admin hehe
        <Text> Ini materi ke {idMateri} </Text>
      </Layout>
    </>
  );
}

export default MateriDetailAdminPage;
