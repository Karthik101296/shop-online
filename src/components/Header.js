import { Link } from "react-router-dom";
import AppLogo from "../assets/images/shop-online-logo.png";
import { useSelector } from "react-redux";
import { MdShoppingCart } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

function Header() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="header">
      <nav className="container navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/shop-online">
          <img className="logo-img" src={AppLogo} alt="E-commerce" />
        </Link>

        <div className="mobile-disp">
          <ul className="d-flex justify-content-between p-0 mb-0">
            <li className="nav-item">
              <Link className="nav-link" to="/shop-online" title="Home">
                <IoMdHome size={24} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link position-relative"
                to="/cart"
                title={`Cart : ${cart.length}`}>
                <MdShoppingCart size={24} />
                {cart.length > 0 ? (
                  <sup className="cart-icon position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </sup>
                ) : null}
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/shop-online" title="Home">
                <IoMdHome size={24} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link position-relative"
                to="/cart"
                title={`Cart : ${cart.length}`}>
                <MdShoppingCart size={24} />
                {cart.length > 0 ? (
                  <sup className="cart-icon position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </sup>
                ) : null}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
