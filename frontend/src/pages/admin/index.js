import Layout from "../../components/layout";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function HomeAdmin() {
  useDocumentTitle("Admin Home");
  return <Layout>Ini HomeAdmin nya admin</Layout>;
}

export default HomeAdmin;
