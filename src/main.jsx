import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ExternalLink,
  Code2,
  Database,
  Globe2,
  Terminal,
  Trophy,
  GraduationCap,
  BriefcaseBusiness,
  ChevronDown,
} from "lucide-react";

import "./styles.css";

const projects = [
  {
    title: "LinguaPay",
    period: "Mar 2025 — Jun 2025",
    description:
      "A multilingual language and currency platform combining translation, speech, currency conversion, and weekly exchange-rate analysis.",
    highlights: [
      "Supported 103 languages and 31 currencies.",
      "Integrated Frankfurter API for currency conversion and 7-day historical exchange-rate analysis.",
      "Built 4 Flask REST endpoints with validation, failure handling, structured JSON, and appropriate HTTP status codes.",
    ],
    stack: ["React", "Flask", "REST APIs"],
    github: "https://github.com/navya-thottempudi/Linguapay",
    live: "https://linguapay-ay2o.vercel.app",
  },

  {
    title: "AI Assistant Web Application",
    period: "Apr 2026",
    description:
      "A full-stack conversational AI application with persistent chat history and an LLM-backed backend service.",
    highlights: [
      "Integrated Groq's Llama 3.1 8B model for interactive question answering.",
      "Stored user and AI exchanges in MongoDB Atlas and retrieved the 20 most recent exchanges through REST.",
      "Separated request validation and LLM integration into a backend service layer with environment-managed credentials.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    github: "https://github.com/navya-thottempudi/AI-ASSISTANT",
    live: null,
  },

  {
    title: "SkillPath AI",
    period: "Jul 2026",
    description:
      "An AI-powered learning roadmap generator that creates personalized plans from career goals, skill level, study hours, and resource preferences.",
    highlights: [
      "Used Gemini 2.5 Flash to generate personalized learning plans.",
      "Engineered structured JSON outputs containing phases, durations, skills, projects, resources, and career outcomes.",
      "Added localStorage persistence for generated roadmaps and roadmap history.",
    ],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "Gemini API",
    ],
    github:
      "https://github.com/navya-thottempudi/AI-Learning-Roadmap-Generator",
    live: "https://ai-learning-roadmap-generator-fc1f.onrender.com/",
  },
];

const skills = {
  Languages: ["Java", "C++", "Python", "JavaScript", "HTML", "CSS"],

  "Web & Backend": [
    "React",
    "Node.js",
    "Express.js",
    "REST APIs",
  ],

  "Data & Tools": [
    "MongoDB",
    "GitHub",
    "Linux",
    "Tableau",
  ],

  Coursework: [
    "Data Structures",
    "DBMS",
    "Operating Systems",
  ],
};

