import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

function ModalCustom({
  onClose,
  isOpen,
  title,
  role,
  // ? onHandleSubmit bisa dinamis ya, bisa handler create | update | delete
  onHandleSubmit,
  children,
  selectedEntity,
}) {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>{children}</ModalBody>

          <ModalFooter display="flex" gap="1em" justifyContent="center">
            <Button
              flex={1}
              onClick={onHandleSubmit}
              colorScheme={role === "delete" ? "red" : "teal"}
            >
              {role === "delete"
                ? "Hapus"
                : role === "update"
                ? "Ubah"
                : "Tambah"}
            </Button>
            <Button flex={1} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalCustom;
