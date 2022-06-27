import Layout from "components/layout";
import useDocumentTitle from "hooks/useDocumentTitle";
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
import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

function ProfileAdminPage() {
  const [redirectProfile, setRedirectProfile] = useState(false);
  const [id_siswa, setId_siswa] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useDocumentTitle("Profil Admin");
  const toast = useToast();

  const handleUpdateProfile = async () => {
    // TODO : connect endpoint UpdateProfile
    // ....
    toast({
      title: "Profil berhasil diperbarui",
      status: "success",
      duration: 3000,
      position: "top",
      isClosable: true,
    });

    try {
      const data = {
        id_siswa: id_siswa,
        username: username,
        password: password,
        email: email,
      };
      const result = await axios.put(
        `https://csslearn.ilhamadhim.me/api/user/editprofile${id_siswa}`,
        data
      );
      if (result) {
        localStorage.setItem("token", result.data.token);
        setRedirectProfile(true);
      }
      console.log(result.data.token);
    } catch (err) {
      toast({
        title: "Profil gagal diperbarui",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Fragment>
        {redirectProfile && <Navigate to="/siswa/profil" />}
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
                    <Input
                      onChange={(e) => setUsername(e.target.value)}
                      id="username"
                      type="text"
                    />
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
                    <Input
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      type="email"
                    />
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
                    <Input
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      type="password"
                    />
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
      </Fragment>
    </>
  );
}

export default ProfileAdminPage;
