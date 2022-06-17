import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

function PengerjaanSoal() {
  return (
    <Container maxW={"6xl"} px={20}>
      <Flex justifyContent={"flex-end"} mr={-24}>
        <Button mr={4} ml={4} rounded={"full"} colorScheme="blue">
          1
        </Button>
        <Button mr={4} ml={4} rounded={"full"} colorScheme="blue">
          2
        </Button>
        <Button mr={4} ml={4} rounded={"full"} colorScheme="blue">
          3
        </Button>
        <Button mr={4} ml={4} rounded={"full"} colorScheme="blue">
          4
        </Button>
        <Button mr={4} ml={4} rounded={"full"} colorScheme="blue">
          5
        </Button>
      </Flex>

      <Heading mt={8} color={"#FF6905"} fontSize={"2xl"} fontFamily={"body"}>
        Question
      </Heading>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={850}
        height={200}
        bg={useColorModeValue("#FFE0CB", "gray.900")}
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
          </Text>
        </Stack>
      </Stack>

      <Heading mb={8} color={"#FF6905"} fontSize={"2xl"} fontFamily={"body"}>
        Answer
      </Heading>

      <Stack ml={12} mr={20} spacing={5} pl={1}>
        <Button colorScheme={"blue"} variant={"outline"}>
          A. Lorem Ipsum is simply dummy text of the printing
        </Button>

        <Button colorScheme={"blue"} variant={"outline"}>
          B. Lorem Ipsum is simply dummy text of the printing
        </Button>

        <Button colorScheme={"blue"} variant={"outline"}>
          C. Lorem Ipsum is simply dummy text of the printing
        </Button>

        <Button colorScheme={"blue"} variant={"outline"}>
          D. Lorem Ipsum is simply dummy text of the printing
        </Button>
      </Stack>

      <Stack mr={18} mt={8} justifyContent={"space-between"} direction={"row"}>
        <Button rounded={"md"} colorScheme="blue" size="md">
          Previous
        </Button>

        <Button rounded={"md"} colorScheme="blue" size="md">
          Next
        </Button>
      </Stack>
    </Container>
  );
}
export default PengerjaanSoal;
