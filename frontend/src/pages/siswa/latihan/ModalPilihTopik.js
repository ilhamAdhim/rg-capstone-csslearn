import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Box,
  Select,
} from "@chakra-ui/react";

import React from "react";

export default function ModalMulaiLatihan() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [size] = React.useState("xl");

  return (
    <>
      <Text> INI UNTUK MODAL PILIH TOPIK , COBA DIKLIK</Text>
      <Button
        onClick={onOpen}
        flex={1}
        fontSize={"sm"}
        rounded={"md"}
        bg={"red.500"}
        color={"white"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "red.500",
        }}
        _focus={{
          bg: "red.600",
        }}
      >
        Pilih topik
      </Button>

      <Modal
        size={size}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            height={10}
            bg={"#D4EDF8"}
            boxShadow="lg"
            p="4"
            rounded="sm"
          >
            Delete topik
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box
              flex={1}
              ml={3}
              mt={3}
              mb={3}
              fontSize={"lg"}
              rounded={"sm"}
              bg={"white"}
              color={"black"}
              width={500}
              height={40}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
            >
              <Text mt={10} textAlign="center" py={6}>
                Pilih Daftar Topik
              </Text>
              <Select
                borderColor={"#33A9DC"}
                variant="outline"
                color="gray.400"
                placeholder="Topik 1"
                size="md"
                ml={8}
                width={80}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"md"}
              bg={"blue.500"}
              color={"white"}
              mr={4}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.600",
              }}
            >
              Start
            </Button>
            <Button
              onClick={onClose}
              flex={1}
              fontSize={"sm"}
              rounded={"md"}
              bg={"red.500"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "red.500",
              }}
              _focus={{
                bg: "red.600",
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
