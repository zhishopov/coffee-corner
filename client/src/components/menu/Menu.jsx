import { useEffect, useState } from "react";
import menuService from "../../services/menuService.js";
import "./Menu.css";

export default function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    menuService
      .getAllProducts()
      .then((result) => setProducts(result.products))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div className="menu-container">
      {products.map((product, index) => (
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
      ))}
    </div>
  );
}
