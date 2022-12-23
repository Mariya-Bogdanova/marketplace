import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />}></Route>
      </Routes>
    </>
  );
}

export default App;
