import Layout from "../../components/layout";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import {
  chakra,
  Avatar,
  Box,
  Center,
  Text,
  Button,
  useColorModeValue,
  Flex,
  useToast,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa";
function ProfileAdminPage() {
  useDocumentTitle("Profil Admin");
  const toast = useToast();

  const handleUpdateProfile = () => {
    // TODO : connect endpoint UpdateProfile
    // ....
    toast({
      title: "Profil berhasil diperbarui",
      status: "success",
      duration: 3000,
      position: "top",
      isClosable: true,
    });
  };
  return (
    <>
      <Layout>
        <Center py={6}>
          <Box
            maxW={"900px"}
            w={"full"}
            bg={useColorModeValue("#FFE0CB")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            <Flex gap="1em" justifyContent="space-around" my="1em">
              <Avatar
                size={"2xl"}
                src={
                  "https://www.linkpicture.com/q/Avatars-Default-with-Backdrop-1.png"
                }
                alt={"Avatar Alt"}
              />
              <chakra.div>
                <Text fontSize={"2xl"} fontFamily={"body"}>
                  Hai <b> user </b>
                </Text>
                <Button display="block" w="100%" mt="4">
                  Ubah Avatar
                </Button>
              </chakra.div>
            </Flex>

            <Flex m="1em 2em" gap="1em" flexDir="column">
              <FormControl>
                <FormLabel htmlFor="username">Username</FormLabel>
                <InputGroup border="1px solid teal" borderRadius="8px">
                  <InputLeftElement pointerEvents="none" children="@" />
                  <Input id="username" type="text" />
                </InputGroup>
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <InputGroup border="1px solid teal" borderRadius="8px">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaEnvelope />}
                  />
                  <Input id="email" type="email" />
                </InputGroup>
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup border="1px solid teal" borderRadius="8px">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaLock />}
                  />
                  <Input id="password" type="password" />
                </InputGroup>
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              </FormControl>
            </Flex>

            <Flex justifyContent="center">
              <Button
                fontSize={"md"}
                rounded={"md"}
                bg={"#33A9DC"}
                color={"white"}
                width={300}
                ml={7}
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
                onClick={handleUpdateProfile}
              >
                Update Profile
              </Button>
            </Flex>
          </Box>
        </Center>
      </Layout>
    </>
  );
}

export default ProfileAdminPage;
