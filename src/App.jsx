
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#" className="logo">Sara<span>.</span></a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <span className="availability">
            <span className="status-dot"></span>
            OPEN TO REMOTE OPPORTUNITIES
          </span>

          <p className="intro">HELLO, I'M</p>

          <h1>
            Sara Ismail
            <br />
            <span>Badawy.</span>
          </h1>

          <h2>Senior PHP / Laravel Developer</h2>

          <p className="description">
            I build scalable web applications and robust backend systems.
            With 10+ years of experience, I turn complex business
            requirements into reliable software solutions.
          </p>

          <div className="hero-buttons">
            <a href="#experience" className="primary-button">
              Explore My Work →
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/saraismailbadawy" target="_blank">
              GitHub ↗
            </a>
            <a href="http://www.linkedin.com/in/sara-badawy-98b6283a" target="_blank">LinkedIn ↗</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-circle">
            <div className="code-card">
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-dot"></span>

              <pre>
{`const developer = {
  name: "Sara",
  role: "Backend Developer",
  experience: "10+ years",
  passion: "Building great
            software"
};`}
              </pre>
            </div>
          </div>

          <div className="floating-tag">PHP • Laravel</div>
          <div className="floating-tag second-tag">
            Clean Code • APIs
          </div>
        </div>
      </main>

      <section id="about" className="about-section">
        <div className="section-heading">
          <span>GET TO KNOW ME</span>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Turning Ideas Into Reliable Software.</h3>

            <p>
              I'm a passionate Backend Developer with over
              10 years of experience in designing and developing
              scalable web applications and RESTful APIs.
            </p>

            <p>
              My expertise lies in PHP, Laravel, database design,
              API development, and building maintainable systems
              that solve real business problems.
            </p>

            <p>
              I enjoy taking ownership of projects, solving
              complex technical challenges, and continuously
              exploring new technologies.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat-card">
              <h3>3+</h3>
              <p>Projects & Features</p>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <p>Passion for Code</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-heading">
          <span>MY TECHNICAL EXPERTISE</span>
          <h2>Technical <span>Skills</span></h2>
          <p className="skills-subtitle">
            Technologies and tools I use to build reliable software.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">⌘</div>
            <h3>Backend Development</h3>
            <div className="skill-tags">
              <span>PHP</span>
              <span>Laravel</span>
              <span>REST APIs</span>
              <span>JWT</span>
              <span>OOP</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">▤</div>
            <h3>Databases</h3>
            <div className="skill-tags">
              <span>MySQL</span>
              <span>PostgreSQL</span>
              <span>Database Design</span>
              <span>Query Optimization</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">◈</div>
            <h3>Frontend Development</h3>
            <div className="skill-tags">
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>React</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚙</div>
            <h3>Tools & Technologies</h3>
            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Docker</span>
              <span>Redis</span>
              <span>Postman</span>
            </div>
          </div>

        </div>
      </section>

<section id="experience" className="experience-section">
  <div className="section-heading">
    <span>MY PROFESSIONAL JOURNEY</span>
    <h2>Work <span>Experience</span></h2>
  </div>

  <div className="experience-list">

    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3>Smases</h3>
          <p>Full-Stack PHP / Laravel Developer</p>
        </div>
        <span className="experience-duration">6 Years</span>
      </div>

      <p className="experience-role">
        Part of a Development Team
      </p>

      <div className="skill-tags">
        <span>PHP</span>
        <span>Laravel</span>
        <span>MySQL</span>
        <span>Bootstrap 4</span>
        <span>JavaScript</span>
        <span>jQuery</span>
      </div>

      <ul>
        <li>Backend development and business logic implementation.</li>
        <li>Frontend development using HTML, CSS and Bootstrap 4.</li>
        <li>Database-driven functionality using MySQL.</li>
        <li>Collaboration with the development team.</li>
      </ul>
    </div>

    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3>LinkedSaudi</h3>
          <p>PHP / Laravel Developer</p>
        </div>
        <span className="experience-duration">
          Independent Project
        </span>
      </div>

      <p className="experience-role">
        Independently Built From Scratch
      </p>

      <div className="skill-tags">
        <span>PHP</span>
        <span>Laravel</span>
        <span>MySQL</span>
        <span>Bootstrap 4</span>
        <span>JavaScript</span>
        <span>jQuery</span>
      </div>

      <ul>
        <li>Built the entire website from scratch independently.</li>
        <li>Handled both backend and frontend development.</li>
        <li>Designed and implemented the complete application architecture and technical solutions independently.</li>
      </ul>
    </div>

<section id="contact" className="contact-section">

  <div className="section-heading">
    <span>LET'S CONNECT</span>
    <h2>Get In <span>Touch</span></h2>
    <p className="contact-subtitle">
      Have a project in mind or looking for an experienced developer?
      I'd love to hear from you.
    </p>
  </div>

  <div className="contact-container">

    
<div className="contact-info">

  <div className="contact-intro">
    <span className="contact-label">GET IN TOUCH</span>
    <h3>Let's work together!</h3>
    <p>
      I'm always open to discussing new projects,
      exciting opportunities, and remote positions.
    </p>
  </div>

  <div className="contact-details">

    <a href="mailto:sara.ismail.badawy@gmail.com"
       className="contact-item">
      <div className="contact-icon">✉</div>
      <div className="contact-text">
        <span>Email</span>
        <h4>sara.ismail.badawy@gmail.com</h4>
      </div>
      <span className="contact-arrow">↗</span>
    </a>

    <a href="http://www.linkedin.com/in/sara-badawy-98b6283a"
       target="_blank"
       rel="noreferrer"
       className="contact-item">
      <div className="contact-icon">in</div>
      <div className="contact-text">
        <span>LinkedIn</span>
        <h4>Connect with me</h4>
      </div>
      <span className="contact-arrow">↗</span>
    </a>

    <a href="https://github.com/saraismailbadawy"
       target="_blank"
       rel="noreferrer"
       className="contact-item">
      <div className="contact-icon">⌘</div>
      <div className="contact-text">
        <span>GitHub</span>
        <h4>View my repositories</h4>
      </div>
      <span className="contact-arrow">↗</span>
    </a>

  </div>
</div>


    <div className="contact-message">
      <h3>Ready to start a project?</h3>

      <p>
        Let's build something great together.
        Feel free to reach out anytime!
      </p>

      <a
        href="mailto:sara.ismail.badawy@gmail.com"
        className="primary-button contact-button"
      >
        Send Me an Email →
      </a>
    </div>

  </div>

</section>

<footer className="footer">

  <div className="footer-container">

    <div className="footer-brand">
      <a href="#home" className="footer-logo">
        Sara <span>Badawy.</span>
      </a>

      <p>
        Senior PHP / Laravel Developer
        <br />
        Building scalable web applications.
      </p>
    </div>

    <div className="footer-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-socials">

      <a
        href="http://www.linkedin.com/in/sara-badawy-98b6283a"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        in
      </a>

      <a
        href="https://github.com/saraismailbadawy"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        GH
      </a>

      <a
        href="mailto:sara.ismail.badawy@gmail.com"
        aria-label="Email"
      >
        ✉
      </a>

    </div>

  </div>

  <div className="footer-bottom">
    <p>
      © {new Date().getFullYear()} Sara Badawy.
      All rights reserved.
    </p>

    <a href="#about" className="back-to-top">
      Back to Top ↑
    </a>
  </div>

</footer>

  </div>
</section>

    </div>
  )
}

export default App
