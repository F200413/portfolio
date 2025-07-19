// @ts-ignore
import styled from "styled-components";

export const Container = styled.section`
  padding-top: 21%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  min-height: 100vh;
  align-items: center;
  
  @media (max-width: 768px) {
    padding-top: 16%;
    gap: 4rem;
    min-height: 90vh;
    
    .hero-text {
      margin-top: 5rem;
    }
  }
  
  .hero-text{
    flex: 1;
    z-index: 2;
    margin-top: 0;
    
    & > p{
      font-size: 1.8rem;
      margin-top: 2rem;
      
      @media (max-width: 768px) {
        font-size: 1.6rem;
        margin-top: 1.2rem;
      }
      
      @media (max-width: 480px) {
        font-size: 1.4rem;
        margin-top: 1rem;
      }
    }
    
    h1{
      font-size: 7rem;
      
      @media (max-width: 768px) {
        font-size: 4.5rem;
      }
      
      @media (max-width: 480px) {
        font-size: 3.8rem;
      }
    }

    h3{
      color:var(--green);
      margin: 2rem 0 1rem 0;
      font-size: 2.4rem;
      
      @media (max-width: 768px) {
        font-size: 2rem;
        margin: 1.2rem 0 1rem 0;
      }
      
      @media (max-width: 480px) {
        font-size: 1.8rem;
        margin: 1rem 0 1rem 0;
      }
    }

    
    p.small-resume {
      margin-bottom: 5rem;
      font-size: 1.6rem;
      
      @media (max-width: 768px) {
        margin-bottom: 3rem;
        font-size: 1.4rem;
      }
    }
  }
  
  :root.light & .hero-text h3 {
    color: #111 !important;
  }
  :root.light & .software-engineer {
    color: #111 !important;
  }

  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
      
      @media (max-width: 768px) {
        font-size: 2.5rem;
        width: 3rem;
      }
    }
  }

  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
    font-size: 1.6rem;
    
    @media (max-width: 768px) {
      margin-top: 3rem;
      padding: 1.2rem 4rem;
      font-size: 1.4rem;
    }
  }

  .hero-image{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    
    img{
      max-width: 500px;
      width: 100%;
      height: auto;
      
      @media (max-width: 768px) {
        max-width: 350px;
      }
      
      @media (max-width: 480px) {
        max-width: 280px;
      }
    }
  }

  @media(max-width: 960px){
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 4rem;
    padding-top: 10%;
    
    .hero-text{
      order: 1;
      
      h1{
        font-size: 5rem;
      }
      
      .social-media {
        justify-content: center;
        padding-left: 0;
      }
    }
    
    .hero-image{
      order: 2;
      display: flex;
    }
  }

  @media(max-width: 600px){
    padding-top: 21%;
    gap: 3rem;
    
    .hero-text {
      margin-top: 7rem;
    }
  }
  
  @media(max-width: 480px){
    padding-top: 26%;
    gap: 2rem;
  }
`