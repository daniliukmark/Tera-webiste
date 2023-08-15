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
import { RungtyniuDetalesPage } from "src/pages/RungtyniuDetalesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={`${BASE_URL}/`} element={<MainLayout />}>
          <Route index element={<PagrindinisPage />} />
          <Route path="klubas" element={<ApieKlubaPage />} />
          <Route path="parama" element={<ParamaPage />} />
          <Route path="komanda" element={<KomandaPage />} />
          <Route path="kontaktai" element={<KontaktaiPage />} />
          <Route path="/rungtynes/:id" element={<RungtyniuDetalesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
