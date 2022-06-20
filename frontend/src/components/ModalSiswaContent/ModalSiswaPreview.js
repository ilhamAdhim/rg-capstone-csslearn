import { Text } from "@chakra-ui/react";

import React, { useCallback, useEffect } from "react";

export default function ModalSiswaPreview({ currentSiswa }) {
  const fetchDataSiswa = useCallback(() => {
    // TODO : Fetch data siswa by ID
    // ...
    // TODO : Fetch data latihan & Skor by ID siswa
    // ...
    console.log(currentSiswa);
  }, [currentSiswa]);

  useEffect(() => {
    fetchDataSiswa();
  }, [fetchDataSiswa]);

  return (
    <>
      <Text mt={10} textAlign="center" py={6}>
        riwayat kursus : - - -
      </Text>
    </>
  );
}
