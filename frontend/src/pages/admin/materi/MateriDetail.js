import {
  Box,
  Button,
  Flex,
  Heading,
  Skeleton,
  Stack,
  Text,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router";
import Layout from "components/layout";
import useDocumentTitle from "hooks/useDocumentTitle";
import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { getDetailMateri } from "data/admin/MateriCRUD";
import { toastProps } from "common";

function MateriDetailAdminPage() {
  // ? Ini untuk preview materi dan edit materi

  useDocumentTitle("Materi Detail Admin");
  const toast = useToast();
  const currentMode = useColorMode();
  const [valueMarkdownEditor, setValueMarkdownEditor] = useState(
    "**Ini data materi dari Backend. Terus mau di edit / preview terserah**"
  );

  const [dataMateri, setDataMateri] = useState([]);
  const [isMateriLoaded, setIsMateriLoaded] = useState(true);

  const [isEditingMateri, setIsEditingMateri] = useState(false);
  const [isMateriEdited, setIsMateriEdited] = useState(false);

  const { idMateri } = useParams();

  // Ini untuk create dan update
  const [formObj, setFormObj] = useState({
    nama_course: "",
    content: "",
  });

  useEffect(() => {
    getDetailMateri(idMateri)
      .then((res) => {
        setDataMateri(res);
        setIsMateriLoaded(true);

        setFormObj({
          nama_course: res.title,
          content: res.materi,
        });

        setValueMarkdownEditor(res.materi);
      })
      .catch((err) => console.log(err));
  }, [idMateri]);

  useEffect(() => {
    setFormObj((prev) => {
      return {
        ...prev,
        content: valueMarkdownEditor,
      };
    });
  }, [valueMarkdownEditor]);

  const handleUpdateMateri = () => {
    // TODO : connect endpoint UpdateMateri
    console.log("Akan dikirim ke BE", formObj);
    toast({
      title: "Materi berhasil diupdate",
      ...toastProps,
    });
  };

  return (
    <>
      <Layout>
        {isMateriLoaded ? (
          <>
            <Flex justifyContent="space-between">
              <Heading color={"#FF6905"}> {dataMateri?.title} </Heading>
              <Button
                colorScheme="cyan"
                onClick={() => {
                  setIsMateriEdited(true);
                  setIsEditingMateri((prev) => !prev);
                }}
                variant={isEditingMateri ? "outline" : "solid"}
              >
                {isEditingMateri ? "Selesai" : "Edit Materi"}
              </Button>
            </Flex>
            <Box data-color-mode={currentMode?.colorMode}>
              {!isEditingMateri ? (
                <MDEditor.Markdown
                  source={valueMarkdownEditor}
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: "1em",
                    marginTop: "1em",
                  }}
                />
              ) : (
                <MDEditor
                  value={valueMarkdownEditor}
                  onChange={setValueMarkdownEditor}
                  previewOptions={{
                    rehypePlugins: [[rehypeSanitize]],
                  }}
                  height={500}
                  style={{ marginTop: "2em" }}
                />
              )}
            </Box>
          </>
        ) : (
          <Stack spacing="4">
            <Skeleton h={30} w={250} />
            <Skeleton h={300} />
          </Stack>
        )}

        {isMateriEdited && (
          <Button mt="1em" onClick={handleUpdateMateri}>
            Simpan Perubahan
          </Button>
        )}
      </Layout>
    </>
  );
}

export default MateriDetailAdminPage;
