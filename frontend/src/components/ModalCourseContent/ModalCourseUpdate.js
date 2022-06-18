import { FormControl, Input, FormLabel, Textarea } from "@chakra-ui/react";

import React from "react";

export default function ModalCourseUpdate({ currentCourse, formObj }) {
  const initialRef = React.useRef(null);

  //   TODO : Set Form & Validation
  // ...
  return (
    <>
      <FormControl>
        <FormLabel mt={4}>Title</FormLabel>
        <Input
          ref={initialRef}
          borderColor={"#33A9DC"}
          variant="outline"
          value={currentCourse.judul_course}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Description</FormLabel>
        <Textarea value={currentCourse.description} />
      </FormControl>
    </>
  );
}
