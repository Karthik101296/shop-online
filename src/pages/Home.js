import { Link } from "react-router-dom";
import { Products } from "../data/Products";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";

//const categories = ["clothing", "electronics", "books", "jewellery"];
const categories = Object.keys(Products);
//console.log(categories);

function shuffleProducts(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Home = () => {
  const [shuffledProducts, setShuffledProducts] = useState([]);

  useEffect(() => {
    const stored = sessionStorage.getItem("shuffledProducts");
    if (stored) {
      setShuffledProducts(JSON.parse(stored));
    } else {
      const allProducts = Object.values(Products).flat();
      const shuffledProducts = shuffleProducts(allProducts);
      sessionStorage.setItem(
        "shuffledProducts",
        JSON.stringify(shuffledProducts)
      );
      setShuffledProducts(shuffledProducts);
    }
  }, []);

  return (
    <div className="container mt-4 mb-3">
      <h2 className="text-start">Browse Categories</h2>
      <div className="row categories mt-4">
        {categories.map((category) => (
          <div key={category} className="">
            <Link
              to={`/category/${category}`}
              className="category-pill text-capitalize">
              {category}
            </Link>
          </div>
        ))}
      </div>
      <div className="row mt-4 mb-3">
        <h2 className="mb-3">All Products</h2>
        {shuffledProducts.map((product) => (
          <ProductCard
            key={`${product.id}-${product.name}`}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
