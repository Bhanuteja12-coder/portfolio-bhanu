import './index.css';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaBolt } from "react-icons/fa"; // Example icon
import { BsPersonCircle } from "react-icons/bs";
import Logo from './components/Logo';
import { SiLetterboxd } from 'react-icons/si';






import React, { useState } from 'react';


function App() {
  const [isVerified, setIsVerified] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_alhntba',
    'template_reit6sp',
    e.target,
    't8ssIym5I_iOx1dNm'
  )
  .then(() => {
    alert('✅ Message sent successfully!');
    e.target.reset();
  })
  .catch((error) => {
    alert('❌ Failed to send message. Try again.');
    console.error(error);
  });
};

useEffect(() => {
  AOS.init({
    duration: 1000,  // 1000ms = 1 second animation
    once: true       // Animate only once
  });
}, []);


  return (
    <div>
      {/* Navbar */}
      


<nav className="flex items-center px-10 py-4 bg-black shadow-md text-white">
  {/* Logo + Links in a row */}
  <div className="flex items-center gap-10">
    <div className="logo text-2xl font-bold">Bhanuteja</div>
    <ul className="flex gap-8 text-lg font-semibold nav-links">
      <li><a href="#hero" className="hover:text-indigo-400">Home</a></li>
      <li><a href="#about" className="hover:text-green-400">About</a></li>
      <li><a href="#projects" className="hover:text-red-400">Projects</a></li>
      <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
    </ul>
  </div>
</nav>






      {/* Hero Section */}
      <section id="hero" className="hero" data-aos="fade-up">
        <h1>Hi, I'm Bhanu Teja 👋</h1>
        <p>A passionate Full Stack Developer 🚀</p>
      </section>

      {/* About Section */}
      <section id="about" className="about" data-aos="zoom-in-up">
      <h2>About Me</h2>
      <p>
        I'm Bhanu Teja, a passionate Full Stack Developer from India 🇮🇳.<br />
        I love building responsive websites, solving DSA problems, and learning modern technologies like MERN stack.<br />
        I believe in learning, earning, and growing every day 💡🚀
      </p>
      </section>

      {/* Projects Section */}
<section id="projects" className="projects" data-aos="fade-up">
  <h2>Projects</h2>

  <div className="project-list">
    <div className="project-card" data-aos="fade-right">
      <h3>Learnify</h3>
      <p>An educational platform built with PHP, MySQL & XAMPP.</p>
    </div>

    <div className="project-card" data-aos="fade-left">
      <h3>Portfolio Website</h3>
      <p>This site you're viewing! Built with React & CSS.</p>
    </div>

    <div className="project-card" data-aos="flip-up">
      <h3>MovieZone</h3>
      <p>A movie ticket booking system built with Django and SQLite.</p>
    </div>
  </div>
</section>

{/* Contact Section */}
{/* Contact Section */}


 {/* Contact Section */}
<section id="contact" className="contact" data-aos="zoom-in">
  <h2>Contact Me</h2>
  <p>You can reach me through this form:</p>

  <form
    className="contact-form"
    onSubmit={(e) => {
      e.preventDefault();
      emailjs.sendForm(
        'service_alhntba',         // ✅ Your EmailJS service ID
        'template_reit6sp',        // ✅ Your EmailJS template ID
        e.target,
        't8ssIym5I_iOx1dNm'        // ✅ Your EmailJS public key
      )
      .then(() => {
        alert('✅ Message sent successfully!');
        e.target.reset();
      })
      .catch((error) => {
        alert('❌ Failed to send message. Try again.');
        console.error(error);
      });
    }}
  >
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Send Message</button>
  </form>

  <div className="social-links">
    <a href="https://github.com/Bhanuteja12-coder" target="_blank" rel="noreferrer">GitHub</a>
    <a href="https://linkedin.com/in/bhanutejar" target="_blank" rel="noreferrer">LinkedIn</a>
    <a href="https://leetcode.com/u/bhanu_1234321" target="_blank" rel="noreferrer">LeetCode</a>
    <a href="https://www.geeksforgeeks.org/user/bhanut56m8" target="_blank" rel="noreferrer">GeeksforGeeks</a>
  </div>
</section>



{/* Footer */}
<footer className="footer" data-aos="fade-up">
  <p>© {new Date().getFullYear()} Bhanu Teja. All rights reserved.</p>
</footer>

   </div>
  );
}

export default App;
