import { useEffect } from "react";
import Layout from "../../../../components/layout";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";

function Pertanyaan() {
  useDocumentTitle(`Pertanyaan`);

  useEffect(() => {}, []);
  return (
    <>
      <Layout> Ini Pertanyaan</Layout>
    </>
  );
}

export default Pertanyaan;
