const skills = [
  {
    title: 'MERN Stack',
    description:
      'React, Node.js, Express.js, MongoDB, JavaScript, and building full-stack web applications with clean architecture.',
  },
  {
    title: 'Languages',
    description:
      'Comfortable working with JavaScript and Python for web development, scripting, and problem-solving workflows.',
  },
  {
    title: 'Core CS',
    description:
      'Data structures, algorithms, object-oriented programming, and logical problem solving built through practice.',
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Machine learning fundamentals, Python workflows, and growing exposure to data-driven project development.',
  },
];

function SkillsSection() {
  return (
    <section className="skills" id="skills">
      <div className="box2">
        <span className="section-tag">Skillsets</span>
        <h1>Skillsets</h1>
        <p className="section-intro">
          I focus on combining strong full-stack development fundamentals with AI/ML
          learning so I can build applications that are both practical and intelligent.
        </p>
        <div className="skillbox">
          {skills.map((skill) => (
            <div className="skill1" key={skill.title}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
