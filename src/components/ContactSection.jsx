function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="box3">
        <span className="section-tag">Contact</span>
        <h1>Contact Me</h1>
        <p className="contact-intro">
          I&apos;m always open to internships, project collaborations, and conversations
          around web development, AI, and new ideas. If you have an opportunity or just
          want to connect, feel free to send a message.
        </p>
        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-card">
              <span className="contact-card-icon">
                <i className="bx bx-envelope" />
              </span>
              <div>
                <h3>Email</h3>
                <a href="mailto:dhruv.jaiswal.dev@gmail.com">dhruv.jaiswal.dev@gmail.com</a>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-card-icon">
                <i className="bx bxl-linkedin" />
              </span>
              <div>
                <h3>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/dhruv-jaiswal-dev30"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect professionally
                </a>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-card-icon">
                <i className="bx bxl-github" />
              </span>
              <div>
                <h3>GitHub</h3>
                <a href="https://github.com/dhruv23153089" target="_blank" rel="noreferrer">
                  Explore my projects
                </a>
              </div>
            </div>
          </div>
          <form
            className="contact-form"
            action="https://formsubmit.co/dhruv.jaiswal.dev@gmail.com"
            method="POST"
          >
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me a little about your message"
              rows="6"
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
