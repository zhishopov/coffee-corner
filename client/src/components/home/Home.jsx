import { useEffect, useState } from "react";
import "./Home.css";
import menuService from "../../services/menuService";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      menuService.getAllProducts().then((result) => {
        setProducts(result.products);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <>
      <div className="main-content">
        <button className="browse">Book a Table</button>
      </div>
      <div className="top-three">
        {products.slice(0, 3).map((product, index) => (
          <div key={index} className="product-box">
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
