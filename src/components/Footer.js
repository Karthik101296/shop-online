import AppLogo from "../assets/images/shop-online-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-light pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          {/* Company Info */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              <img className="logo-img" src={AppLogo} alt="E-commerce" />
            </h5>
            <p>
              Your one-stop shop for everything you need. Quality products,
              unbeatable prices.
            </p>
          </div>

          {/* Products */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 footer-links">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Products
            </h5>
            <p>
              <Link to="/category/clothing">Clothing</Link>
            </p>
            <p>
              <Link to="/category/electronics">Electronics</Link>
            </p>
            <p>
              <Link to="/category/books">Books</Link>
            </p>
            <p>
              <Link to="/category/jewellery">Jewellery</Link>
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 footer-links">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Useful Links
            </h5>
            <p>
              <button className="btn btn-link text-light text-decoration-none p-0">
                Your Account
              </button>
            </p>
            <p>
              <button className="btn btn-link text-light text-decoration-none p-0">
                Orders
              </button>
            </p>
            <p>
              <button className="btn btn-link text-light text-decoration-none p-0">
                Wishlist
              </button>
            </p>
            <p>
              <button className="btn btn-link text-light text-decoration-none p-0">
                Help
              </button>
            </p>
          </div>

          {/* Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Contact
            </h5>
            <p>
              <i className="fas fa-home me-3"></i> 123 Market St, Bengaluru, KA
            </p>
            <p>
              <i className="fas fa-envelope me-3"></i> support@shoponline.com
            </p>
            <p>
              <i className="fas fa-phone me-3"></i> +1 234 567 890
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-md-8 col-lg-8">
            <div className="text-center">
              <span className="text-light me-4">
                <i className="fab fa-facebook-f"></i>
              </span>
              <span className="text-light me-4">
                <i className="fab fa-twitter"></i>
              </span>
              <span className="text-light me-4">
                <i className="fab fa-instagram"></i>
              </span>
              <span className="text-light me-4">
                <i className="fab fa-linkedin-in"></i>
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p>© {new Date().getFullYear()} Shop Online. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
