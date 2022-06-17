import { FormControl, Input, FormLabel } from "@chakra-ui/react";

import React from "react";

export default function ModalPertanyaanUpdate({ currentPertanyaan, formObj }) {
  //   TODO : Set Form & Validation
  // ...

  return (
    <>
      <FormControl mt={4}>
        <FormLabel>Question text</FormLabel>
        <Input
          borderColor={"#33A9DC"}
          variant="outline"
          color="black"
          height={40}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Option A</FormLabel>
        <Input
          borderColor={"#33A9DC"}
          variant="outline"
          color="black"
          values={currentPertanyaan?.optionA}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Option B</FormLabel>
        <Input
          borderColor={"#33A9DC"}
          variant="outline"
          color="black"
          values={currentPertanyaan?.optionB}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Option C</FormLabel>
        <Input
          borderColor={"#33A9DC"}
          variant="outline"
          color="black"
          values={currentPertanyaan?.optionC}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Option D</FormLabel>
        <Input
          borderColor={"#33A9DC"}
          variant="outline"
          color="black"
          values={currentPertanyaan?.optionD}
        />
      </FormControl>
    </>
  );
}
