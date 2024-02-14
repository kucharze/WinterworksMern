import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import ContactInfo from "./pages/Contact/ContactInfo";
import About from "./pages/About/About";
// import Designs from "./pages/Designs/Designs";
import Orders from "./pages/Orders/Orders";
import Logo from "./components/Logo/Logo";

function App() {
  return (
    <div className="App">
      <div className="TopContact">
        <h1>Email: Winterworks1@gmail.com</h1>
        <h1>Phone: 412-884-5278</h1>
      </div>

      <Logo />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/placeOrder" element={<Orders />} />
        <Route path="/contactinfo" element={<ContactInfo />} />
      </Routes>
    </div>
  );
}

export default App;
