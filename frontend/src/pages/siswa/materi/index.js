import {
  Box,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import CourseList from "../../../components/CourseList";
import Layout from "../../../components/layout";
import TimelineSection from "../../../components/TimelineSection";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

function Materi() {
  useDocumentTitle(`Materi`);
  const [selectedTopic, setSelectedTopic] = useState({});
  const [isTopicSelected, setIsTopicSelected] = useState(false);

  return (
    <>
      <Layout>
        <Heading as="h1"> Let’s Pick The Course </Heading>
        <CourseList
          setSelectedTopic={setSelectedTopic}
          setIsTopicSelected={setIsTopicSelected}
        />
        <Box mt="8" mb="8" p="8">
          <Text
            textAlign="center"
            fontSize={isTopicSelected ? "4xl" : "2xl"}
            fontWeight="bold"
          >
            {" "}
            {isTopicSelected
              ? `${selectedTopic}`
              : "Harap pilih topik diatas terlebih dahulu"}{" "}
          </Text>
          {/* // TODO : Timeline / roadmap nya masih berupa design saja   */}
          {isTopicSelected && <TimelineSection />}
        </Box>
      </Layout>
    </>
  );
}

export default Materi;
