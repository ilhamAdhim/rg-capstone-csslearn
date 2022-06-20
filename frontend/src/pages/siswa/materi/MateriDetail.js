import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "components/layout";
import useDocumentTitle from "hooks/useDocumentTitle";
import MDEditor from "@uiw/react-md-editor";

function MateriDetailSiswa() {
  useDocumentTitle("Materi");
  const { idMateri } = useParams();
  const [valueMarkdownEditor, setValueMarkdownEditor] = useState(
    "**Ini data materi dari Backend. Untuk role siswa hanya bisa preview materi**"
  );

  useEffect(() => {
    // TODO : fetch detail materi by ID
    // ...
  }, [idMateri]);

  return (
    <>
      <Layout>
        <h1>Materi Detail Siswa</h1>
        <MDEditor.Markdown
          source={valueMarkdownEditor}
          style={{
            whiteSpace: "pre-wrap",
            padding: "1em",
            marginTop: "1em",
          }}
        />
      </Layout>
    </>
  );
}

export default MateriDetailSiswa;
