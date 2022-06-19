import { Flex, useDisclosure, useToast } from "@chakra-ui/react";
import BoxItem from "components/BoxItem";
import ModalCustom from "components/ModalCustom";
import ModalSiswaPreview from "components/ModalSiswaContent/ModalSiswaPreview";
import { useEffect, useState } from "react";

export default function DaftarSiswa() {
  const modal = useDisclosure();
  const toast = useToast();

  const [selectedCourse, setSelectedCourse] = useState("");
  const [modalRole, setModalRole] = useState("");

  const [dataUser, setDataUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    if (selectedCourse !== " ") {
      // TODO : Fetch data DaftarSiswa by category ID
      // ...
    }
    console.log(selectedCourse);
    setDataUser([
      {
        useravatar:
          "https://static.wikia.nocookie.net/telletubbies/images/7/79/Dipsy_intro.PNG/revision/latest?cb=20200422222253",
        username: "lala",
        useremail: "emaillala@rocketmail.com",
      },
      {
        useravatar: "",
        username: "dipsy",
        useremail: "emaildipsy@rocketmail.com",
      },
      { vusername: "poo", useremail: "emailpoo@rocketmail.com" },
    ]);
  }, [selectedCourse]);

  const handleOpenModal = (role, course = {}) => {
    console.log(role);
    modal.onOpen();
    setSelectedUser(course);
    setModalRole(role);
  };

  const handleSiswaPreview = () => {
    // TODO : connect endpoint DeleteUser
    // ...
    toast({
      variant: "solid",
      status: "success",
      isClosable: true,
      position: "top",
    });
  };

  return (
    <>
      <Flex gap="1em" flexDir="column" mt="1em">
        {dataUser?.map((item) => (
          <BoxItem
            hasPreview
            item={item}
            key={item.username}
            handleOpenModal={handleOpenModal}
            entity="user"
          />
        ))}
      </Flex>

      <ModalCustom
        isOpen={modal.isOpen}
        onClose={modal.onClose}
        role={modalRole}
        onHandleSubmit={(modalRole === "preview") === handleSiswaPreview}
        selectedEntity={selectedUser}
      >
        {modalRole === "preview" && (
          <ModalSiswaPreview currentUser={selectedUser} />
        )}
      </ModalCustom>
    </>
  );
}
