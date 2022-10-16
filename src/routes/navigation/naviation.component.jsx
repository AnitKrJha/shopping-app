import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/CartIcon/cart-icon.component";
import CartDropdown from "../../components/CartDropdown/cart-dropdown.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen,setIsCartOpen} =useContext(CartContext);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrownLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={SignOutUser}>
              Sign-Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              {currentUser ? "Sign-Out" : "Sign-In"}
            </Link>
          )}
          <CartIcon/>
        </div>
        { isCartOpen&&<CartDropdown/>}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
