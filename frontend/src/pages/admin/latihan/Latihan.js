import { Flex, Text, Select, useDisclosure, useToast } from "@chakra-ui/react";
import { ucfirst } from "common";
import BoxItem from "components/BoxItem";
import ModalCustom from "components/ModalCustom";
import ModalPertanyaanCreate from "components/ModalLatihanContent/ModalPertanyaanCreate";
import ModalPertanyaanDelete from "components/ModalLatihanContent/ModalPertanyaanDelete";
import ModalPertanyaanUpdate from "components/ModalLatihanContent/ModalPertanyaanUpdate";
import { useEffect, useState } from "react";

export default function Latihan() {
  const modal = useDisclosure();
  const toast = useToast();

  const [selectedCourse, setSelectedCourse] = useState("");
  const [modalRole, setModalRole] = useState("");

  const [dataPertanyaan, setDataPertanyaan] = useState([]);
  const [selectedPertanyaan, setSelectedPertanyaan] = useState("");
  const [isPertanyaanLoaded, setIsPertanyaanLoaded] = useState(false);

  const handleFilterByCourse = (value) => setSelectedCourse(value);

  useEffect(() => {
    if (selectedCourse !== " ") {
      // TODO : Fetch data latihan by category ID
      // ...
    }
    console.log(selectedCourse);
    setDataPertanyaan([{ id: 1 }, { id: 2 }, { id: 3 }]);
  }, [selectedCourse]);

  const handleOpenModal = (role, course = {}) => {
    console.log(role);
    modal.onOpen();
    setSelectedPertanyaan(course);
    setModalRole(role);
  };

  const handleCreatePertanyaan = () => {
    // TODO : connect endpoint CreatePertanyaan
    // ...

    toast({
      title: "Pertanyaan baru telah dibuat",
      variant: "solid",
      status: "success",
      isClosable: true,
      position: "top",
    });
  };

  const handleUpdatePertanyaan = () => {
    // TODO : connect endpoint UpdatePertanyaan
    // ...

    toast({
      title: `Pertanyaan ${selectedPertanyaan.teksSoal || " "} berhasil diubah`,
      variant: "solid",
      status: "success",
      isClosable: true,
      position: "top",
    });
  };

  const handleDeletePertanyaan = () => {
    // TODO : connect endpoint DeletePertanyaan
    // ...
    toast({
      title: `Pertanyaan ${
        selectedPertanyaan.teksSoal || " "
      } berhasil dihapus`,
      variant: "solid",
      status: "success",
      isClosable: true,
      position: "top",
    });
  };

  return (
    <>
      <Flex mt={8} justifyContent="space-between" direction={"row"}>
        <Text>Filter berdasarkan course</Text>
        <Select
          size="md"
          width={40}
          color="gray.400"
          variant="outline"
          borderColor={"#33A9DC"}
          placeholder="Pilih Course ..."
          onChange={(e) => handleFilterByCourse(e.target.value)}
        >
          <option value="1">CSS Intro</option>
          <option value="2">CSS Selector</option>
          <option value="3">CSS Attributes</option>
        </Select>
      </Flex>

      <Flex gap="1em" flexDir="column" mt="1em">
        {dataPertanyaan?.map((item) => (
          <BoxItem
            hasEdit
            hasDelete
            item={item}
            key={item.id}
            handleOpenModal={handleOpenModal}
            entity="Pertanyaan"
          />
        ))}
      </Flex>

      <ModalCustom
        isOpen={modal.isOpen}
        onClose={modal.onClose}
        role={modalRole}
        onHandleSubmit={
          modalRole === "create"
            ? handleCreatePertanyaan
            : modalRole === "update"
            ? handleUpdatePertanyaan
            : handleDeletePertanyaan
        }
        selectedEntity={selectedPertanyaan}
        title={ucfirst(
          modalRole !== "create"
            ? `${modalRole} pertanyaan ${selectedPertanyaan.id}`
            : `Tambah Pertanyaan baru`
        )}
      >
        {modalRole === "update" && (
          <ModalPertanyaanUpdate currentPertanyaan={selectedPertanyaan} />
        )}

        {modalRole === "create" && <ModalPertanyaanCreate />}

        {modalRole === "delete" && (
          <ModalPertanyaanDelete currentPertanyaan={selectedPertanyaan} />
        )}
      </ModalCustom>
    </>
  );
}
