import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/menuApi";
import "./Menu.css";

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllProducts()
      .then((result) => {
        console.log(result);

        if (result && result.products) {
          setProducts(result.products);
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
      {error && <p className="error-message">{error}</p>}{" "}
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product, index) => (
          <div key={index} className="product-card">
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
        ))
      )}
    </div>
  );
}
