import { useLocation } from "react-router";
import "./App.css";
// import PicL from "./logoR.jpeg";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const location = useLocation();

  return (
    <Box
      bgImage={"https://i.ibb.co/Lk9BRnJ/Group-123-1.png"}
      bgSize={"contain"}
    >
      <Stack minH={"60vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={3} align={"center"} justify={"center"}>
          <Stack spacing={8} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <br />{" "}
              <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="7xl"
                fontWeight="extrabold"
              >
                Welcome To CSS Learn
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"blue"}>
              Pelajar atau pemula yang memiliki ketertarikan dibidang FrontEnd
              Developer, dan dengan adanya CSS Learn ini akan membantu memahami
              basic dari sebuah pemograman web
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={0}>
              <Link to="/login">
                <Box
                  as="button"
                  width={480}
                  p={4}
                  color="white"
                  fontWeight="bold"
                  borderRadius="full"
                  bgGradient="linear(to-r, red.300, purple.500)"
                  _hover={{
                    bgGradient: "linear(to-r, teal.500, green.500)",
                  }}
                >
                  Get Started It
                </Box>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={3}>
          <Image
            alt={"Image"}
            objectFit={"cover"}
            src={"https://i.ibb.co/bzhZd9M/Group-124.png"}
          />
        </Flex>
      </Stack>
    </Box>
  );
}
