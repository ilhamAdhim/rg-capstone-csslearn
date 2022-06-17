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

export default function PilihTopik() {
  return (
    <Container maxW={"7xl"}>
      <Heading color={"#FF6905"}>Let’s pick your exercise</Heading>

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
              Pilih Topik
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
              Pilih Topik
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
              Pilih Topik
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
