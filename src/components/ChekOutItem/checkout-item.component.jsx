import "./checkout-items.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckOutItem = ({ cartItem }) => {
  const addItemsHandler = () => addItemsToCart(cartItem);
  const removeItemsHandler = () => removeItemsFromCart(cartItem);
  const clearCartItemsHandler = () => removeItemsFromCart(cartItem, true);
  const { addItemsToCart, removeItemsFromCart } = useContext(CartContext);
  const { name, imageUrl, price, qty } = cartItem;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button className="decrease" onClick={removeItemsHandler}>
          &#10094;
        </button>
        {qty}
        <button className="increase" onClick={addItemsHandler}>
          &#10095;
        </button>
      </span>
      <span className="price"> $ {price} </span>
      <div className="remove-button" onClick={clearCartItemsHandler}>
        <button className="remove-button-btn">&#10005;</button>
      </div>
    </div>
  );
};

export default CheckOutItem;
