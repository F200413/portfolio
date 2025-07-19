import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Skill {
  name: string;
  icon: string;
}

interface SkillsMarqueeProps {
  skills: Skill[];
}

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

const MarqueeTrack = styled.div`
  display: flex;
  gap: 2rem;
  animation: ${scroll} 12s linear infinite;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    animation-duration: 8s;
  }
  
  &:hover {
    animation-play-state: paused;
  }
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  
  @media (max-width: 768px) {
    min-width: 70px;
  }
  
  img {
    width: 3.4rem;
    height: 3.4rem;
    margin-bottom: 0.5rem;
    
    @media (max-width: 768px) {
      width: 3rem;
      height: 3rem;
    }
  }
  
  span {
    font-size: 1.2rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const SkillsMarquee: React.FC<SkillsMarqueeProps> = ({ skills }) => {
  // Duplicate skills array to create seamless loop
  const duplicatedSkills = [...skills, ...skills];
  
  return (
    <MarqueeContainer>
      <MarqueeTrack>
        {duplicatedSkills.map((skill, index) => (
          <SkillItem key={index}>
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </SkillItem>
        ))}
      </MarqueeTrack>
    </MarqueeContainer>
  );
}; 