function App() {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="nav-wrap">
        <nav className="nav container">

          <a
            className="brand"
            href="#top"
            onClick={closeMenu}
          >
            <span className="brand-mark">N</span>
            <span>Navya</span>
          </a>

          <div className={`nav-links ${menu ? "open" : ""}`}>
            {[
              "About",
              "Projects",
              "Skills",
              "Achievements",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="menu-btn icon-btn"
              aria-label="Open menu"
              onClick={() => setMenu(!menu)}
            >
              {menu ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>

        </nav>
      </header>

      {/* ================= MAIN ================= */}

      <main id="top">

        {/* ================= HERO / INTRO ================= */}

        <section className="hero container">

          <div className="hero-copy">

            <div className="eyebrow">
              <span className="status-dot" />
              Open to SWE internship opportunities
            </div>

            <h1>
              Building practical software
              <br />
              <span>with purpose.</span>
            </h1>

            <p className="hero-text">
              I'm <strong>Navya Thottempudi</strong>, a Computer
              Science undergraduate focused on software
              development, full-stack applications, and
              AI-powered products.
            </p>

            <div className="hero-actions">

              <a
                className="btn primary"
                href="#projects"
              >
                Explore my work
                <ArrowUpRight size={17} />
              </a>

              <a
                className="btn secondary"
                href="mailto:navyathottempudi0048@gmail.com"
              >
                Get in touch
                <Mail size={17} />
              </a>

            </div>

            <div className="social-row">

              <a
                href="https://github.com/navya-thottempudi"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/navyathottempudi"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>

            </div>

          </div>

          {/* PROFILE CARD */}

          <div className="hero-panel">

            <div className="panel-top">
              <span>PROFILE</span>
              <span>2026</span>
            </div>

            <div className="profile-initial">
              N
            </div>

            <div className="profile-name">
              Navya Thottempudi
            </div>

            <div className="profile-role">
              B.Tech CSE · Software Developer
            </div>

            <div className="stat-grid">

              <div>
                <strong>9.38</strong>
                <span>CGPA</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Core projects</span>
              </div>

              <div>
                <strong>7+</strong>
                <span>Hackathons</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Coding platforms</span>
              </div>

            </div>

          </div>

        </section>

        <div className="scroll-hint">
          <ChevronDown size={16} />
          Scroll to explore
        </div>

        {/* ================= PAGE CONTENT ================= */}

        <div className="page-content">

          {/* ================= ABOUT ================= */}

          <section
            id="about"
            className="section container"
          >

            <div className="section-heading">

              <span className="section-number">
                01
              </span>

              <div>
                <p className="kicker">
                  A little about me
                </p>

                <h2>
                  Curious by nature.
                  <br />
                  Builder by practice.
                </h2>
              </div>

            </div>

            <div className="about-grid">

              <div className="about-copy">

                <p>
                  I'm a Computer Science and Engineering
                  undergraduate at BVRIT Hyderabad College
                  of Engineering for Women with a strong
                  academic record and a growing focus on
                  building reliable software.
                </p>

                <p>
                  I enjoy taking an idea from a problem
                  statement to a working product — designing
                  interfaces, connecting APIs, building
                  backend services, working with databases,
                  and integrating AI where it creates real value.
                </p>

                <p>
                  Alongside projects, I actively practice
                  problem solving across competitive programming
                  platforms and participate in hackathons to
                  build under time constraints.
                </p>

              </div>

              <div className="about-cards">

                <div className="mini-card">
                  <Code2 />

                  <div>
                    <strong>Software</strong>
                    <span>
                      Full-stack web applications
                    </span>
                  </div>
                </div>

                <div className="mini-card">
                  <Database />

                  <div>
                    <strong>Backend</strong>
                    <span>
                      REST APIs & data persistence
                    </span>
                  </div>
                </div>

                <div className="mini-card">
                  <Globe2 />

                  <div>
                    <strong>AI</strong>
                    <span>
                      LLM-powered applications
                    </span>
                  </div>
                </div>

                <div className="mini-card">
                  <Terminal />

                  <div>
                    <strong>Problem solving</strong>
                    <span>
                      Competitive programming
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </section>

          {/* ================= PROJECTS ================= */}

          <section
            id="projects"
            className="section section-alt"
          >

            <div className="container">

              <div className="section-heading">

                <span className="section-number">
                  02
                </span>

                <div>
                  <p className="kicker">
                    Selected work
                  </p>

                  <h2>
                    Projects that show
                    <br />
                    how I build.
                  </h2>
                </div>

              </div>

              <div className="projects">

                {projects.map((project, index) => (

                  <article
                    className="project-card"
                    key={project.title}
                  >

                    <div className="project-number">
                      0{index + 1}
                    </div>

                    <div className="project-main">

                      <div className="project-head">

                        <div>

                          <h3>
                            {project.title}
                          </h3>

                          <span>
                            {project.period}
                          </span>

                        </div>

                        <div className="project-links">

                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} GitHub`}
                          >
                            <Github size={19} />
                          </a>

                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${project.title} live demo`}
                            >
                              <ExternalLink size={19} />
                            </a>
                          )}

                        </div>

                      </div>

                      <p className="project-desc">
                        {project.description}
                      </p>

                      <ul>
                        {project.highlights.map(
                          (highlight) => (
                            <li key={highlight}>
                              {highlight}
                            </li>
                          )
                        )}
                      </ul>

                      <div className="tags">

                        {project.stack.map((tag) => (
                          <span key={tag}>
                            {tag}
                          </span>
                        ))}

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            </div>

          </section>

          {/* ================= SKILLS ================= */}

          <section
            id="skills"
            className="section container"
          >

            <div className="section-heading">

              <span className="section-number">
                03
              </span>

              <div>

                <p className="kicker">
                  Technical toolkit
                </p>

                <h2>
                  Tools I use to
                  <br />
                  turn ideas into software.
                </h2>

              </div>

            </div>

            <div className="skills-grid">

              {Object.entries(skills).map(
                ([category, list]) => (

                  <div
                    className="skill-group"
                    key={category}
                  >

                    <h3>
                      {category}
                    </h3>

                    <div className="skill-pills">

                      {list.map((skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      ))}

                    </div>

                  </div>

                )
              )}

            </div>

          </section>

          {/* ================= ACHIEVEMENTS ================= */}

          <section
            id="achievements"
            className="section section-alt"
          >

            <div className="container">

              <div className="section-heading">

                <span className="section-number">
                  04
                </span>

                <div>

                  <p className="kicker">
                    Beyond projects
                  </p>

                  <h2>
                    Proof of consistency.
                  </h2>

                </div>

              </div>

              <div className="achievement-grid">

                <div className="achievement-card featured">

                  <Trophy size={25} />

                  <strong>
                    Competitive programming
                  </strong>

                  <div className="achievement-stats">

                    <span>
                      <b>1500+</b>
                      CodeChef
                    </span>

                    <span>
                      <b>1600+</b>
                      LeetCode
                    </span>

                    <span>
                      <b>1000+</b>
                      Codeforces
                    </span>

                  </div>

                  <p>
                    1,300+ CodeChef · 300+ LeetCode ·
                    150+ Codeforces problems
                  </p>

                </div>

                <div className="achievement-card">

                  <BriefcaseBusiness size={25} />

                  <strong>
                    Hackathons
                  </strong>

                  <p>
                    Participated in 7+ national-level
                    hackathons, building and presenting
                    software prototypes in time-constrained,
                    team-based environments.
                  </p>

                </div>

                <div className="achievement-card">

                  <GraduationCap size={25} />

                  <strong>
                    ServiceNow Virtual Internship
                  </strong>

                  <p>
                    Hands-on exposure to ServiceNow,
                    platform administration, and basic
                    ITSM concepts.
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* ================= EDUCATION ================= */}

          <section className="education section container">

            <div className="education-line">

              <span className="section-number">
                05
              </span>

              <div>

                <p className="kicker">
                  Education
                </p>

                <h2>
                  BVRIT Hyderabad College
                  <br />
                  of Engineering for Women
                </h2>

                <p>
                  B.Tech in Computer Science and Engineering
                  · Aug 2024 — Present
                </p>

              </div>

              <div className="cgpa">

                <strong>
                  9.38
                </strong>

                <span>
                  CGPA
                </span>

              </div>

            </div>

          </section>

          {/* ================= CONTACT ================= */}

          <section
            id="contact"
            className="contact section"
          >

            <div className="container contact-inner">

              <p className="kicker">
                06 · Contact
              </p>

              <h2>
                Let's build something
                <br />
                <span>worth talking about.</span>
              </h2>

              <p>
                I'm currently looking for SWE internship
                opportunities where I can learn, contribute,
                and build software that matters.
              </p>

              <div className="contact-links">

                <a
                  href="mailto:navyathottempudi0048@gmail.com"
                >
                  <Mail size={17} />
                  navyathottempudi0048@gmail.com
                </a>

                <a
                  href="https://github.com/navya-thottempudi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} />
                  github.com/navya-thottempudi
                </a>

                <a
                  href="https://www.linkedin.com/in/navyathottempudi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} />
                  linkedin.com/in/navyathottempudi
                </a>

              </div>

            </div>

          </section>

        </div>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container footer-inner">

          <span>
            © 2026 Navya Thottempudi
          </span>

          <span>
            Designed & built for SWE opportunities.
          </span>

        </div>

      </footer>

    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(<App />);