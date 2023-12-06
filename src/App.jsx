import Home from "./pages/home.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      </BrowserRouter>
    </Layout>
  );
}
