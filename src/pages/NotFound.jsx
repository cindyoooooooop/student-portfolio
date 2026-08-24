import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page not-found">
      <h1>404</h1>
      <p>Oops — that page doesn't exist</p>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
}