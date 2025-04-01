import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/menuApi";
import "./Menu.css";

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        console.log("Fetched products:", data);

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
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h2>{product.name}</h2>
                <p className="description">{product.description}</p>
                <p className="price">£{product.price}</p>
                <button>Details</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
