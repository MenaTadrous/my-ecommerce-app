import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Access the addToCart function from CartContext

  return (
    <div className="border p-4 rounded-lg">
      <img src={product.image} alt={product.title} />
      <h2 className="font-bold">{product.title}</h2>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white p-2 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
