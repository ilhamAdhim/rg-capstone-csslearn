import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Home() {
  const [dataTopic, setDataTopic] = useState([]);
  const [isTopicLoaded, setIsTopicLoaded] = useState(false);

  const [selectedTopic, setSelectedTopic] = useState({});

  useEffect(() => {}, []);

  return (
    <>
      Ini home nya siswa
      <Box>hello</Box>
    </>
  );
}

export default Home;
