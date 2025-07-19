// @ts-ignore
import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    margin-top: 8rem;
    gap: 3rem;
    padding: 0 1rem;
  }

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
    
    @media (max-width: 768px) {
      gap: 1.5rem;
      justify-content: center;
    }
  }
  
  .desktop-skills {
    display: flex;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  .mobile-skills {
    display: none;
    
    @media (max-width: 768px) {
      display: block;
    }
  }
  
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
      
      @media (max-width: 768px) {
        width: 3rem;
      }
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
    position: relative;
    z-index: 2;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
    font-size: 2.2rem;
    position: relative;
    z-index: 2;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
      margin-top: 1.5rem;
    }
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    line-height: 1.6;
    position: relative;
    z-index: 2;
    
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }
  
  .education, .experience {
    margin-top: 2rem;
    position: relative;
    z-index: 2;
    
    h4 {
      color: var(--blue);
      font-size: 1.8rem;
      margin: 1rem 0 0.5rem 0;
      
      @media (max-width: 768px) {
        font-size: 1.6rem;
      }
    }
    
    p {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      
      @media (max-width: 768px) {
        font-size: 1.4rem;
      }
    }
  }

  .about-image{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    z-index: 1;
    margin-top: 2rem;
    
    img{
      width: 70%;
      max-width: 350px;
      border-radius: 30%;
      filter: grayscale(0);
      transition: filter 0.5s;
      
      @media (max-width: 768px) {
        width: 60%;
        max-width: 250px;
      }
      
      &:hover{
        filter: grayscale(0);
      }
    }
  }

  @media (max-width: 960px){
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 3rem;
    
    .hard-skills{
      justify-content: center;
    }
    
    .about-image{
      order: -1;
      margin-bottom: 2rem;
      margin-top: 0;
      
      img{
        width: 50%;
        max-width: 200px;
      }
    }
  }

  @media (max-width: 480px) {
    margin-top: 6rem;
    gap: 2rem;
    
    .about-image {
      img{
        width: 70%;
        max-width: 180px;
      }
    }
    
    .hard-skills {
      gap: 1.2rem;
    }
    
    .hability img {
      width: 2.8rem;
    }
  }
`