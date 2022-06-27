import { Button, Center, chakra, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../assets/page_not_found.svg";
import React, { useEffect, useState } from "react";


function NotFound() {
  const navigate = useNavigate();
  return (
    <Flex h="100vh">
      <chakra.div m="auto">
        <ReactLogo />
        <chakra.div mt="4" textAlign="center">
          404 Page Not Found
        </chakra.div>
        <Center mt="4">
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </Center>
      </chakra.div>
    </Flex>
  );
}

export default NotFound;
