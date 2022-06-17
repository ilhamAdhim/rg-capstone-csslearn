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
  FormControl,
  Input,
  FormLabel,
  Text,
  Select,
  Stack,
} from "@chakra-ui/react";

import React from "react";

export default function ModalPertanyaanCreate() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [size, setSize] = React.useState("xl");

  return (
    <>
      <Text> INI UNTUK MODAL TAMBAH PERTANYAAN , COBA DIKLIK</Text>
      <Button
        onClick={onOpen}
        flex={1}
        fontSize={"sm"}
        rounded={"md"}
        bg={"blue.500"}
        color={"white"}
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
        Add Question
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
            Add question
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Question text</FormLabel>
              <Input
                borderColor={"#33A9DC"}
                variant="outline"
                color="black"
                height={40}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Option A</FormLabel>
              <Input borderColor={"#33A9DC"} variant="outline" color="black" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Option B</FormLabel>
              <Input borderColor={"#33A9DC"} variant="outline" color="black" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Option C</FormLabel>
              <Input borderColor={"#33A9DC"} variant="outline" color="black" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Option D</FormLabel>
              <Input borderColor={"#33A9DC"} variant="outline" color="black" />
            </FormControl>

            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent={"space-between"}
              mt={8}
              alignItems={"center"}
            >
              <Text>Right answer</Text>
              <Select
                borderColor={"#33A9DC"}
                variant="outline"
                color="gray.400"
                placeholder="Right answer"
                size="md"
                width={40}
              />
              <Text>Input to</Text>
              <Select
                borderColor={"#33A9DC"}
                variant="outline"
                color="gray.400"
                placeholder="Choose course"
                size="md"
                width={40}
              />
            </Stack>
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
              Add
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
