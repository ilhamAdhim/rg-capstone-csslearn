import { FormControl, Input, FormLabel } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

export default function ModalPertanyaanUpdate({
  currentLatihan,
  setFormObj,
  formObj,
}) {
  const [opsi1, setOpsi1] = useState(currentLatihan.answer1);
  const [opsi2, setOpsi2] = useState(currentLatihan.answer2);
  const [opsi3, setOpsi3] = useState(currentLatihan.answer3);
  const [opsi4, setOpsi4] = useState(currentLatihan.answer4);

  const [keyAnswer, setKeyAnswer] = useState(currentLatihan.key_answer);

  const [questionVal, setQuestionVal] = useState(currentLatihan.question);

  useEffect(() => {
    setFormObj({
      // TODO : Kemungkinan menambah id_latihan
      answer1: opsi1,
      answer2: opsi2,
      answer3: opsi3,
      answer4: opsi4,
      id_course: currentLatihan.id_course,
      key_answer: keyAnswer,
      question: questionVal,
    });
  }, [opsi1, opsi2, opsi3, opsi4, keyAnswer, questionVal]);

  return (
    <>
      <FormControl mt={4}>
        <FormLabel>Question text</FormLabel>
        <Input
          borderColor={"#33A9DC"}
          variant="outline"
          height={20}
          value={formObj?.question}
          onChange={(e) => setQuestionVal(e.target.value)}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Option A</FormLabel>
        <Input
          borderColor={"#33A9DC"}
          variant="outline"
          value={formObj?.answer1}
          onChange={(e) => setOpsi1(e.target.value)}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Option B</FormLabel>
        <Input
          borderColor={"#33A9DC"}
          variant="outline"
          value={formObj?.answer2}
          onChange={(e) => setOpsi2(e.target.value)}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Option C</FormLabel>
        <Input
          borderColor={"#33A9DC"}
          variant="outline"
          value={formObj?.answer3}
          onChange={(e) => setOpsi3(e.target.value)}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Option D</FormLabel>
        <Input
          borderColor={"#33A9DC"}
          variant="outline"
          value={formObj?.answer4}
          onChange={(e) => setOpsi4(e.target.value)}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Key Answer</FormLabel>
        <Input
          borderColor={"#33A9DC"}
          variant="outline"
          value={formObj?.key_answer}
          onChange={(e) => setKeyAnswer(e.target.value)}
        />
      </FormControl>
    </>
  );
}
