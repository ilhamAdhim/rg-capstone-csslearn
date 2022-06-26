import { Text } from "@chakra-ui/react";
// import { Item } from "framer-motion/types/components/Reorder/Item";

import React, { useCallback, useEffect, useState } from "react";

export default function ModalSiswaPreview({ currentSiswa }) {
  const [dataUser, setDataUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

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
      <Text mt={10} textAlign="center">
        Riwayat Kursus Dari User [ {currentSiswa.username} ]
      </Text>
      <Text textAlign="center">
        Kursus Yang Telah Diambil : {currentSiswa.usercourse}
      </Text>
      <Text textAlign="center">
        Hasil Latihan Course : {currentSiswa.userlatihan}
      </Text>
    </>
  );
}
