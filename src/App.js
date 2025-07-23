import './index.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Bhanu Teja</div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <h1>Hi, I'm Bhanu Teja 👋</h1>
        <p>A passionate Full Stack Developer 🚀</p>
      </section>

      {/* About Section */}
      <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I'm Bhanu Teja, a passionate Full Stack Developer from India 🇮🇳.<br />
        I love building responsive websites, solving DSA problems, and learning modern technologies like MERN stack.<br />
        I believe in learning, earning, and growing every day 💡🚀
      </p>
      </section>

      {/* Projects Section */}
<section id="projects" className="projects">
  <h2>Projects</h2>

  <div className="project-list">
    <div className="project-card">
      <h3>Learnify</h3>
      <p>An educational platform built with PHP, MySQL & XAMPP.</p>
    </div>

    <div className="project-card">
      <h3>Portfolio Website</h3>
      <p>This site you're viewing! Built with React & CSS.</p>
    </div>

    <div className="project-card">
      <h3>MovieZone</h3>
      <p>A movie ticket booking system built with Django and SQLite.</p>
    </div>
  </div>
</section>

{/* Contact Section */}
{/* Contact Section */}
<section id="contact" className="contact">
  <h2>Contact Me</h2>
  <p>You can reach me through this form:</p>

  <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Send Message</button>
  </form>

  <p className="resume-note">
    Want my resume? Just send a message above — I’ll reply with it personally 💼
  </p>

  <div className="social-links">
    <a href="https://github.com/Bhanuteja12-coder" target="_blank" rel="noreferrer">GitHub</a>
    <a href="https://linkedin.com/in/bhanutejar" target="_blank" rel="noreferrer">LinkedIn</a>
    <a href="https://leetcode.com/u/bhanu_1234321" target="_blank" rel="noreferrer">LeetCode</a>
    <a href="https://www.geeksforgeeks.org/user/bhanut56m8" target="_blank" rel="noreferrer">GeeksforGeeks</a>
  </div>
</section>


{/* Footer */}
<footer className="footer">
  <p>© {new Date().getFullYear()} Bhanu Teja. All rights reserved.</p>
</footer>

   </div>
  );
}

export default App;
