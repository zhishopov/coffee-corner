import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getAllProducts } from "../../api/menuApi";
import "./Menu.css";

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="menu-container">
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="menu-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h2>{product.name}</h2>
                <p className="price">£{product.price}</p>
                <Link
                  to={`/menu/products/${product._id}`}
                  className="details-link"
                >
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
