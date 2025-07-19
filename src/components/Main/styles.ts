// @ts-ignore
import styled from "styled-components";


export const Container = styled.main`
  position: relative;
  z-index: 0;
  padding: 0 10rem;
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
  
  #tsparticles{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    
    @media (max-width: 768px) {
      /* Reduce particle density on mobile for better performance */
      canvas {
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 740px){
    padding: 0 2rem;
  }

  @media(max-width: 360px){
    padding: 0 1rem;
  }
`