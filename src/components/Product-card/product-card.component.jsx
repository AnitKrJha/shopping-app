import "./product-card.styles.scss";
import Button from "../Button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
  let { name, price, imageUrl } = product;
  const { addItemsToCart } = useContext(CartContext);

  const addProductToCart = () => addItemsToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
