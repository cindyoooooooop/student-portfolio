import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page">
      <div className="hero">
        <h1>Hi, I'm Cindy B. Laviña</h1>
        <p>CS Student · Developer · Creative Builder</p>
        <div className="hero-badges">
          <span className="badge">React</span>
          <span className="badge">Java</span>
          <span className="badge">SQL</span>
          <span className="badge">CSS</span>
          <span className="badge">HTML</span>
        </div>
        <Link to="/projects" className="btn">View My Projects →</Link>
      </div>
    </div>
  );
}