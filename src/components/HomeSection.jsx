import heroImage from '../assets/profile_photo.jpg';
import resumeFile from '../assets/Dhruv Jaiswal Resume.pdf';

function HomeSection() {
  return (
    <section className="home" id="home">
      <div className="contain">
        <span className="section-tag">MERN Stack Developer | AI/ML Enthusiast</span>
        <h1>Hi, I&apos;m Dhruv Jaiswal.</h1>
        <h3>I build full-stack web applications and explore practical AI/ML solutions.</h3>
        <p>
          I&apos;m a Computer Science student specializing in AI and Machine Learning, with
          a strong focus on the MERN stack, intelligent systems, and solving real-world
          problems through scalable, user-focused products.
        </p>
        <div className="hero-highlights">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>AI/ML</span>
          <span>Problem Solving</span>
        </div>
        <div className="box">
          <a href="#projects">View Projects</a>
          <a href={resumeFile} target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
      </div>
      <div className="image hero-visual">
        <div className="hero-image-frame">
          <img src={heroImage} alt="Illustration of Dhruv working on code" />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
