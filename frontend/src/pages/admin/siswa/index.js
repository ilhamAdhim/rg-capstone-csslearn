import Layout from "../../../components/layout";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

function DaftarSiswa() {
  useDocumentTitle("Daftar Siswa");

  return (
    <>
      <Layout>Ini daftar siswa di admin page</Layout>
    </>
  );
}

export default DaftarSiswa;
