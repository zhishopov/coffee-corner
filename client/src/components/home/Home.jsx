import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="main-content">
        <button className="browse">Book a Table</button>
      </div>
      <div className="top-three">
        <div className="product-box">
          <h3>Prodcut 1</h3>
        </div>
        <div className="product-box">
          <h3>Prodcut 2</h3>
        </div>
        <div className="product-box">
          <h3>Prodcut 3</h3>
        </div>
      </div>
    </>
  );
}
