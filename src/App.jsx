import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import { CartProvider } from "./context/CartContext";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="App">
        <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My E-Commerce Store</h1>
          <nav>
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/cart">Cart</Link>
          </nav>
          </div>
          <Routes>
            <Route path="/" element={<ProductList products={products} />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
