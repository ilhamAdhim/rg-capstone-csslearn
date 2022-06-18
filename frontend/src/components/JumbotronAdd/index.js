import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

function JumbotronAdd({
  text,
  buttonText,
  handleOpenModal,
  customImage = "https://www.linkpicture.com/q/3d-fluency-add-file_2.png",
}) {
  return (
    <>
      <Stack
        my={10}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
          >
            <Text as={"span"} color={"#205375"}>
              {text}
            </Text>
          </Heading>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              px={40}
              size={"lg"}
              rounded={"full"}
              colorScheme={"green"}
              bg={"#3FCD1B"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{ bg: "green.300" }}
              onClick={() => handleOpenModal("create")}
              fontWeight={"bold"}
            >
              {buttonText}
            </Button>
          </Stack>
        </Stack>

        <Image alt={"Add image"} align={"center"} w="200px" src={customImage} />
      </Stack>
    </>
  );
}

export default JumbotronAdd;
