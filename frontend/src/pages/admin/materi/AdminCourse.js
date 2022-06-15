import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function AdminCourse() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text as={"span"} color={"#205375"}>
              Click this below button for adding new course
            </Text>
          </Heading>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={40}
              colorScheme={"green"}
              bg={"#3FCD1B"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{ bg: "green.300" }}
            >
              Add new course
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Flex bg={"#205375"} flex={1}></Flex>
          <Image
            alt={"Add image"}
            align={"center"}
            w={"80%"}
            h={"80%"}
            src={"https://www.linkpicture.com/q/3d-fluency-add-file_2.png"}
          />
        </Flex>
      </Stack>

      <Heading color={"#FF6905"}>List courses</Heading>

      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "100%" }}
        height={{ sm: "100%", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("#D4EDF8", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
        mb={20}
        mt={20}
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
            CSS Intro
          </Heading>

          <Text color={useColorModeValue("gray.700", "gray.400")} px={3}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
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
            >
              Update course
            </Button>
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
            >
              Delete course
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "100%" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("#D4EDF8", "gray.900")}
        boxShadow={"2xl"}
        mb={20}
        mt={20}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="contain"
            boxSize="100%"
            src={
              "https://www.linkpicture.com/q/3d-flame-artificial-intelligence-assistant-with-laptop-and-task-list.png"
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
            CSS Property
          </Heading>

          <Text color={useColorModeValue("gray.700", "gray.400")} px={3}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
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
            >
              Update course
            </Button>
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
            >
              Delete course
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "100%" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("#D4EDF8", "gray.900")}
        boxShadow={"2xl"}
        mb={20}
        mt={20}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="contain"
            boxSize={"100%"}
            src={
              "https://www.linkpicture.com/q/3d-flame-business-woman-standing-next-to-her-desk-1.png"
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
            CSS Selector
          </Heading>

          <Text color={useColorModeValue("gray.700", "gray.400")} px={3}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
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
            >
              Update course
            </Button>
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
            >
              Delete course
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
