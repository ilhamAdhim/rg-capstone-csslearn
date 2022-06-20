import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

// Auth
import Login from "./pages/login";
import Logout from "./pages/logout";
import Register from "./pages/register";

// Common
import NotFound from "./pages/NotFound";

// Admins
import DaftarSiswa from "./pages/admin/siswa";
import CourseAdminPage from "./pages/admin/course";
import MateriAdminPage from "./pages/admin/materi";
import LatihanAdminPage from "./pages/admin/latihan";
import ProfileAdminPage from "./pages/admin/profile";
import MateriDetailAdminPage from "./pages/admin/materi/MateriDetail";
import MateriTambahAdminPage from "./pages/admin/materi/MateriTambahAdminPage";

// Siswa
import Materi from "./pages/siswa/materi";
import Latihan from "./pages/siswa/latihan";
import ProfilSiswa from "./pages/siswa/ProfilSiswa";
import Pertanyaan from "./pages/siswa/latihan/pertanyaan";
import PengerjaanSoal from "./pages/siswa/latihan/pertanyaan";
import MateriDetailSiswa from "./pages/siswa/materi/MateriDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* Route Siswa */}

          <Route path="siswa/course" element={<Materi />} />
          <Route path="siswa/materi" element={<Materi />} />
          <Route
            path="siswa/materi/:idMateri"
            element={<MateriDetailSiswa />}
          />

          <Route path="siswa/pertanyaan" element={<Pertanyaan />} />

          <Route path="siswa/latihan" element={<Latihan />} />
          <Route
            path="siswa/latihan/:exerciseCourse/:idSoal"
            element={<PengerjaanSoal />}
          />
          <Route path="siswa/profil" element={<ProfilSiswa />} />

          <Route path="siswa/logout" element={<Logout />} />
          <Route path="siswa/*" element={<Navigate replace to="course" />} />

          {/* End Route Siswa */}

          {/* Route Admin */}

          <Route path="admin/latihan" element={<LatihanAdminPage />} />
          <Route path="admin/materi" element={<MateriAdminPage />} />
          <Route
            path="admin/materi/:idMateri"
            element={<MateriDetailAdminPage />}
          />

          <Route
            path="admin/materi/tambah"
            element={<MateriTambahAdminPage />}
          />

          <Route path="admin/course" element={<CourseAdminPage />} />
          <Route path="admin/profil" element={<ProfileAdminPage />} />

          <Route path="admin/latihan" element={<LatihanAdminPage />} />
          <Route
            path="admin/latihan/:idLatihan"
            element={<LatihanAdminPage />}
          />

          <Route path="admin/siswa" element={<DaftarSiswa />} />
          {/* // TODO: Element komponennya diganti */}
          <Route path="admin/siswa/:idMateri" element={<DaftarSiswa />} />

          <Route path="admin/logout" element={<Logout />} />

          <Route path="admin/*" element={<Navigate replace to="course" />} />

          {/* End Route Admin */}

          {/* Not found page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
