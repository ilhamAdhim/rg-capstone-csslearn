import {
  Box,
  Flex,
  Text,
  Tooltip,
  Button,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function BoxItem({
  item,
  entity,
  hasPreview = false,
  isEditOpenNewPage = false,
  isPreviewOpenNewPage = false,
  hasDelete = false,
  hasEdit = false,
  hasAvatar = true,
  handleOpenModal,
}) {
  const boxMateriBg = useColorModeValue("gray.200", "gray.800");

  if (entity === "user") {
    return (
      <>
        <Box
          p="2em"
          key={[item.id, item.user]}
          bg={boxMateriBg}
          borderWidth="1px"
          borderRadius="lg"
        >
          <Flex
            gap="1em"
            justifyContent="space-between"
            flexDir={["column", "row"]}
          >
            <Box width={["100%", "80%"]}>
              {hasAvatar && (
                <Box>
                  <Avatar
                    justifyContent={"flex-start"}
                    size={"lg"}
                    src={
                      "https://www.linkpicture.com/q/Avatars-Default-with-Backdrop-1.png"
                    }
                  />
                </Box>
              )}
              <Text mt="1em" fontSize="md" textAlign={["justify"]}>
                {item.user || `Username : ${item.username}`}
              </Text>
              <Text mt="1em" fontSize="md" textAlign={["justify"]}>
                {item.email || `Email : ${item.useremail}`}
              </Text>
              <Text mt="1em" fontSize="md" textAlign={["justify"]}>
                {item.current || `Current Course : ${item.usercurrent}`}
              </Text>
            </Box>
            <Flex m="auto 0" gap="1em" justifyContent="center">
              {hasPreview && (
                <Box>
                  <Tooltip hasArrow placement="top" label={`Preview ${entity}`}>
                    {isPreviewOpenNewPage ? (
                      <Link to={`${item.user + 1}`}>
                        <Button
                          flex={1}
                          colorScheme="blue"
                          // onClick={() => handleOpenModal("delete", item)}
                          children={<FaEye />}
                        />
                      </Link>
                    ) : (
                      <Button
                        flex={1}
                        colorScheme="blue"
                        onClick={() => handleOpenModal("preview", item)}
                        children={<FaEye />}
                      />
                    )}
                  </Tooltip>
                </Box>
              )}
            </Flex>
          </Flex>
        </Box>
      </>
    );
  }

  if (entity === "Materi") {
    return (
      <Box
        p="2em"
        key={item?.id_materi}
        bg={boxMateriBg}
        borderWidth="1px"
        borderRadius="lg"
      >
        <Flex
          gap="1em"
          justifyContent="space-between"
          flexDir={["column", "row"]}
        >
          <Box width={["100%", "80%"]}>
            <Text
              fontSize="xl"
              fontWeight="bold"
              textAlign={["center", "justify"]}
            >
              {item.title}
            </Text>
            <Text mt="1em" fontSize="md" textAlign={["justify"]}>
              {item.materi ||
                item.description ||
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
            </Text>
          </Box>
          <Flex m="auto 0" gap="1em" justifyContent="center">
            {hasEdit && (
              <Box>
                <Tooltip hasArrow placement="top" label={`Edit ${entity}`}>
                  {/* // ! Masih mock lho ya */}
                  {isEditOpenNewPage ? (
                    <Link to={`${item?.id_materi + 1}`}>
                      <Button
                        flex={1}
                        colorScheme="blue"
                        children={<FaPen />}
                      />
                    </Link>
                  ) : (
                    <Button
                      flex={1}
                      colorScheme="blue"
                      onClick={() => handleOpenModal("update", item)}
                      children={<FaPen />}
                    />
                  )}
                </Tooltip>
              </Box>
            )}

            {hasPreview && (
              <Box>
                <Tooltip hasArrow placement="top" label={`Preview ${entity}`}>
                  {isPreviewOpenNewPage ? (
                    <Link to={`edit/${item.id_course}`}>
                      <Button
                        flex={1}
                        colorScheme="blue"
                        // onClick={() => handleOpenModal("delete", item)}
                        children={<FaEye />}
                      />
                    </Link>
                  ) : (
                    <Button
                      flex={1}
                      colorScheme="blue"
                      onClick={() => handleOpenModal("delete", item)}
                      children={<FaEye />}
                    />
                  )}
                </Tooltip>
              </Box>
            )}

            {hasDelete && (
              <Box>
                <Tooltip hasArrow placement="top" label={`Delete ${entity}`}>
                  <Button
                    flex={1}
                    colorScheme="red"
                    onClick={() => handleOpenModal("delete", item)}
                    children={<FaTrash />}
                  />
                </Tooltip>
              </Box>
            )}
          </Flex>
        </Flex>
      </Box>
    );
  }

  if (entity === "Pertanyaan") {
    return (
      <Box
        p="2em"
        key={[item.id, item.user]}
        bg={boxMateriBg}
        borderWidth="1px"
        borderRadius="lg"
      >
        <Flex
          gap="1em"
          justifyContent="space-between"
          flexDir={["column", "row"]}
        >
          <Box width={["100%", "80%"]}>
            <Text
              fontSize="xl"
              fontWeight="bold"
              textAlign={["center", "justify"]}
            >
              {item.question}
            </Text>
            <Text my="1em" fontSize="md" textAlign={["justify"]}>
              Opsi Jawaban:
            </Text>
            <Text>{item.answer1}</Text>
            <Text>{item.answer2}</Text>
            <Text>{item.answer3}</Text>
            <Text>{item.answer4}</Text>
          </Box>
          <Flex m="auto 0" gap="1em" justifyContent="center">
            {hasEdit && (
              <Box>
                <Tooltip hasArrow placement="top" label={`Edit ${entity}`}>
                  {/* // ! Masih mock lho ya */}
                  {isEditOpenNewPage ? (
                    <Link to={`${item.id + 1}`}>
                      <Button
                        flex={1}
                        colorScheme="blue"
                        children={<FaPen />}
                      />
                    </Link>
                  ) : (
                    <Button
                      flex={1}
                      colorScheme="blue"
                      onClick={() => handleOpenModal("update", item)}
                      children={<FaPen />}
                    />
                  )}
                </Tooltip>
              </Box>
            )}

            {hasPreview && (
              <Box>
                <Tooltip hasArrow placement="top" label={`Preview ${entity}`}>
                  {/* // ! Masih mock lho ya */}

                  {isPreviewOpenNewPage ? (
                    <Link to={`${item.id + 1}`}>
                      <Button
                        flex={1}
                        colorScheme="blue"
                        // onClick={() => handleOpenModal("delete", item)}
                        children={<FaEye />}
                      />
                    </Link>
                  ) : (
                    <Button
                      flex={1}
                      colorScheme="blue"
                      onClick={() => handleOpenModal("delete", item)}
                      children={<FaEye />}
                    />
                  )}
                </Tooltip>
              </Box>
            )}

            {hasDelete && (
              <Box>
                <Tooltip hasArrow placement="top" label={`Delete ${entity}`}>
                  <Button
                    flex={1}
                    colorScheme="red"
                    onClick={() => handleOpenModal("delete", item)}
                    children={<FaTrash />}
                  />
                </Tooltip>
              </Box>
            )}
          </Flex>
        </Flex>
      </Box>
    );
  }
}

export default BoxItem;
