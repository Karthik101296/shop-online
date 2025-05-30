import "./App.css";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/shop-online" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
