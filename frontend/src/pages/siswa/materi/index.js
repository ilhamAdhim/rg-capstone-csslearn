import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CourseListFilter from "components/CourseListFilter";
import Layout from "components/layout";
import TimelineSection from "components/TimelineSection";
import useDocumentTitle from "hooks/useDocumentTitle";
import { mockGetMateriFromCourse } from "data/admin/MateriCRUD";

function Materi() {
  useDocumentTitle(`Materi`);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [isCourseSelected, setIsCourseSelected] = useState(false);

  const [materiByCourse, setMateriByCourse] = useState([]);
  const [isMateriLoaded, setIsMateriLoaded] = useState(false);

  useEffect(() => {
    // TODO : fetch materi by courseId
    // ...
    mockGetMateriFromCourse().then((response) => {
      console.log(response);
      console.log(selectedCourse);

      setMateriByCourse(
        response?.filter((item) =>
          item.course.includes(selectedCourse.judul_course)
        )
      );
      setIsMateriLoaded(true);
    });
  }, [selectedCourse]);

  useEffect(() => {
    console.log(materiByCourse);
  }, [materiByCourse]);

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
          {isCourseSelected && (
            <TimelineSection
              dataSource={materiByCourse}
              isDataLoaded={isMateriLoaded}
            />
          )}
        </Box>
      </Layout>
    </>
  );
}

export default Materi;
