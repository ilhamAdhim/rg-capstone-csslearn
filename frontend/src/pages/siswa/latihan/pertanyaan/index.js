import { useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import Layout from "components/layout";
import useDocumentTitle from "hooks/useDocumentTitle";
import KomponenSoal from "../KomponenSoal";

function PengerjaanSoal() {
  useDocumentTitle(`Pertanyaan`);
  const toast = useToast();

  useEffect(() => {
    toast({
      title: "Selamat mengerjakan !",
      variant: "solid",
      status: "success",
      isClosable: true,
      duration: 3000,
      position: "top",
    });
  }, []);

  return (
    <>
      <Layout>
        <KomponenSoal />
      </Layout>
    </>
  );
}

export default PengerjaanSoal;
