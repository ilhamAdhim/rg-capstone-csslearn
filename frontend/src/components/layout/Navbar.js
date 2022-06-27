import React from "react";
import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import { ucfirst } from "common";

export const NavItem = ({ icon, text, ...rest }) => {
  const location = useLocation();

  return (
    <Link
      to={`/${localStorage.getItem("current_role")}/${text.toLowerCase()}`}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.800",
          color: "white",
        }}
        bg={location.pathname.includes(text) ? "cyan.800" : "transparent"}
        color={location.pathname.includes(text) ? "white" : "unset"}
        fontWeight={location.pathname.includes(text) ? "bold" : "normal"}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {ucfirst(text)}
      </Flex>
    </Link>
  );
};

export const MobileNav = ({ onOpen, ...rest }) => {
  const location = useLocation();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "space-between" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Box display={{ base: "none", md: "block" }}>
        Welcome to CSSLearn, Kelompok 70!
      </Box>

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        CSS Learn
      </Text>
      <Flex gap="4">
        <ThemeToggle />
        <HStack>
          <Avatar
            size={"sm"}
            src={
              "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
          />
          <VStack
            display={{ base: "none", md: "flex" }}
            alignItems="flex-start"
            spacing="1px"
            ml="2"
          >
            <Text fontSize="sm">Kelompok</Text>
            <Text fontSize="xs" color="gray.400">
              {ucfirst(location?.pathname?.split("/")[1])}
            </Text>
          </VStack>
        </HStack>
      </Flex>
    </Flex>
  );
};
