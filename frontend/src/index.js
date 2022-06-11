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
import HomeSiswa from "./pages/siswa";
import HomeAdmin from "./pages/admin";
import Latihan from "./pages/siswa/latihan";
import Pertanyaan from "./pages/siswa/latihan/pertanyaan";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="siswa" element={<HomeSiswa />} />
          <Route path="siswa/pertanyaan" element={<Pertanyaan />} />
          <Route path="siswa/latihan" element={<Latihan />} />

          <Route path="admin" element={<HomeAdmin />}></Route>

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
