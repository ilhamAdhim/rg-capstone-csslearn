import {
  Box,
  Flex,
  Text,
  Tooltip,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function BoxItem({
  item,
  entity,
  hasPreview = false,
  hasDelete = false,
  hasEdit = false,
  handleOpenModal,
}) {
  const boxMateriBg = useColorModeValue("gray.200", "gray.800");

  return (
    <Box
      p="2em"
      key={item.id}
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
            {item.course}
          </Text>
          <Text mt="1em" fontSize="md" textAlign={["justify"]}>
            {item.materi}
          </Text>
        </Box>
        <Flex m="auto 0" gap="1em" justifyContent="center">
          {hasEdit && (
            <Box>
              <Tooltip hasArrow placement="top" label={`Edit ${entity}`}>
                {/* // ! Masih mock lho ya */}
                <Link to={`${item.id + 1}`}>
                  <Button
                    flex={1}
                    colorScheme="blue"
                    // onClick={() => handleOpenModal("delete", item)}
                    children={<FaPen />}
                  />
                </Link>
              </Tooltip>
            </Box>
          )}

          {hasPreview && (
            <Box>
              <Tooltip hasArrow placement="top" label={`Preview ${entity}`}>
                {/* // ! Masih mock lho ya */}
                <Link to={`${item.id + 1}`}>
                  <Button
                    flex={1}
                    colorScheme="blue"
                    // onClick={() => handleOpenModal("delete", item)}
                    children={<FaEye />}
                  />
                </Link>
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

export default BoxItem;
