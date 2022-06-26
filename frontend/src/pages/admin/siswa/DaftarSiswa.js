import { Flex, useDisclosure, Text, Select } from "@chakra-ui/react";
import BoxItem from "components/BoxItem";
import { useEffect, useState } from "react";

export default function DaftarSiswa({ handleOpenModal }) {
  const [dataUser, setDataUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const handleFilterByCourse = (value) => setSelectedCourse(value);

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
        usercurrent: "CSS Intro",
        usercourse: "CSS Intro",
        userlatihan: "Passed : CSS Intro",
      },
      {
        useravatar:
          "https://static.wikia.nocookie.net/telletubbies/images/7/79/Dipsy_intro.PNG/revision/latest?cb=20200422222253",
        username: "dipsy",
        useremail: "emaildipsy@rocketmail.com",
        usercurrent: "CSS Selector",
        usercourse: "CSS Intro , CSS Selector",
        userlatihan: "Passed : CSS Intro, CSS Selector",
      },
      {
        useravatar:
          "https://static.wikia.nocookie.net/telletubbies/images/7/79/Dipsy_intro.PNG/revision/latest?cb=20200422222253",
        username: "poo",
        useremail: "emailpoo@rocketmail.com",
        usercurrent: "CSS Attribut",
        usercourse: "CSS Intro, CSS Selector, CSS Attribut",
        userlatihan:
          "Passed : CSS Intro, CSS Selector Not Passed : CSS Attribut",
      },
    ]);
  }, [selectedUser]);

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
