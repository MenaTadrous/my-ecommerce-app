import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
      <h1 className="text-4xl">E-Commerce Store</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
