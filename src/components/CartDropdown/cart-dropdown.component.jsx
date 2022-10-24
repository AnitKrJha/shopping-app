import "./cart-dropdown.styles.scss";
import Button from "../Button/button.component";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/cart-item.component";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
const CartDropdown = () => {
  const { cartItems, setIsCartOpen} = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length !== 0 ? (
          cartItems.map((item) => {
            return <CartItem cartItem={item} key={item.id} />;
          })
        ) : (
          <div>{"Your cart Is Empty"}</div>
        )}
      </div>
      <Link to="/checkout">
        <Button
          onClick={() => {
            setIsCartOpen((prev) => !prev);
          }}
        >
          Checkout
        </Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
