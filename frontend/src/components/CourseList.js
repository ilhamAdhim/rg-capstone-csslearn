import {
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function CourseList({ dataCourse, handleOpenModal, ...props }) {
  const colorModeStack = useColorModeValue("#D4EDF8", "gray.900");
  const titleColorMode = useColorModeValue("gray.700", "gray.400");

  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(localStorage.getItem("current_role"));
    console.log("Hehe lagi");
  }, []);

  return (
    <>
      {/* Ini UI Per course */}
      {dataCourse?.map((course, id) => (
        <Stack
          key={id}
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "100%", md: "100%" }}
          height={{ sm: "100%", md: "20rem" }}
          direction={{ base: "column", md: "row" }}
          bg={colorModeStack}
          boxShadow={"2xl"}
          padding={4}
          my="6"
        >
          <Flex flex={1} bg="blue.200">
            <Image
              // borderRadius="full"
              objectFit="contain"
              boxSize="100%"
              src={
                "https://www.linkpicture.com/q/3d-flame-man-in-suit-talking-to-artificial-intelligence-assistant.png"
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {course.nama_course || "Ini title"}
            </Heading>

            <Text color={titleColorMode} px={3}>
              {course.content ||
                `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry`}
            </Text>

            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.500"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.600",
                }}
                onClick={() =>
                  role === "siswa"
                    ? props.handlePilihTopik(course)
                    : handleOpenModal("update", course)
                }
              >
                {role === "siswa" ? "Pilih Topik" : "Update Course"}
              </Button>

              {role === "admin" && (
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"red.500"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "red.500",
                  }}
                  _focus={{
                    bg: "red.600",
                  }}
                  onClick={() => handleOpenModal("delete", course)}
                >
                  Delete course
                </Button>
              )}
            </Stack>
          </Stack>
        </Stack>
      ))}
    </>
  );
}
