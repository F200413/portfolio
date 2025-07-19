// @ts-ignore
import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import React, { useState } from "react";
import { ProjectCarousel } from "../ui/ProjectCarousel";

// Project data array
const projects = [
  {
    title: "MakStores Website",
    description: `An e-commerce platform built for MAKSTORE LLC, integrated with Amazon to expand reach and boost sales. I developed a responsive, user-friendly site optimized for performance and reliability. The website is tailored for retail needs and ensures seamless customer experience across devices.`,
    tech: ["React.js", "Node.js", "MongoDB", "Amazon SP-API"],
    github: "",
    external: "",
  },
  {
    title: "Point of Sale (POS) System",
    description: `A powerful POS solution built to streamline sales, inventory tracking, and customer data management in real time. Developed using C++ and Oracle 19c for fast processing and reliable data storage. Ideal for businesses of all sizes, offering scalability and operational efficiency.`,
    tech: ["C++", "Oracle 19c", "SQL", "Git", "Object-Oriented Programming (OOP)"],
    github: "",
    external: "",
  },
  {
    title: "WebTestHub",
    description: `WebTestHub is a cloud-based test automation platform built for speed, scalability, and efficiency. It enables automated testing of web applications with support for parallel test execution using containers. CI/CD pipeline integration ensures seamless deployment, while the platform simplifies test environment configuration. Designed to reduce manual testing efforts and boost QA productivity, it's ideal for teams seeking rapid and reliable software delivery.`,
    tech: ["Docker", "Python", "React.js", "MongoDB", "Redis", "Go"],
    github: "",
    external: "",
  },
  {
    title: "Online Voting App",
    description: `A secure, web and mobile-friendly voting platform designed to ensure transparency, confidentiality, and trust in digital elections. It features end-to-end encryption, blockchain-based vote integrity, and multi-factor authentication for secure identity verification. Voters can easily register, verify, and cast their votes with a few clicks. Real-time updates and notifications enhance transparency throughout the election process.`,
    tech: ["Blockchain", "Firebase", "WebSockets", "REST APIs"],
    github: "",
    external: "",
  },
  {
    title: "FoodieFinder – Restaurant Discovery Web App (Frontend Project)",
    description: `FoodieFinder is a sleek, responsive web app that helps users discover top-rated restaurants based on their preferences and location. Featuring smooth UI transitions, interactive maps, and advanced filters, it offers an intuitive user experience. Users can browse menus, leave reviews, and bookmark favorites. The app adapts seamlessly to all screen sizes and supports dark mode. Optimized for performance and SEO for better reach.`,
    tech: ["React.js", "Tailwind CSS", "Google Maps API"],
    github: "",
    external: "",
  },
  {
    title: "BugTrackX – Defect Tracking & Test Automation Dashboard (SQA Project)",
    description: `BugTrackX is an end-to-end QA solution combining manual defect tracking with automated test execution insights. Built for SQA teams, it features a real-time dashboard that tracks bug reports, test coverage, and CI pipeline results. Automated test cases are integrated using Selenium and TestNG, with reports pushed into the dashboard via Jenkins. It improves collaboration between QA and dev teams by centralizing all quality metrics.`,
    tech: ["Selenium", "Java", "Jenkins", "MySQL"],
    github: "",
    external: "",
  },
];

function truncate(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export function Project() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fix: Always open modal for new project, even if modal was just closed
  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Container id="project">
      <h2>My Projects</h2>
      
      {isMobile ? (
        <ProjectCarousel projects={projects}  onProjectClick={handleProjectClick} />
      ) : (
        <div className="projects">
          {projects.map((project, idx) => (
            <div className="project "  key={idx} onClick={() => handleProjectClick(project)} style={{ cursor: 'pointer', borderRadius: '30px' }}>
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  <a>
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{truncate(project.description, 120)}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.tech.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </footer>
            </div>
          ))}
        </div>
      )}
      
      {modalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <ul className="tech-list">
              {selectedProject.tech.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
        </div>
      )}
    </Container>
  );
}