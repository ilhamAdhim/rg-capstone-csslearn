import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import { ChakraProvider } from "@chakra-ui/react";
import NotFound from "./pages/NotFound";
import HomeAdmin from "./pages/admin";
import Latihan from "./pages/siswa/latihan";
import Pertanyaan from "./pages/siswa/latihan/pertanyaan";
import Materi from "./pages/siswa/materi";
import ProfilSiswa from "./pages/siswa/ProfilSiswa";
import LatihanAdminPage from "./pages/admin/latihan";
import MateriAdminPage from "./pages/admin/materi";
import ProfileAdminPage from "./pages/admin/profile";
import DaftarSiswa from "./pages/admin/siswa";

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
          <Route path="siswa" element={<Materi />} />

          <Route path="siswa/pertanyaan" element={<Pertanyaan />} />
          <Route path="siswa/pertanyaan" element={<Pertanyaan />} />

          <Route path="siswa/latihan" element={<Latihan />} />
          <Route path="siswa/materi" element={<Materi />} />
          <Route path="siswa/profil" element={<ProfilSiswa />} />
          {/* End Route Siswa */}

          {/* Route Admin */}

          <Route path="admin" element={<HomeAdmin />} />
          <Route path="admin/latihan" element={<LatihanAdminPage />} />
          <Route path="admin/materi" element={<MateriAdminPage />} />
          <Route path="admin/profil" element={<ProfileAdminPage />} />

          <Route path="admin/latihan" element={<LatihanAdminPage />} />
          <Route
            path="admin/latihan/:idLatihan"
            element={<LatihanAdminPage />}
          />

          <Route path="admin/siswa" element={<DaftarSiswa />} />
          {/* // TODO: Element komponennya diganti */}
          <Route path="admin/siswa/:idMateri" element={<DaftarSiswa />} />
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
