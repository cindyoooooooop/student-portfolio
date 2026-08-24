import { useParams, Link } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Student Directory', description: 'Searchable student list.', link: 'https://github.com/cindyoooooooop/student-directory.git://github.com' },
  { id: 2, title: 'Task Tracker Web', description: 'Git practice', link: 'https://github.com/raipam44/tasktracker-web.git' },

];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) return <p>Project not found. <Link to="/projects">Back to Projects</Link></p>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
      <br />
      <Link to="/projects">Back to Projects</Link>
    </div>
  );
}