import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="border-b py-2">
              <div className="flex justify-between">
                <div>
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <Link
          to="/"
          className="bg-blue-500 text-white p-2 rounded mr-4"
        >
          Back to Products
        </Link>
        <button className="bg-green-500 text-white p-2 rounded">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
