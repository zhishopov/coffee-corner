import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getAllProducts } from "../../api/menuApi";
import "./Menu.css";

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        if (data.length > 0) {
          setProducts(data);
        } else {
          setError("No products found.");
        }
      })
      .catch((error) => {
        setError(
          error.message || "Something went wrong while fetching products."
        );
      });
  }, []);

  return (
    <div className="menu-container">
      {error && <p className="error-message">{error}</p>}
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <div className="menu-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h2>{product.name}</h2>
                <p className="price">£{product.price}</p>
                <Link to={`/products/${product._id}`} className="details-link">
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
