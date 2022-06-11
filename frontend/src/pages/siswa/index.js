import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Layout from "../../components/layout";

function HomeSiswa() {
  const [dataTopic, setDataTopic] = useState([]);
  const [isTopicLoaded, setIsTopicLoaded] = useState(false);

  const [selectedTopic, setSelectedTopic] = useState({});

  useEffect(() => {}, []);

  return <Layout>Hello ini halaman home siswa</Layout>;
}

export default HomeSiswa;
