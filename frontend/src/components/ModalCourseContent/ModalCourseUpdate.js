import { FormControl, Input, FormLabel, Textarea } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

export default function ModalCourseUpdate({
  currentCourse,
  formObj,
  setFormObj,
}) {
  const initialRef = React.useRef(null);

  const [namaCourse, setNamaCourse] = useState(currentCourse.nama_course);
  const [deskripsiCourse, setDeskripsiCourse] = useState(currentCourse.content);

  useEffect(() => {
    setFormObj({
      nama_course: namaCourse,
      content: deskripsiCourse,
    });
  }, [namaCourse, deskripsiCourse]);

  return (
    <>
      <FormControl>
        <FormLabel mt={4}>Title</FormLabel>
        <Input
          ref={initialRef}
          borderColor={"#33A9DC"}
          variant="outline"
          value={formObj.nama_course}
          onChange={(e) => setNamaCourse(e.target.value)}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Description</FormLabel>
        <Textarea
          value={formObj.content}
          onChange={(e) => setDeskripsiCourse(e.target.value)}
        />
      </FormControl>
    </>
  );
}
