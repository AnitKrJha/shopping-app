import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckOutItem from "../../components/ChekOutItem/checkout-item.component";

const CheckOut = () => {
  const { cartItems ,cartTotal} = useContext(CartContext);

  let total = 0;

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quatity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => {
        return <CheckOutItem cartItem={item} key={item.name} />;
      })}

      <div className="total ">Total: $ {cartTotal}</div>
    </div>
  );
};

export default CheckOut;
