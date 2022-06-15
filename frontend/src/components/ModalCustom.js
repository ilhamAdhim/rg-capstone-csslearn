import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
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

          <ModalBody>
            {role === "delete" ? (
              <Text align="center">
                Yakin ingin menghapus {selectedEntity} ?
              </Text>
            ) : (
              children
            )}
          </ModalBody>

          <ModalFooter display="flex" gap="1em" justifyContent="center">
            <Button
              onClick={onHandleSubmit}
              colorScheme={role === "delete" ? "red" : "teal"}
            >
              {role === "delete"
                ? "Hapus"
                : role === "update"
                ? "Ubah"
                : "Tambah"}
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalCustom;
