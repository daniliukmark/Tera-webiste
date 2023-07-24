import { Route, Routes } from "react-router-dom";
import { MainLayout } from "src/layouts/MainLayout";
import "src/styles/App.css";
import { PagrindinisPage } from "./pages/PagrindisPage";
import { ApieKlubaPage } from "./pages/ApieKlubaPage";
import { ParamaPage } from "./pages/ParamaPage";
import { KontaktaiPage } from "./pages/KontaktaiPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { KomandaPage } from "./pages/KomandaPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PagrindinisPage />}></Route>
          <Route path="/klubas" element={<ApieKlubaPage />}></Route>
          <Route path="/parama" element={<ParamaPage />}></Route>
          <Route path="/komanda" element={<KomandaPage />}></Route>
          <Route path="/kontaktai" element={<KontaktaiPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
