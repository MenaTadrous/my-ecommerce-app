const ProductCard = ({ product }) => {
    return (
      <div className="border p-4 rounded-lg">
        <img src={product.image} alt={product.title} />
        <h2 className="font-bold">{product.title}</h2>
        <p>${product.price}</p>
      </div>
    );
  };
  
  export default ProductCard;
  