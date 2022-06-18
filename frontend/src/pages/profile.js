import {
  Heading,
  Avatar,
  Box,
  Center,
  Stack,
  Button,
  Flex,
  FormControl,
  Input,
  FormLabel,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Profile() {
  const bgColor = useColorModeValue("#FFE0CB");

  return (
    <Center py={6}>
      <Box
        maxW={"872px"}
        w={"full"}
        bg={bgColor}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Flex>
          <Avatar
            alt={"Avatar Alt"}
            mb={5}
            pos={"relative"}
            left={36}
            top={16}
            size={"2xl"}
            src={
              "https://www.linkpicture.com/q/Avatars-Default-with-Backdrop-1.png"
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={2}
          pt={-20}
        >
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={600}
            size="sm"
            mb={4}
            mt={-20}
            mr={-60}
          >
            Hai, Kelompok 70
          </Heading>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={6}>
          <Button
            fontSize={"md"}
            rounded={"md"}
            bg={"#33A9DC"}
            color={"white"}
            right={-80}
            flex={0.5}
            mt={-27}
            mb={10}
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
            Change Avatar
          </Button>
        </Stack>
        <FormControl color={"#205375"} id="username">
          <FormLabel ml={20}>Username</FormLabel>
          <Input
            borderColor={"#205375"}
            variant="outline"
            color="teal"
            placeholder="username"
            _placeholder={{ color: "inherit" }}
            mb={6}
            width={670}
          />
        </FormControl>
        <FormControl color={"#205375"} id="email">
          <FormLabel ml={20}>Email</FormLabel>
          <Input
            borderColor={"#205375"}
            variant="outline"
            color="teal"
            placeholder="email"
            _placeholder={{ color: "inherit" }}
            mb={6}
            width={670}
          />
        </FormControl>
        <FormControl color={"#205375"} id="password">
          <FormLabel ml={20}>Password</FormLabel>
          <Input
            borderColor={"#205375"}
            variant="outline"
            color="teal"
            placeholder="password"
            _placeholder={{ color: "inherit" }}
            mb={6}
            width={670}
          />
        </FormControl>
        <Button
          fontSize={"md"}
          rounded={"md"}
          bg={"#FF0505"}
          color={"white"}
          width={300}
          mr={8}
          mb={20}
          mt={6}
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
          ml={8}
          mb={20}
          mt={6}
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
          Submit
        </Button>
      </Box>
    </Center>
  );
}
