import { chakra, Text } from "@chakra-ui/react";

import React from "react";

export default function ModalCourseDelete({ currentCourse }) {
  return (
    <>
      <Text align="center">
        Yakin ingin menghapus
        <chakra.span fontWeight="bold" textDecor="underline">
          {" "}
          {currentCourse.judul_course}{" "}
        </chakra.span>
        ?
      </Text>
    </>
  );
}
