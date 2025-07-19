// @ts-ignore
import styled from "styled-components";


export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  place-items: center;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  
  h2{
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.4rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
  
  form{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 60rem;
    
    @media (max-width: 768px) {
      gap: 1.2rem;
    }
    
    input, textarea{
      width: 100%;
      padding: 1.5rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      border: none;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
      font-weight: 500;
      font-size: 1.6rem;
      transition: all 0.3s ease;
      
      @media (max-width: 768px) {
        padding: 1.2rem 1.5rem;
        font-size: 1.4rem;
      }
      
      @media (max-width: 480px) {
        padding: 1rem 1.2rem;
        font-size: 1.3rem;
      }
      
      &::placeholder{
        color: rgba(255, 255, 255, 0.7);
        font-weight: 400;
      }
      
      &:focus {
        border-color: var(--green);
        background: rgba(255, 255, 255, 0.15);
      }
    }

    textarea{
      height: 20rem;
      overflow-y: auto;
      resize: none;
      
      @media (max-width: 768px) {
        height: 15rem;
      }
      
      @media (max-width: 480px) {
        height: 12rem;
      }
    }

    button{
      padding: 1.2rem 4rem;
      text-transform: uppercase;
      font-size: 1.6rem;
      font-weight: 600;
      border-radius: 2rem;
      transition: all 0.3s ease;
      
      @media (max-width: 768px) {
        padding: 1rem 3rem;
        font-size: 1.4rem;
      }
      
      @media (max-width: 480px) {
        padding: 0.8rem 2.5rem;
        font-size: 1.3rem;
      }
      
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      
      &:not(:disabled):hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(35, 206, 107, 0.3);
      }
    }
  }

  @media (max-width: 740px){
    form{
      width: 100%;
      
      input,textarea{
        width: 100%;
      }
    }
  }
`


export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;
  padding: 0 2rem;

  h3 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  button{
    border-radius: 0.6rem;
    padding: 1rem 2rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
    font-size: 1.4rem;
    
    @media (max-width: 768px) {
      padding: 0.8rem 1.5rem;
      font-size: 1.3rem;
    }
  }
`