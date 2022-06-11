import { useState } from "react";
import Layout from "../../../components/layout";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

function Materi() {
  useDocumentTitle(`Materi`);

  const [dataTopic, setDataTopic] = useState([]);
  const [isTopicLoaded, setIsTopicLoaded] = useState(false);

  const [selectedTopic, setSelectedTopic] = useState({});

  return (
    <>
      <Layout>Ini Materi page di siswa</Layout>
    </>
  );
}

export default Materi;
