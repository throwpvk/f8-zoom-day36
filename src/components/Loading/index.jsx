import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import PostDetail from "../../pages/PostDetail";
import Posts from "../../pages/Posts";
import Privacy from "../../pages/Privacy";
import Register from "../../pages/Register";
import Settings from "../../pages/Settings";
import Users from "../../pages/Users";

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/postDetail" element={<PostDetail />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
