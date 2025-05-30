import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import EmptyCartImg from "../assets/images/empty-cart.gif";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <img src={EmptyCartImg} className="card-img-top mb-4" alt="EMpty" />
        </>
      ) : (
        <>
          <ul className="list-group col-md-8 mx-auto text-start">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center">
                <div className="col-md-4 justify-content-start align-items-center d-flex ">
                  <img
                    src={item.image}
                    className="cart-img me-md-3"
                    alt={item.alt || item.name}
                  />{" "}
                  <h5>{item.name}</h5>
                </div>
                <div className="prod-calc col-md-3">
                  ₹{item.price.toLocaleString("en-IN")} x {item.quantity}
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="btn btn-danger btn-sm">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="my-4">
            <h3>Add More items?</h3>
            <Link to="/" className="cart-link">
              Go to Home &gt;
            </Link>
          </div>
          <h4 className="mt-3">Total: ₹{total.toLocaleString("en-IN")}</h4>
          <Link to="/checkout" className="btn btn-primary mt-3 mb-4">
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
};
export default Cart;
