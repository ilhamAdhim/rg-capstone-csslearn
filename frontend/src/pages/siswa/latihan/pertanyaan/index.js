import { useEffect } from "react";
import Layout from "../../../../components/layout";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";

function PengerjaanSoal() {
  useDocumentTitle(`Pertanyaan`);

  useEffect(() => {}, []);
  return (
    <>
      <Layout> Ini Pengerjaan soal ya. Irsyat ngoding disini</Layout>
    </>
  );
}

export default PengerjaanSoal;
