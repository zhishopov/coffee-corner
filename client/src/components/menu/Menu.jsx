import { useEffect, useState } from "react";
import menuService from "../../services/menuService.js";

export default function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      menuService.getAllProducts().then((result) => {
        setProducts(result.products);
      });
    } catch (error) {
      console.log(error.meesage);
    }
  }, []);

  return (
    <div>
      {products.map((product) => (
        <>
          <h1>Product</h1>
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>Price: </p>
          <p>Image: </p>
        </>
      ))}
    </div>
  );
}
