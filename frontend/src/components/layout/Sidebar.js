import React, { useEffect } from "react";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  chakra,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { NavItem } from "./Navbar";
import { useLocation } from "react-router";

const linkItemsSiswa = [
  { name: "course", icon: FiCompass },
  // { name: "materi", icon: FiStar },
  { name: "latihan", icon: FiStar },
  { name: "profil", icon: FiUser },
  { name: "logout", icon: FiSettings },
];

const linkItemsAdmin = [
  { name: "course", icon: FiCompass },
  { name: "materi", icon: FiStar },
  { name: "latihan", icon: FiStar },
  { name: "profil", icon: FiUser },
  { name: "siswa", icon: FiUsers },
  { name: "logout", icon: FiSettings },
];

const SidebarContent = ({ onClose, ...rest }) => {
  const location = useLocation();
  useEffect(() => {
    let role = location.pathname.split("/")[1];
    if (location.pathname !== undefined)
      localStorage.setItem("current_role", role);
  }, []);

  return (
    <Box
      h="full"
      w={{ base: "full", md: 60 }}
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      pos="fixed"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          CSS Learn
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {(localStorage.getItem("current_role") === "admin"
        ? linkItemsAdmin
        : linkItemsSiswa
      ).map((link) => (
        <NavItem key={link.name} icon={link.icon} text={link.name} />
      ))}
    </Box>
  );
};

export default SidebarContent;
