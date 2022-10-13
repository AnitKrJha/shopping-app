import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
