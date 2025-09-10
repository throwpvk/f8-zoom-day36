import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
