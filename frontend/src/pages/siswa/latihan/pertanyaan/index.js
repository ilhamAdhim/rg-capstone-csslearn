import React from "react";
import Layout from "components/layout";
import useDocumentTitle from "hooks/useDocumentTitle";
import KomponenSoal from "../KomponenSoal";

function PengerjaanSoal() {
  useDocumentTitle(`Pertanyaan`);

  return (
    <>
      <Layout>
        <KomponenSoal />
      </Layout>
    </>
  );
}

export default PengerjaanSoal;
