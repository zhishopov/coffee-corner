import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getAllProducts } from "../../api/menuApi";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllProducts()
      .then((result) => {
        console.log("Fetched Products:", result);
        setProducts(result.slice(0, 3));
      })
      .catch((error) => {
        setError(error.message || "Failed to fetch products.");
      });
  }, []);

  return (
    <>
      <div className="main-content">
        <Link to="/book-table" className="browse">
          Book a Table
        </Link>
      </div>

      <div className="top-three">
        {error && <p className="error-message">{error}</p>}
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <div key={product._id} className="product-box">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
