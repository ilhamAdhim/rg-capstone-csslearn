import {
  Box,
  Divider,
  Flex,
  Image,
  Skeleton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { getCourse, mockGetCourse } from "data/admin/CourseCRUD";

function CourseListFilter({
  setSelectedCourse,
  setIsCourseSelected,
  ...props
}) {
  const bgColorCourse = useColorModeValue("gray.200", "cyan.800");
  const boxShadowColorCourse = useColorModeValue(
    "1px 1px 8px gray",
    "1px 1px 8px cyan"
  );

  const [dataCourse, setDataCourse] = useState([]);
  const [isCourseLoaded, setIsCourseLoaded] = useState(false);

  useEffect(() => {
    // mockGetCourse().then((data) => {
    //   setDataCourse(data);
    //   setIsCourseLoaded(true);
    // });

    getCourse().then((res) => {
      setDataCourse(res.course);
      setIsCourseLoaded(true);
    });
  }, []);

  const onChangeCourse = (course) => {
    setIsCourseSelected(true);
    setSelectedCourse(course);
  };

  return (
    <>
      {isCourseLoaded ? (
        <Flex gap="1em" mt="8" mb="8" px="4" flexDir={["column", "row"]}>
          {dataCourse.map((course, id) => (
            <Box
              _focus={{ borderBottom: "3px solid red" }}
              onClick={() => onChangeCourse(course)}
              as="button"
              bg={bgColorCourse}
              p="4"
              // borderRadius="10"
              key={id}
              flex="1"
              boxShadow={boxShadowColorCourse}
            >
              <Flex gap="4" p="4" justifyContent="space-around">
                <Box flex="1">
                  <Image
                    alt={"Login Image"}
                    objectFit={"cover"}
                    src={
                      "https://i.ibb.co/jGk9x4j/3d-flame-business-woman-using-a-phone-with-fingerprint-scanner.png"
                    }
                  />
                </Box>
                <Box flex="1">
                  <Text fontWeight="bold">{course.nama_course}</Text>
                  <Divider my="4" />
                  <Text textAlign="justify">{course.content}</Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Flex>
      ) : (
        <Flex gap="1em" justifyContent="center" mt="8" mb="8">
          <Skeleton h="10vw" w="20vw" flex="1" />
          <Skeleton h="10vw" w="20vw" flex="1" />
          <Skeleton h="10vw" w="20vw" flex="1" />
        </Flex>
      )}
    </>
  );
}

export default CourseListFilter;
