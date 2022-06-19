import { Flex, useDisclosure } from "@chakra-ui/react";
import BoxItem from "components/BoxItem";
import { useEffect, useState } from "react";

export default function DaftarSiswa({ handleOpenModal }) {
  const [dataUser, setDataUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    if (selectedUser !== " ") {
      // TODO : Fetch data DaftarSiswa by category ID
      // ...
    }
    console.log(selectedUser);
    setDataUser([
      {
        useravatar:
          "https://static.wikia.nocookie.net/telletubbies/images/7/79/Dipsy_intro.PNG/revision/latest?cb=20200422222253",
        username: "lala",
        useremail: "emaillala@rocketmail.com",
      },
      {
        useravatar:
          "https://static.wikia.nocookie.net/telletubbies/images/7/79/Dipsy_intro.PNG/revision/latest?cb=20200422222253",
        username: "dipsy",
        useremail: "emaildipsy@rocketmail.com",
      },
      {
        useravatar:
          "https://static.wikia.nocookie.net/telletubbies/images/7/79/Dipsy_intro.PNG/revision/latest?cb=20200422222253",
        username: "poo",
        useremail: "emailpoo@rocketmail.com",
      },
    ]);
  }, [selectedUser]);

  return (
    <>
      <Flex gap="1em" flexDir="column" mt="1em">
        {dataUser?.map((item) => (
          <BoxItem
            hasPreview
            entity="user"
            item={item}
            key={item.username}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </Flex>
    </>
  );
}
