import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllProducts } from "../../api/menuApi";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const handleBookTableClick = () => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    if (authData?.accessToken) {
      navigate("/book-table");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="main-content">
        <button onClick={handleBookTableClick} className="browse">
          Book a Table
        </button>
      </div>

      <div className="top-three">
        <h2>Best Sellers</h2>
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
