import { Box, Divider, Flex, Image, Skeleton, Text } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { mockGetCourse } from "../data/admin/CourseCRUD";

function CourseList({ setSelectedCourse, setIsCourseSelected, ...props }) {
  const [dataCourse, setDataCourse] = useState([]);
  const [isCourseLoaded, setisCourseLoaded] = useState(false);

  useEffect(() => {
    mockGetCourse().then((data) => {
      setDataCourse(data);
      setisCourseLoaded(true);
    });
  }, []);

  const onChangeTopic = (topic) => {
    setIsCourseSelected(true);
    setSelectedCourse(topic);
  };

  return (
    <>
      {isCourseLoaded ? (
        <Flex overflow="auto" gap="1em" mt="8" mb="8">
          {dataCourse.map((topic, id) => (
            <Box
              _active={{ bg: "teal.500" }}
              _focus={{ borderBottom: "3px solid red" }}
              onClick={() => onChangeTopic(topic)}
              as="button"
              bg="cyan.800"
              p="4"
              borderRadius="10"
              key={id}
              flex="1"
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
                  {topic}
                  <Divider my="4" />
                  <Text textAlign="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Flex>
      ) : (
        <Flex gap="1em" justifyContent="center" mt="8" mb="8">
          <Skeleton h="100px" w="200px" flex="1" />
          <Skeleton h="100px" w="200px" flex="1" />
          <Skeleton h="100px" w="200px" flex="1" />
        </Flex>
      )}
    </>
  );
}

export default CourseList;
