import {
  Box,
  Button,
  Flex,
  Skeleton,
  Stack,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import rehypeSanitize from "rehype-sanitize";
import Layout from "../../../components/layout";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

function MateriTambahAdminPage() {
  useDocumentTitle("Tambah Materi");
  const toast = useToast();
  const currentMode = useColorMode();
  const [valueMarkdownEditor, setValueMarkdownEditor] =
    useState("**Hello world!!!**");

  const [dataMateri, setDataMateri] = useState([]);
  const [isMateriLoaded, setIsMateriLoaded] = useState(true);

  const submitMateri = () => {
    // TODO : connect endpoint CreateMateri

    // ? Ini bisa dipindah di folder data/admin/MateriCRUD.js
    // If success :
    toast({
      title: "Materi berhasil ditambahkan",
      variant: "solid",
      status: "success",
      isClosable: true,
      duration: 3000,
      position: "top",
    });

    // If failed :
    // toast({
    //   title: "Materi gagal ditambahkan",
    //   status: "error",
    //   isClosable: true,
    //   duration: 3000,
    //   position: "top",
    // });
  };

  useEffect(() => {
    // TODO : Fetch data materi by ID.
    // ...
  }, []);

  //TODO : Set Form values
  // ...

  return (
    <>
      <Layout>
        {isMateriLoaded ? (
          <>
            Halo ini tambah materi ya
            <Box data-color-mode={currentMode?.colorMode}>
              <MDEditor
                value={valueMarkdownEditor}
                onChange={setValueMarkdownEditor}
                previewOptions={{
                  rehypePlugins: [[rehypeSanitize]],
                }}
                height={500}
                style={{ marginTop: "2em" }}
              />
              {/* <MDEditor.Markdown
     source={value}
     style={{ whiteSpace: "pre-wrap" }}
   /> */}
            </Box>
          </>
        ) : (
          <Stack spacing="4">
            <Skeleton h={30} w={250} />
            <Skeleton h={300} />
          </Stack>
        )}

        <Flex justifyContent="end">
          <Button
            mt={4}
            variant="outline"
            colorScheme="cyan"
            onClick={() => submitMateri()}
          >
            Tambah Materi
          </Button>
        </Flex>
      </Layout>
    </>
  );
}

export default MateriTambahAdminPage;
