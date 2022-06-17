import Layout from "../../../components/layout";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import PengerjaanSoal from "./PengerjaanSoal";

function Latihan() {
  useDocumentTitle(`Latihan`);

  return (
    <>
      <Layout>
        <PengerjaanSoal></PengerjaanSoal>
      </Layout>
    </>
  );
}

export default Latihan;
