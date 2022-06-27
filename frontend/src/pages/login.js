import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Text,
  useToast,
  // Select,
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Login() {
  const [cookies, setCookie] = useCookies();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectAdmin, setRedirectAdmin] = useState(false);
  const [redirectUser, setRedirectUser] = useState(false);
  const toast = useToast();

  const loginAdmin = () => {
    const data = {
      username: username,
      password: password,
    };
    axios
      .post("https://csslearn.ilhamadhim.me/api/admin/login", data)
      .then((result) => {
        if (result) {
          console.log(result.data, " ini apa");
          localStorage.setItem("token", result.data.token);
          setRedirectAdmin(true);
          setCookie("token", result.data.token, { path: "/" });
        }
        console.log(result.data.token);
      });
  };

  const loginUser = () => {
    const data = {
      username: username,
      password: password,
    };
    axios
      .post("https://csslearn.ilhamadhim.me/api/user/login", data)
      .then((result) => {
        if (result) {
          localStorage.setItem("token", result.data.token);
          setRedirectUser(true);
        }
        console.log(result.data.token);
      });
  };

  return (
    <Fragment>
      {redirectAdmin && <Navigate to="/admin/course" />}
      {redirectUser && <Navigate to="/siswa" />}
      <Stack
        bg={"white"}
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading color={"#205375"} fontSize={"2xl"}>
              Get Started
            </Heading>
            {/* <Select
              size="md"
              width={40}
              color="gray.400"
              variant="outline"
              borderColor={"#33A9DC"}
              placeholder="Pilih Role ..."
            >
              <option value="admin">Admin</option>
              <option value="user">Siswa</option>
            </Select> */}

            <Text></Text>
            <FormControl color={"#205375"} id="username">
              <FormLabel>Username</FormLabel>
              <Input
                borderColor={"#205375"}
                variant="outline"
                color="teal"
                placeholder="username"
                _placeholder={{ color: "inherit" }}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl color={"#205375"} id="password">
              <FormLabel>Password</FormLabel>
              <Input
                borderColor={"#205375"}
                variant="outline"
                color="teal"
                placeholder="password"
                _placeholder={{ color: "inherit" }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <Button
                onClick={loginAdmin}
                colorScheme={"blue"}
                variant={"solid"}
              >
                Sign In Admin
              </Button>
              <Button
                onClick={loginUser}
                colorScheme={"blue"}
                variant={"solid"}
              >
                Sign In user
              </Button>
              <Text color={"#205375"} flex={"1"} align={"center"}>
                Not registered yet?
              </Text>
              <Link to="/register">
                <Button colorScheme={"blue"} variant={"solid"} width={445}>
                  Sign Up
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex bg={"#205375"} flex={1}>
          {/* <Image alt={"logo"} src="https://i.ibb.co/412P9mk/Group-30.png" /> */}
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://i.ibb.co/jGk9x4j/3d-flame-business-woman-using-a-phone-with-fingerprint-scanner.png"
            }
          />
        </Flex>
      </Stack>
    </Fragment>
  );
}
