import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "components/layout";
import useDocumentTitle from "hooks/useDocumentTitle";
import MDEditor from "@uiw/react-md-editor";
import { getDetailMateri } from "data/admin/MateriCRUD";
import { Heading, Skeleton, Stack } from "@chakra-ui/react";

function MateriDetailSiswa() {
  useDocumentTitle("Materi");
  const { idMateri } = useParams();
  const [valueMarkdownEditor, setValueMarkdownEditor] = useState(
    "**Ini data materi dari Backend. Untuk role siswa hanya bisa preview materi**"
  );

  const [dataMateri, setDataMateri] = useState({});
  const [isMateriLoaded, setIsMateriLoaded] = useState(false);

  useEffect(() => {
    // TODO : fetch detail materi by ID
    // ...
    getDetailMateri(idMateri)
      .then((res) => {
        setDataMateri(res);
        setIsMateriLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [idMateri]);

  return (
    <>
      <Layout>
        {isMateriLoaded ? (
          <>
            <Heading color={"#FF6905"}> {dataMateri?.title} </Heading>

            <MDEditor.Markdown
              source={dataMateri.materi}
              style={{
                whiteSpace: "pre-wrap",
                padding: "1em",
                marginTop: "1em",
              }}
            />
          </>
        ) : (
          <>
            <Stack spacing={6} mt={6}>
              <Skeleton h="100px" />
              <Skeleton h="300px" />
            </Stack>
          </>
        )}
      </Layout>
    </>
  );
}

export default MateriDetailSiswa;
