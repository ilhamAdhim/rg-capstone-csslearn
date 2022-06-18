import { Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "components/layout";
import useDocumentTitle from "hooks/useDocumentTitle";

function MateriDetailSiswa() {
  useDocumentTitle("Materi");
  const { idMateri } = useParams();

  useEffect(() => {
    // TODO : fetch detail materi
    // ...
  }, [idMateri]);

  return (
    <>
      <Layout>
        <h1>Materi Detail Siswa</h1>
        <Text>Ini Materi ke {idMateri}</Text>
      </Layout>
    </>
  );
}

export default MateriDetailSiswa;
