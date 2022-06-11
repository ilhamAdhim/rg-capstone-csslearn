import Layout from "../../../components/layout";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

function LatihanAdminPage() {
  useDocumentTitle(`Latihan`);

  return (
    <>
      <Layout> ini latihan page di admin </Layout>
    </>
  );
}

export default LatihanAdminPage;
