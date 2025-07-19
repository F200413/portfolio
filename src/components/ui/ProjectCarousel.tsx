import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  external: string;
}

interface ProjectCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const CarouselTrack = styled.div<{ translateX: number }>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${props => props.translateX}px);
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 0;
  }
`;

const ProjectCard = styled.div`
  min-width: 300px;
  max-width: 350px;
  padding: 2rem 1.8rem;
  background-color: #2b2b2b;
  border-radius: 1.2rem;
  transition: 0.25s;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #FFF;
  cursor: pointer;
  overflow: hidden;
  word-wrap: break-word;
  
  &:hover {
    transform: translateY(-5px);
    background-color: var(--pink);
  }

  @media (max-width: 768px) {
    min-width: 100vw;
    max-width: 100vw;
    padding: 1.5rem 1.2rem;
    margin: 0;
    border-radius: 0;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--blue);
    margin-bottom: 2rem;
    flex-shrink: 0;
    
    .project-links {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    a > img {
      width: 3.5rem;
      
      @media (max-width: 768px) {
        width: 3rem;
      }
    }
  }
  
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    line-height: 1.3;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
    
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  p {
    letter-spacing: 0.12rem;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
    flex-grow: 1;
    
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  footer {
    margin-top: auto;
    flex-shrink: 0;
    
    .tech-list {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.2rem;
      opacity: 0.6;
      flex-wrap: wrap;
      
      @media (max-width: 768px) {
        font-size: 1.1rem;
        gap: 0.8rem;
      }
      
      li {
        background: rgba(255, 255, 255, 0.1);
        padding: 0.3rem 0.8rem;
        border-radius: 1rem;
        font-size: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 120px;
        
        @media (max-width: 768px) {
          max-width: 100px;
          font-size: 0.9rem;
          padding: 0.2rem 0.6rem;
        }
      }
    }
  }
`;

const NavigationButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction}: 1rem;
  background: rgba(43, 43, 43, 0.8);
  border: none;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(43, 43, 43, 1);
    transform: translateY(-50%) scale(1.1);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.2rem;
    ${props => props.direction}: 1rem;
  }
`;

const ScrollIndicator = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  
  .dot {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
    
    &.active {
      background: var(--green);
    }
  }
`;

function truncate(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects, onProjectClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Calculate card width based on screen size
  const getCardWidth = () => {
    if (window.innerWidth <= 768) {
      return window.innerWidth; // Full viewport width
    }
    return 350 + 32; // Desktop card width + gap
  };
  
  const cardWidth = getCardWidth();

  const maxIndex = Math.max(0, projects.length - 1);

  const goToSlide = (index: number) => {
    if (index < 0 || index > maxIndex) return;
    setCurrentIndex(index);
    const newCardWidth = getCardWidth();
    setTranslateX(-index * newCardWidth);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const diff = startX - currentX;
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped left - next slide
        nextSlide();
      } else {
        // Swiped right - previous slide
        prevSlide();
      }
    }
  };

  // Update card width on resize
  useEffect(() => {
    const handleResize = () => {
      const newCardWidth = getCardWidth();
      setTranslateX(-currentIndex * newCardWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  // Auto-advance on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth <= 768 && !isDragging) {
        goToSlide((currentIndex + 1) % (maxIndex + 1));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, maxIndex, isDragging]);

  return (
    <CarouselContainer>
      <NavigationButton
        direction="left"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        ‹
      </NavigationButton>
      
      <CarouselTrack 
        ref={trackRef} 
        translateX={translateX}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: isDragging ? 'none' : 'auto'
        }}
      >
        {projects.map((project, idx) => (
          <ProjectCard key={idx} onClick={() => onProjectClick(project)}>
            <header>
              <svg 
                width="40" 
                xmlns="http://www.w3.org/2000/svg" 
                role="img" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#23ce6b" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
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
              <p>{truncate(project.description, 100)}</p>
            </div>
            <footer>
              <ul className="tech-list">
                {project.tech.slice(0, 3).map((t, i) => <li key={i}>{t}</li>)}
                {project.tech.length > 3 && <li>+{project.tech.length - 3}</li>}
              </ul>
            </footer>
          </ProjectCard>
        ))}
      </CarouselTrack>
      
      <NavigationButton
        direction="right"
        onClick={nextSlide}
        disabled={currentIndex === maxIndex}
      >
        ›
      </NavigationButton>
      
      <ScrollIndicator>
        {projects.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </ScrollIndicator>
    </CarouselContainer>
  );
}; 