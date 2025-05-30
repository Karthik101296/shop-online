import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Products } from "../data/Products";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Category = () => {
  const { name } = useParams();
  const category = name?.toLowerCase();
  const items = Products[category] || [];

  return (
    <div className="container mt-4">
        <div className="text-start">
            <Link className="cart-link " to="/shop-online"> <FaArrowLeft className="mx-1" />
Back to Home</Link>
        </div>
        
      <h2>{name.toUpperCase()}</h2>
      <div className="row">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Category;
