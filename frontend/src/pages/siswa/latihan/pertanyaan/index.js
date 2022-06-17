import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import Layout from "../../../../components/layout";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import KomponenSoal from "../KomponenSoal";

function PengerjaanSoal() {
  useDocumentTitle(`Pertanyaan`);
  const toast = useDisclosure();

  useEffect(() => {}, []);
  return (
    <>
      <Layout>
        <KomponenSoal />
      </Layout>
    </>
  );
}

export default PengerjaanSoal;
