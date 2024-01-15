import Home from "./pages/home.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SpecificProfilePage from "./pages/SpecificProfilePage.jsx";

import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

import { appRoutes } from "./Routes/routes.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
      <Routes>
        <Route path={appRoutes.home} element={<Home />} />
        <Route path={appRoutes.profile} element={<ProfilePage />} />
        <Route path={appRoutes.specificProfile} element={<SpecificProfilePage />} />
      </Routes>
      </BrowserRouter>
    </Layout>
  );
}
