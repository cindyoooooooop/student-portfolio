export default function About() {
  return (
    <div className="page">
      <h1 className="section-title">About Me</h1>

      <div className="info-box">
        <h2>Who I Am</h2>
        <p>I am Cindy B. Laviña, a 3rd year Computer Science student at University of Cabuyao. I am passionate about software development and enjoy creating innovative solutions to real-world problems.</p>
      </div>

      <div className="info-box">
        <h2>Education</h2>
        <p>BS Computer Science — University of Cabuyao</p>
      </div>

      <div className="info-box">
        <h2>Skills</h2>
        <div className="tag-list">
          <span className="tag">Java</span>
          <span className="tag">HTML</span>
          <span className="tag">CSS</span>
          <span className="tag">SQL</span>
          <span className="tag">React</span>
          <span className="tag">Assembly</span>
          <span className="tag">C#</span>
        </div>
      </div>

      <div className="info-box">
        <h2>Experience</h2>
        <p>QA & Documentation Lead — Student Team Project</p>
      </div>
    </div>
  );
}