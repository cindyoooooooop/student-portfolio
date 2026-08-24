import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Student Directory', description: 'Searchable student list.', link: 'https://github.com/cindyoooooooop/student-directory.git://github.com' },
  { id: 2, title: 'Task Tracker Web', description: 'Git practice', link: 'https://github.com/raipam44/tasktracker-web.git' },

]
export default function Projects() {
  return (
    <div className="page">
      <h1 className="section-title">My Projects</h1>
      <div className="card-grid">
        {projects.map(project => (
          <div className="card" key={project.id}>
            <span className="card-number">PROJECT {String(project.id).padStart(2, '0')}</span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`}>View Details →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}