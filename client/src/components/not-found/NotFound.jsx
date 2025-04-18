import { Link } from "react-router";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/">Go back Home</Link>
    </div>
  );
}
