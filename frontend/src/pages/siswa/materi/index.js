import { Box, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import CourseListFilter from "components/CourseListFilter";
import Layout from "components/layout";
import TimelineSection from "components/TimelineSection";
import useDocumentTitle from "hooks/useDocumentTitle";

function Materi() {
  useDocumentTitle(`Materi`);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [isCourseSelected, setIsCourseSelected] = useState(false);

  return (
    <>
      <Layout>
        <Heading as="h1"> Let’s Pick The Course </Heading>
        <CourseListFilter
          setSelectedCourse={setSelectedCourse}
          setIsCourseSelected={setIsCourseSelected}
        />
        <Box mt="8" mb="8" p="8">
          <Text
            textAlign="center"
            fontSize={isCourseSelected ? "4xl" : "2xl"}
            fontWeight="bold"
          >
            {" "}
            {isCourseSelected
              ? `${selectedCourse.judul_course}`
              : "Harap pilih topik diatas terlebih dahulu"}{" "}
          </Text>
          {/* // TODO : Timeline / roadmap nya masih berupa design saja   */}
          {isCourseSelected && <TimelineSection />}
        </Box>
      </Layout>
    </>
  );
}

export default Materi;
