import { Route, Routes } from "react-router-dom";
import Userlayout from "./components/layouts/Userlayout";
import { Home } from "../pages";
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Userlayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route>{/*Admin Layout*/}</Route>
    </Routes>
  );
}

export default App;
