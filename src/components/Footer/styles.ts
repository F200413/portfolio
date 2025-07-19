// @ts-ignore
import styled from "styled-components";


export const Container = styled.footer`
  background-color: transparent;
  padding: 3rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    padding: 2rem 2rem;
    margin-top: 6rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    margin-top: 4rem;
  }

  .logo{
    font-size: 2.8rem;
    
    @media (max-width: 768px) {
      font-size: 2.4rem;
    }
    
    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p{
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.6rem;
    
    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
    
    img{
      width: 2.6rem;
      animation: spinning 5s infinite linear;
      
      @media (max-width: 768px) {
        width: 2.2rem;
      }
      
      @media (max-width: 480px) {
        width: 2rem;
      }
    }
  }
  
  .social-media{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img,span{
      font-size: 3rem;
      width: 3rem;
      
      @media (max-width: 768px) {
        font-size: 2.5rem;
        width: 2.5rem;
      }
      
      @media (max-width: 480px) {
        font-size: 2.2rem;
        width: 2.2rem;
      }
    }
  }

  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media(max-width: 800px){
    padding: 2rem 2rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  
  @media(max-width: 600px){
    padding: 1.5rem 1rem;
    gap: 1.5rem;
    
    p{
      font-size: 1.2rem;
    }
  }
`