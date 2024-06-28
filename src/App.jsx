// import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./page/Home";
import Layout from "./page/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;