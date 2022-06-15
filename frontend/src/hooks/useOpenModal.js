import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function useOpenModal(course, role) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [modalRole, setModalRole] = useState("");
  const [selectedEntity, setSelectedEntity] = useState({});

  useEffect(() => {
    onOpen();
    setSelectedCourse(course);
    setModalRole(role);
    console.log("Current course ", course, " role : ", role);
  }, [course, role]);

  return { isOpen, modalRole, onClose };
}

export default useOpenModal;
