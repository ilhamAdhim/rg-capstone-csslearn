import { chakra, Text } from "@chakra-ui/react";

import React from "react";

export default function ModalPertanyaanDelete({ currentPertanyaan }) {
  return (
    <>
      <Text align="center">
        Yakin ingin menghapus
        <chakra.span fontWeight="bold" textDecor="underline">
          {" "}
          {currentPertanyaan?.pertanyaan}{" "}
        </chakra.span>
        ?
      </Text>
    </>
  );
}
