import {
  Box,
  Button,
  Flex,
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

  useEffect(() => {
    // TODO : fetch detail materi by ID
    // ...
    // ? Disini mestinya tempat setValueMarkdownEditor. Menunggu dataMateri
    // ...
  }, []);

  const handleUpdateMateri = () => {
    // TODO : connect endpoint UpdateMateri
    // ? Ini bisa dipindah di folder data/admin/MateriCRUD.js
    // If success :
    toast({
      title: "Materi berhasil diupdate",
      variant: "solid",
      status: "success",
      isClosable: true,
      duration: 3000,
      position: "top",
    });

    // If failed :
    // toast({
    //   title: "Materi gagal diupdate",
    //   status: "error",
    //   isClosable: true,
    //   duration: 3000,
    //   position: "top",
    // });
  };

  return (
    <>
      <Layout>
        {isMateriLoaded ? (
          <>
            <Flex justifyContent="space-between">
              <Text>Halo ini Edit materi ya</Text>
              <Button
                colorScheme="cyan"
                onClick={() => {
                  setIsEditingMateri((prev) => !prev);

                  setIsMateriEdited(true);
                }}
                variant={isEditingMateri ? "outline" : "solid"}
              >
                {isEditingMateri ? "Selesai" : "Edit Materi"}
              </Button>
            </Flex>
            <Box data-color-mode={currentMode?.colorMode}>
              {!isEditingMateri && (
                <MDEditor.Markdown
                  source={valueMarkdownEditor}
                  style={{
                    whiteSpace: "pre-wrap",
                    padding: "1em",
                    marginTop: "1em",
                  }}
                />
              )}

              {isEditingMateri && (
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
