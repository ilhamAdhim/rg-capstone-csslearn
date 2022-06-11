import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function logout() {
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
        <Avatar
          mt={40}
          size={"xl"}
          src={
            "https://www.linkpicture.com/q/Avatars-Default-with-Backdrop-1.png"
          }
          alt={"Avatar Alt"}
          mb={4}
          ml={4}
          pos={"relative"}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"} ml={4} mt={4}>
          Log Out
        </Heading>
        <Text fontWeight={600} color={"gray.500"} ml={4} mb={4} mt={3}>
          Are you sure you want to log out ?
        </Text>

        <Button
          fontSize={"md"}
          rounded={"md"}
          bg={"#FF0505"}
          color={"white"}
          width={300}
          mb={10}
          mt={6}
          ml={7}
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
          Cancel
        </Button>
        <Button
          fontSize={"md"}
          rounded={"md"}
          bg={"#33A9DC"}
          color={"white"}
          width={300}
          ml={7}
          mb={40}
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
          Log out
        </Button>
      </Box>
    </Center>
  );
}
