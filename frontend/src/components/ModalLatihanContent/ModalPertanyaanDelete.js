import { chakra, Text } from "@chakra-ui/react";

import React from "react";

export default function ModalPertanyaanDelete({ currentLatihan }) {
  console.log(currentLatihan);
  return (
    <>
      <Text align="center">
        Yakin ingin menghapus
        <chakra.span fontWeight="bold" textDecor="underline">
          {" "}
          {currentLatihan?.question}{" "}
        </chakra.span>
        ?
      </Text>
    </>
  );
}
