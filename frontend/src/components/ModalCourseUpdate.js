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
} from "@chakra-ui/react";

import React from "react";

export default function ModalCourseUpdate() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
    <Text> INI UNTUK MODAL BUTTON UPDATE COURSE , COBA DIKLIK</Text>
    <Button onClick={onOpen}
              flex={1}
              fontSize={'sm'}
              rounded={"md"}
              bg={'blue.500'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.600',
              }}>
              Update course
            </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader height={10} bg={"#D4EDF8"} boxShadow='lg' p='4' rounded='sm'>Edit Course CSS Intro</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel mt={4}>Title</FormLabel>
              <Input ref={initialRef}           
                borderColor={"#33A9DC"}
                variant="outline"
                color="black" />
            </FormControl>

            <FormControl mt={4} >
              <FormLabel>Description</FormLabel>
              <Input height={40}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={"md"}
              bg={'blue.500'}
              color={'white'}
              mr={4}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.600',
              }}>
              Update
            </Button>
            <Button onClick={onClose}
              flex={1}
              fontSize={'sm'}
              rounded={'md'}
              bg={'red.500'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'red.500',
              }}
              _focus={{
                bg: 'red.600',
              }}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
