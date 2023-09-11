import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
      <h1>Winterworks</h1>
      <Navbar />
      <h4>Welcome to Winterworks</h4>
      <h4>IDK what to put here: Maybe a picture</h4>
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
