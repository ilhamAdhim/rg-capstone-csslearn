import Layout from "../../components/layout";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function ProfileAdminPage() {
  useDocumentTitle("Profil Admin");
  return (
    <>
      <Layout>Ini profil admin page</Layout>
    </>
  );
}

export default ProfileAdminPage;
