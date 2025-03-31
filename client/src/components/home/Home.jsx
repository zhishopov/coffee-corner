import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/menuApi";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllProducts()
      .then((result) => {
        if (result && result.products) {
          setProducts(result.products.slice(0, 3));
        } else {
          setError("No products found.");
        }
      })
      .catch((error) => {
        setError(error.message || "Failed to fetch products.");
      });
  }, []);

  return (
    <>
      <div className="main-content">
        <button className="browse">Book a Table</button>
      </div>

      <div className="top-three">
        {error && <p className="error-message">{error}</p>}{" "}
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product, index) => (
            <div key={index} className="product-box">
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
