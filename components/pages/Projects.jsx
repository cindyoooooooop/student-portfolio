import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Student Directory', description: 'Searchable student list.', link: 'https://github.com/cindyoooooooop/student-directory.git://github.com' },
  { id: 2, title: 'Task Tracker Web', description: 'Git practice', link: 'https://github.com/raipam44/tasktracker-web.git' },

]
export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      {projects.map(project => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <Link to={`/projects/${project.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}