import {
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Select,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Latihan() {
  const [selectedCourse, setSelectedCourse] = useState("");

  const [dataLatihan, setDataLatihan] = useState([]);
  const [isLatihanLoaded, setIsLatihanLoaded] = useState(false);

  const handleFilterByCourse = (value) => setSelectedCourse(value);

  useEffect(() => {
    // TODO : Fetch data latihan by category ID
    // ...
  }, [selectedCourse]);

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

      <Box
        boxShadow={"2xl"}
        borderWidth="1px"
        borderRadius="lg"
        bg={useColorModeValue("#D4EDF8", "gray.900")}
      >
        <Stack
          p={4}
          flex={1}
          flexDirection="row"
          justifyContent="space-between"
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Pertanyaan. count
          </Heading>

          <Text color={useColorModeValue("gray.700", "gray.400")} px={3}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </Text>

          <Flex
            gap="1em"
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"center"}
          >
            <Button
              fontSize={"sm"}
              rounded={"full"}
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
              Update course
            </Button>
            <Button
              fontSize={"sm"}
              rounded={"full"}
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
              Delete course
            </Button>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
