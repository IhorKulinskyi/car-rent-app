import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout";

const HomePage = lazy(() => import("../pages/HomePage"));
const Catalog = lazy(() => import("../pages/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
