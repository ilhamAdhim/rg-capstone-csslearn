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
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { useState, Fragment } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const register = () => {
    const data = {
      username: username,
      email: email,
      password: password,
    };
    axios
      .post("https://csslearn.ilhamadhim.me/api/user/register", data)
      .then((result) => {
        if (result) {
          localStorage.setItem("token", result.data.token);
          setRedirect(true);
        }
        console.log(result.data.token);
      });
  };
  return (
    <Fragment>
      {redirect && <Navigate to="/login" />}
      <Stack
        bg={"white"}
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading color={"#205375"} fontSize={"2xl"}>
              Sign Up
            </Heading>
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
            <FormControl color={"#205375"} id="email">
              <FormLabel>Email</FormLabel>
              <Input
                borderColor={"#205375"}
                variant="outline"
                color="teal"
                placeholder="email"
                _placeholder={{ color: "inherit" }}
                onChange={(e) => setEmail(e.target.value)}
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
              <Button onClick={register} colorScheme={"blue"} variant={"solid"}>
                Sign Up
              </Button>
              <Text color={"#205375"} flex={"1"} align={"center"}>
                Already have an account?
              </Text>
              <Link to="/login">
                <Button colorScheme={"blue"} variant={"solid"}>
                  Sign In
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex bg={"#205375"} flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://i.ibb.co/wMpR7ty/3d-flame-man-standing-next-to-red-phone-with-project-statistics-on-screen.png"
            }
          />
        </Flex>
      </Stack>
    </Fragment>
  );
}
