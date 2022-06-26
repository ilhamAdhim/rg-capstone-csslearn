import { useLocation } from "react-router";
import "./App.css";
import PicL from "./logoR.jpeg";
import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function App() {
  const location = useLocation();

  return (
    <Stack minH={"60vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={3} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              About Us
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"orange.400"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
            elementum nisl, a pulvinar nibh. Fusce ac ex et sapien congue
            sodales. Curabitur volutpat mattis dignissim. Nunc feugiat et sapien
            et lacinia. Integer eget eleifend purus.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={0}>
            <Button
              rounded={"full"}
              bg={"purple.400"}
              color={"white"}
              _hover={{
                bg: "red.500",
              }}
            >
              Get Started It
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={2}>
        <Image alt={"Image"} objectFit={"cover"} src={PicL} />
      </Flex>
    </Stack>
  );
}
