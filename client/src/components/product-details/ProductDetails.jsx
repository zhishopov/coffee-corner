import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getProductById } from "../../api/menuApi";
import "./ProductDetails.css";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        console.log("Fetched Product:", data);
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
      <Link to="/menu" className="back-menu">
        <FaArrowLeftLong></FaArrowLeftLong>
      </Link>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-image" />
      <p className="product-description">{product.description}</p>
    </div>
  );
}
