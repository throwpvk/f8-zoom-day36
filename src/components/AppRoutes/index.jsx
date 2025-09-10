import { HashRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
import AuthLayout from "../../layouts/AuthLayout";
import AdminLayout from "../../layouts/AdminLayout";
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
        {/* DefaultLayout*/}
        <Route path="/" element={<DefaultLayout />}>
          {/* Nested routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="postdetail/:id" element={<PostDetail />} />
          <Route path="posts" element={<Posts />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
        {/* AuthLayout*/}
        <Route path="/" element={<AuthLayout />}>
          {/* Nested routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* AdminLayout*/}
        <Route path="/" element={<AdminLayout />}>
          {/* Nested routes */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<Users />} />
        </Route>
        {/* NoLayout*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
