import {
  Heading,
  Image,
  Box,
  Center,
  Text,
  Button,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

export default function Success() {
  return (
    <Center py={6}>
      <Box
        maxW={"700px"}
        w={"full"}
        bg={useColorModeValue("#FFE0CB")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Heading fontSize={"2xl"} fontFamily={"body"} ml={4} mt={20}>
          Your Result
        </Heading>
        <Text fontWeight={600} color={"gray.500"} ml={4} mb={4} mt={3}>
          You’ve passed the test
        </Text>
        <Image
          mt={12}
          boxSize="210px"
          src={
            "https://www.linkpicture.com/q/3d-plastilina-colorful-party-popper.png"
          }
          alt={"Image Alt"}
          mb={4}
          ml={60}
        />

        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack spacing={0} align={"center"} ml={5} mt={6} mb={4}>
            <Heading color={"green.500"}>4 Benar</Heading>
          </Stack>
          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"} ml={4} mt={6} mb={4}>
              <Heading color={"red.500"}>1 Salah</Heading>
            </Stack>
          </Stack>
        </Stack>

        <Button
          fontSize={"md"}
          rounded={"md"}
          bg={"#33A9DC"}
          color={"white"}
          width={300}
          mb={10}
          mt={6}
          ml={7}
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "blue.500",
          }}
          _focus={{
            bg: "blue.500",
          }}
        >
          Try again
        </Button>
        <Button
          fontSize={"md"}
          rounded={"md"}
          bg={"#FF0505"}
          color={"white"}
          width={300}
          ml={7}
          mb={40}
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "red.500",
          }}
          _focus={{
            bg: "red.500",
          }}
        >
          Close
        </Button>
      </Box>
    </Center>
  );
}
