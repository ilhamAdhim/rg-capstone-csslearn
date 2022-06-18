import {
  Container,
  Stack,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Select,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Latihan() {
  const buttonSize = useBreakpointValue(["lg", "md"]);
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
        height={[300, 200]}
        bg={useColorModeValue("#D4EDF8", "gray.900")}
        boxShadow={"2xl"}
        mb={8}
        mt={8}
        ml={6}
      >
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="space-around  "
          alignItems="center"
          p={1}
          pr={20}
          pl={12}
          pt={2}
        >
          <Text color={useColorModeValue("gray.700", "gray.400")}>
            <Heading>No.1</Heading>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
            {/* {dataPertanyaan?.teksSoal} */}
          </Text>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={{ base: "column", md: "row" }}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={20}
          >
            <Button
              size={buttonSize}
              flex={[0, 1]}
              fontSize={["xs", "sm"]}
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
              size={buttonSize}
              flex={1}
              fontSize={["xs", "sm"]}
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
        height={[300, 200]}
        bg={useColorModeValue("#D4EDF8", "gray.900")}
        boxShadow={"2xl"}
        mb={8}
        mt={8}
        ml={6}
      >
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="space-around  "
          alignItems="center"
          p={1}
          pr={20}
          pl={12}
          pt={2}
        >
          <Text color={useColorModeValue("gray.700", "gray.400")}>
            <Heading>No.2</Heading>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
            {/* {dataPertanyaan?.teksSoal} */}
          </Text>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={{ base: "column", md: "row" }}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={20}
          >
            <Button
              size={buttonSize}
              flex={[0, 1]}
              fontSize={["xs", "sm"]}
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
              size={buttonSize}
              flex={1}
              fontSize={["xs", "sm"]}
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
        height={[300, 200]}
        bg={useColorModeValue("#D4EDF8", "gray.900")}
        boxShadow={"2xl"}
        mb={8}
        mt={8}
        ml={6}
      >
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="space-around  "
          alignItems="center"
          p={1}
          pr={20}
          pl={12}
          pt={2}
        >
          <Text color={useColorModeValue("gray.700", "gray.400")}>
            <Heading>No.3</Heading>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
            {/* {dataPertanyaan?.teksSoal} */}
          </Text>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={{ base: "column", md: "row" }}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={20}
          >
            <Button
              size={buttonSize}
              flex={[0, 1]}
              fontSize={["xs", "sm"]}
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
              size={buttonSize}
              flex={1}
              fontSize={["xs", "sm"]}
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
        height={[300, 200]}
        bg={useColorModeValue("#D4EDF8", "gray.900")}
        boxShadow={"2xl"}
        mb={8}
        mt={8}
        ml={6}
      >
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="space-around  "
          alignItems="center"
          p={1}
          pr={20}
          pl={12}
          pt={2}
        >
          <Text color={useColorModeValue("gray.700", "gray.400")}>
            <Heading>No.4</Heading>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
            {/* {dataPertanyaan?.teksSoal} */}
          </Text>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={{ base: "column", md: "row" }}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={20}
          >
            <Button
              size={buttonSize}
              flex={[0, 1]}
              fontSize={["xs", "sm"]}
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
              size={buttonSize}
              flex={1}
              fontSize={["xs", "sm"]}
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
        height={[300, 200]}
        bg={useColorModeValue("#D4EDF8", "gray.900")}
        boxShadow={"2xl"}
        mb={8}
        mt={8}
        ml={6}
      >
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="space-around  "
          alignItems="center"
          p={1}
          pr={20}
          pl={12}
          pt={2}
        >
          <Text color={useColorModeValue("gray.700", "gray.400")}>
            <Heading>No.5</Heading>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
            {/* {dataPertanyaan?.teksSoal} */}
          </Text>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={{ base: "column", md: "row" }}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={20}
          >
            <Button
              size={buttonSize}
              flex={[0, 1]}
              fontSize={["xs", "sm"]}
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
              size={buttonSize}
              flex={1}
              fontSize={["xs", "sm"]}
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
