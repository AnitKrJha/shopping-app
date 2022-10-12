import "./navigation.styles.scss";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div><CrownLogo className='logo'/></div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            Sign-In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
