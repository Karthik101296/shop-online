import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useState } from "react";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState("");
  const [useSameAddress, setUseSameAddress] = useState(true);

  const [shipping, setShipping] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const [errors, setErrors] = useState({});

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    const updater = type === "shipping" ? setShipping : setBilling;
    const current = type === "shipping" ? shipping : billing;
    updater({ ...current, [name]: value });
  };

  const validateAddress = (address, type) => {
    const fieldErrors = {};
    const requiredFields = ["firstName", "lastName", "street", "city", "state", "zipcode"];
    requiredFields.forEach((field) => {
      if (!address[field]?.trim()) {
        fieldErrors[`${type}.${field}`] = `${field.replace(/^\w/, (c) => c.toUpperCase())} is required.`;
      }
    });
    return fieldErrors;
  };

  const validate = () => {
    const newErrors = {};

    if (!paymentMethod) {
      newErrors.paymentMethod = "Please select a payment method.";
    }

    if (paymentMethod === "COD") {
      Object.assign(newErrors, validateAddress(shipping, "shipping"));
      if (!useSameAddress) {
        Object.assign(newErrors, validateAddress(billing, "billing"));
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrder = () => {
    if (!validate()) return;

    const finalBilling = useSameAddress ? shipping : billing;

    alert(`Order placed with ${paymentMethod === "COD" ? "Cash on Delivery" : "Card"}!\n
Shipping Address: ${Object.values(shipping).join(", ")}\n
Billing Address: ${Object.values(finalBilling).join(", ")}`);

    dispatch(clearCart());
    setPaymentMethod("");
    setShipping({
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
    });
    setBilling({
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
    });
    setErrors({});
    setUseSameAddress(true);
  };

  const renderAddressFields = (type, address, onChange) => {
    const fields = [
      { name: "firstName", label: "First Name" },
      { name: "lastName", label: "Last Name" },
      { name: "street", label: "Street" },
      { name: "city", label: "City" },
      { name: "state", label: "State" },
      { name: "zipcode", label: "Zipcode" },
    ];

    return (
      <div className="row col-md-6 mx-auto">
        {fields.map(({ name, label }) => (
          <div className="mb-3 col-md-6" key={`${type}-${name}`}>
            <label htmlFor={`${type}-${name}`} className="form-label">
              {label}
            </label>
            <input
              type="text"
              id={`${type}-${name}`}
              name={name}
              value={address[name]}
              onChange={onChange}
              onBlur={() => setErrors("")}
              className={`form-control ${errors[`${type}.${name}`] ? "is-invalid" : ""}`}
            />
            {errors[`${type}.${name}`] && (
              <div className="invalid-feedback">{errors[`${type}.${name}`]}</div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      <p>Total: ₹{total.toLocaleString("en-IN")}</p>

      <h5>Payment Method</h5>
      <div className="form-check d-flex justify-content-center">
        <input
          className="form-check-input mx-2"
          type="radio"
          name="paymentMethod"
          id="cod"
          value="COD"
          checked={paymentMethod === "COD"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <label className="form-check-label" htmlFor="cod">
          Cash on Delivery
        </label>
      </div>
      <div className="form-check mb-3 d-flex justify-content-center">
        <input
          className="form-check-input mx-2"
          type="radio"
          name="paymentMethod"
          id="card"
          value="Card"
          disabled
          checked={paymentMethod === "Card"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <label className="form-check-label" htmlFor="card">
          Credit/Debit Card
        </label>
      </div>
      {errors.paymentMethod && (
        <div className="text-danger text-center mb-2">{errors.paymentMethod}</div>
      )}

      {paymentMethod === "COD" && (
        <>
          <hr />
          <h5>Shipping Address</h5>
          {renderAddressFields("shipping", shipping, (e) => handleInputChange(e, "shipping"))}

          <div className="form-check mb-3 d-flex col-md-6 mx-auto">
            <input
              className="form-check-input mx-2"
              type="checkbox"
              id="sameAddress"
              checked={useSameAddress}
              onChange={(e) => setUseSameAddress(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="sameAddress">
              Billing address is the same as shipping address
            </label>
          </div>

          {!useSameAddress && (
            <>
              <h5>Billing Address</h5>
              {renderAddressFields("billing", billing, (e) => handleInputChange(e, "billing"))}
            </>
          )}
        </>
      )}

      <button
        className="btn btn-success mb-4 mt-3"
        onClick={handleOrder}
        disabled={total === 0}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
