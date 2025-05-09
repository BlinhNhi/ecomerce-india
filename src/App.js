import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./page/Home/HomePage";
import NoPage from "./page/NoPage/NoPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/*" element={<NoPage></NoPage>}></Route>
      </Routes>

    </div>
  );
}

export default App;
