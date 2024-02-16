import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import CardDetails from "./Components/CardDetails";
import Cards from "./Components/Cards";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
}

export default App;
