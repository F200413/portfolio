// @ts-ignore
import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    margin-top: 8rem;
    padding: 0 1rem;
  }

  header{
    text-align: center;
    margin-bottom: 3rem;
    
    h2{
      text-align: center;
      font-size: 4rem;
      margin-bottom: 1rem;
      
      @media (max-width: 768px) {
        font-size: 2.8rem;
      }
      
      @media (max-width: 480px) {
        font-size: 2.4rem;
      }
    }
    
    p{
      color: #000;
      font-weight: 500;
      font-size: 1.8rem;
      margin: 0.5rem 0;
      
      @media (max-width: 768px) {
        font-size: 1.6rem;
      }
      
      @media (max-width: 480px) {
        font-size: 1.4rem;
      }
    }
  }

  .contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 40rem;
      gap: 2rem;
      background-color: var(--green);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      
      @media (max-width: 768px) {
        width: 100%;
        max-width: 100%;
        padding: 1.2rem 2rem;
        gap: 1.5rem;
      }
      
      @media (max-width: 480px) {
        padding: 1rem 1.5rem;
        gap: 1rem;
      }
      
      img{
        width: 4rem;
        
        @media (max-width: 768px) {
          width: 3.5rem;
        }
        
        @media (max-width: 480px) {
          width: 3rem;
        }
      }
      
      a{
        color: var(--black);
        font-weight: 500;
        font-size: 1.6rem;
        
        @media (max-width: 768px) {
          font-size: 1.4rem;
        }
        
        @media (max-width: 480px) {
          font-size: 1.2rem;
        }
      }
      
      &:hover{
        background-color: var(--pink);
        a{
          color: #FFF;
        }
      }
    }
  }
`
