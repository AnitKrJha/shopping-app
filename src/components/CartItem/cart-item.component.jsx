import "./cat-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, qty, price, imageUrl } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt="s" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {qty} x {price} = <strong >$ {qty*price}</strong>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
