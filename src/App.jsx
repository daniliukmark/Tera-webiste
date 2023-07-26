import { Route, Routes } from "react-router-dom";
import { MainLayout } from "src/layouts/MainLayout";
import "src/styles/App.css";
import { PagrindinisPage } from "src/pages/PagrindisPage";
import { ApieKlubaPage } from "src/pages/ApieKlubaPage";
import { ParamaPage } from "src/pages/ParamaPage";
import { KontaktaiPage } from "src/pages/KontaktaiPage";
import { NotFoundPage } from "src/pages/NotFoundPage";
import { KomandaPage } from "src/pages/KomandaPage";
import { BASE_URL } from "src/assets/data";

function App() {
  return (
    <>
      <Routes>
        <Route path={`${BASE_URL}/`} element={<MainLayout />}>
          <Route index element={<PagrindinisPage />}></Route>
          <Route path="klubas" element={<ApieKlubaPage />}></Route>
          <Route path="parama" element={<ParamaPage />}></Route>
          <Route path="komanda" element={<KomandaPage />}></Route>
          <Route path="kontaktai" element={<KontaktaiPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
