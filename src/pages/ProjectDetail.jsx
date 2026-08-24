import { useParams, Link } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Student Directory', description: 'Searchable student list.', link: 'https://github.com/cindyoooooooop/student-directory.git://github.com' },
  { id: 2, title: 'Task Tracker Web', description: 'Git practice', link: 'https://github.com/raipam44/tasktracker-web.git' },

];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) return (
    <div className="page">
      <div className="detail-box">
        <p>Project not found. <Link to="/projects">Back to Projects</Link></p>
      </div>
    </div>
  );

  return (
    <div className="page">
      <div className="detail-box">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <a href={project.link} className="btn" target="_blank" rel="noreferrer">View Project →</a>
        <br />
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </div>
    </div>
  );
}