import React from "react";
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import SidebarContent from "./Sidebar";
import { MobileNav } from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (router.pathname === "/login" || router.pathname === "/register")
    return (
      <Box margin="0 auto" transition="0.5s ease-out">
        {children}
      </Box>
    );
  else
    return (
      <>
        <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
          <SidebarContent
            onClose={() => onClose}
            display={{ base: "none", md: "block" }}
          />
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
          >
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
          {/* mobilenav */}
          <MobileNav onOpen={onOpen} />
          <Box ml={{ base: 0, md: 60 }} p="4">
            {children}
            <Footer />
          </Box>
        </Box>
      </>
    );
};

export default Layout;
