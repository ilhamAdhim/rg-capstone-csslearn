import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Skeleton,
  Stack,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";
import { toastProps } from "common";
import { getDetailCourse } from "data/admin/CourseCRUD";
import { createMateri, getMateri } from "data/admin/MateriCRUD";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import rehypeSanitize from "rehype-sanitize";
import Layout from "../../../components/layout";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

function MateriTambahAdminPage() {
  useDocumentTitle("Tambah Materi");
  const toast = useToast();
  const currentMode = useColorMode();

  const [valueMarkdownEditor, setValueMarkdownEditor] =
    useState("**Hello world!!!**");
  const [judul, setJudul] = useState("");

  const [dataCourse, setDataCourse] = useState([]);
  const [isMateriLoaded, setIsMateriLoaded] = useState(true);

  const [formObj, setFormObj] = useState({});

  const { idCourse } = useParams();

  const submitMateri = () => {
    console.log("formObj", formObj);
    createMateri(formObj, localStorage.getItem("token"))
      .then((res) => {
        toast({
          title: `Materi untuk ${dataCourse} berhasil ditambahkan`,
          ...toastProps,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setFormObj({
      id_course: idCourse,
      materi: valueMarkdownEditor,
      title: judul,
    });
  }, [judul, valueMarkdownEditor]);

  useEffect(() => {
    setIsMateriLoaded(false);

    getDetailCourse(idCourse).then((res) => {
      setDataCourse(res.nama_course);
      setIsMateriLoaded(true);
    });
  }, []);

  return (
    <>
      <Layout>
        {isMateriLoaded ? (
          <>
            <Heading fontSize="1.5em" color={"#FF6905"}>
              {" "}
              Tambahkan materi untuk {dataCourse}
            </Heading>

            <Box data-color-mode={currentMode?.colorMode} mt="1em">
              <FormControl>
                <FormLabel>Judul Materi</FormLabel>
                <Input
                  borderColor={"#205375"}
                  variant="outline"
                  color="teal"
                  placeholder="Judul Materi ..."
                  onChange={(e) => setJudul(e.target.value)}
                />
              </FormControl>
              <MDEditor
                value={valueMarkdownEditor}
                onChange={setValueMarkdownEditor}
                previewOptions={{
                  rehypePlugins: [[rehypeSanitize]],
                }}
                height={500}
                style={{ marginTop: "2em" }}
              />
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
