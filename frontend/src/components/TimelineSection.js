import React from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Link as LinkChakra,
  Flex,
  Icon,
  useColorModeValue,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { Link } from "react-router-dom";

const TimelineSection = ({ dataSource, isDataLoaded }) => {
  return (
    <Container maxWidth="4xl" p={{ base: 2, sm: 10 }}>
      {isDataLoaded ? (
        <>
          {dataSource?.map((perItem, index) => (
            <Flex key={index} mb="10px">
              <LineWithDot />
              <Card {...perItem} />
            </Flex>
          ))}
        </>
      ) : (
        <Stack spacing="4">
          <Skeleton height="300px"></Skeleton>
          <Skeleton height="300px"></Skeleton>
          <Skeleton height="300px"></Skeleton>
        </Stack>
      )}
    </Container>
  );
};

const Card = ({ title, materi, icon, date, id_course }) => {
  return (
    <HStack
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.100", "gray.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      w="100%"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: "15px 15px 15px 0",
        position: "absolute",
        left: "-15px",
        display: "block",
      }}
    >
      <Icon as={icon} w={12} h={12} color="teal.400" />
      <Link to={`/${localStorage.getItem("current_role")}/materi/${id_course}`}>
        <Box>
          <VStack spacing={2} mb={3} textAlign="left">
            <chakra.h1
              as={LinkChakra}
              _hover={{ color: "teal.400" }}
              fontSize="2xl"
              lineHeight={1.2}
              fontWeight="bold"
              w="100%"
            >
              {title}
            </chakra.h1>

            <Text fontSize="md" noOfLines={2}>
              {materi}
            </Text>
          </VStack>
          <Text fontSize="sm">{date}</Text>
        </Box>
      </Link>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex pos="relative" alignItems="center" mr="40px">
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          width="100%"
          height="100%"
          bottom="0"
          right="0"
          top="0"
          left="0"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundColor="rgb(255, 255, 255)"
          borderRadius="100px"
          border="3px solid rgb(4, 180, 180)"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

export default TimelineSection;
