import { useDispatch, useSelector } from "react-redux";
import { addToCart, increment, decrement } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import imageMap from "../utils/imageMap";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.find((item) => item.id === product.id)
  );

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={imageMap[product.image]}
          className="card-img-top"
          alt={product.alt || product.name}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-prod-price">
            ₹<strong>{product.price.toLocaleString("en-IN")}</strong>
          </p>
          <div className="card-button">
            {cartItem ? (
              <>
                <div className="col-md-4 d-flex align-items-center justify-content-between mb-2">
                  <button
                    className="btn px-2 py-1"
                    onClick={() => dispatch(decrement(product.id))}>
                    −
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                    className="btn px-2 py-1"
                    onClick={() => dispatch(increment(product.id))}>
                    +
                  </button>
                </div>
                <Link to="/cart" className="btn btn-primary mt-auto mb-2">
                  Go to Cart
                </Link>
              </>
            ) : (
              <button
                onClick={() => dispatch(addToCart(product))}
                className="btn btn-success mt-auto">
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
