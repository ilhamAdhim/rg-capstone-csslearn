import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";

export default function Latihan() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"flex-start"}
        mt={8}
      >
        <Text>Filter berdasarkan course</Text>
        <Select
          borderColor={"#33A9DC"}
          variant="outline"
          color="gray.400"
          placeholder="CSS Intro"
          size="md"
          width={40}
        />
      </Stack>

      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={1000}
        height={200}
        bg={useColorModeValue("#D4EDF8", "gray.900")}
        boxShadow={"2xl"}
        mb={20}
        mt={20}
        ml={6}
      >
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          p={1}
          pr={20}
          pl={12}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Pertanyaan. 1
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
        w={1000}
        height={200}
        bg={useColorModeValue("#D4EDF8", "gray.900")}
        boxShadow={"2xl"}
        mb={20}
        mt={20}
        ml={6}
      >
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          p={1}
          pr={20}
          pl={12}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Pertanyaan. 2
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
        w={1000}
        height={200}
        bg={useColorModeValue("#D4EDF8", "gray.900")}
        boxShadow={"2xl"}
        mb={20}
        mt={20}
        ml={6}
      >
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          p={1}
          pr={20}
          pl={12}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Pertanyaan. 3
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
        w={1000}
        height={200}
        bg={useColorModeValue("#D4EDF8", "gray.900")}
        boxShadow={"2xl"}
        mb={20}
        mt={20}
        ml={6}
      >
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          p={1}
          pr={20}
          pl={12}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Pertanyaan. 4
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
        w={1000}
        height={200}
        bg={useColorModeValue("#D4EDF8", "gray.900")}
        boxShadow={"2xl"}
        mb={20}
        mt={20}
        ml={6}
      >
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          p={1}
          pr={20}
          pl={12}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Pertanyaan. 5
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
