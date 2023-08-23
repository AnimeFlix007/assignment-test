import App from "../App";
import { Route, Routes } from "react-router-dom";
import Blog from "../page/Blog";

export default function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<App />} />
      <Route path={"/post-detail"} element={<Blog />} />
    </Routes>
  );
}
