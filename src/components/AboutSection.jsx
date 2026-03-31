function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="box1">
        <span className="section-tag">About Me</span>
        <h1>About Me</h1>
        <p>
          I am a Computer Science and Engineering student specializing in Artificial
          Intelligence and Machine Learning at{' '}
          <a href="https://www.akgec.ac.in" target="_blank" rel="noreferrer">
            Ajay Kumar Garg Engineering College
          </a>
          . I enjoy building end-to-end web applications, learning modern development
          workflows, and exploring how intelligent systems can solve practical problems.
        </p>
        <p>
          My foundation was shaped at{' '}
          <a href="https://www.rpmacademy.org" target="_blank" rel="noreferrer">
            RPM Academy
          </a>
          , where I developed the discipline and curiosity that still guide me today. My
          main interests are MERN stack development, AI/ML, and opportunities where I
          can contribute to meaningful products while growing as a software engineer.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <h3>Education</h3>
            <p>B.Tech in CSE with AI & ML specialization.</p>
          </div>
          <div className="about-card">
            <h3>Focus</h3>
            <p>MERN stack development, AI/ML, and practical full-stack project building.</p>
          </div>
          <div className="about-card">
            <h3>Goal</h3>
            <p>Build reliable products and grow through internships and real-world work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
