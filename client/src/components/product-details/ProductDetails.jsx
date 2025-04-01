import { useEffect, useState } from "react";
import { useParams } from "react-router"; // Corrected import path
import { getProductById } from "../../api/menuApi";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams(); // id comes from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductById(id) // Pass the product ID
      .then((data) => {
        console.log("Fetched Product:", data); // Log the data for debugging
        setProduct(data);
      })
      .catch((error) => {
        setError(error.message || "Failed to fetch product details.");
      });
  }, [id]);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-details-container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>{product.description}</p>
    </div>
  );
}
