const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio built to showcase my profile, skills, and contact information with a clean responsive interface.',
    stack: ['React', 'CSS', 'Vite'],
    github: 'https://github.com/dhruv23153089/Portfolio',
    live: 'https://github.com/dhruv23153089',
  },
  {
    title: 'AI/ML Practice Projects',
    description:
      'A collection of machine learning practice projects focused on data analysis, preprocessing, and building regression and classification models using Python libraries.',
    stack: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'Regression', 'Classification'],
    github: 'https://github.com/dhruv23153089/Used-Car-Price-Prediction',
    live: 'https://used-car-price-prediction-tau.vercel.app/',
  },
  {
    title: 'WriteNest',
    description:
      'A writing-focused project built to create a smooth and user-friendly experience for creating, managing, and exploring content with Appwrite handling backend services and OpenRouter powering the AI chatbot.',
    stack: ['React', 'Appwrite', 'OpenRouter', 'JavaScript', 'CSS'],
    github: 'https://github.com/dhruv23153089/WriteNest',
    live: 'https://write-nest-eta.vercel.app/',
  },
];

function ProjectsSection() {
  return (
    <section className="projects" id="projects">
      <div className="box4">
        <span className="section-tag">Projects</span>
        <h1>Featured Work</h1>
        <p className="section-intro">
          These projects reflect my interest in full-stack development, practical
          product building, and applying technical skills to real use cases.
        </p>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-top">
                <span className="project-dot" />
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live View
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
