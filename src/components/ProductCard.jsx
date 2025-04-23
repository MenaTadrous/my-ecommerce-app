import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Access the addToCart function from CartContext

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
      <img src={product.image} alt={product.title} className="w-32 h-32 object-cover mb-4"/>
      <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
      <p>${product.price}</p>
      <button
        onClick={(e) => {
            e.stopPropagation(); // 👈 prevent bubbling to <a> or <Link>
            e.preventDefault();
            addToCart(product)}
        }
        className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
