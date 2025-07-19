// @ts-ignore
import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    margin-top: 8rem;
    padding: 0 1rem;
  }
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    
    @media (max-width: 768px) {
      font-size: 2.8rem;
      margin-bottom: 2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 2.4rem;
    }
  }
  
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    @media (max-width: 960px){
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    @media (max-width: 740px){
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .project{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      
      @media (max-width: 768px) {
        padding: 1.5rem 1.2rem;
      }
      
      &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        
        @media (max-width: 768px) {
          margin-bottom: 2rem;
        }
        
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5.0rem;
          
          @media (max-width: 768px) {
            width: 3.5rem;
          }
        }
      }
      
      h3{
        margin-bottom: 2rem;
        font-size: 1.8rem;
        
        @media (max-width: 768px) {
          font-size: 1.6rem;
          margin-bottom: 1.5rem;
        }
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        line-height: 1.5;
        
        @media (max-width: 768px) {
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
        }
        
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
          flex-wrap: wrap;
          
          @media (max-width: 768px) {
            gap: 1rem;
            font-size: 1.2rem;
          }
          
          li {
            background: rgba(255, 255, 255, 0.1);
            padding: 0.3rem 0.8rem;
            border-radius: 1rem;
            font-size: 1.2rem;
            
            @media (max-width: 768px) {
              font-size: 1rem;
              padding: 0.2rem 0.6rem;
            }
          }
        }
      }
    }
  }

  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: #222;
    color: #fff;
    border-radius: 1.2rem;
    padding: 2.5rem 2rem 2rem 2rem;
    width: 64vw;
    max-width: 64vw;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    @media (max-width: 768px) {
      width: 95vw;
      max-width: 95vw;
      padding: 2rem 1.5rem 1.5rem 1.5rem;
      max-height: 85vh;
    }
    
    h2 {
      font-size: 2.4rem;
      margin-bottom: 1.5rem;
      
      @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
    }
    
    p {
      font-size: 1.6rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      
      @media (max-width: 768px) {
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
      }
    }
    
    .tech-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      font-size: 1.4rem;
      
      @media (max-width: 768px) {
        font-size: 1.2rem;
        gap: 0.8rem;
      }
      
      li {
        background: rgba(255, 255, 255, 0.1);
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        
        @media (max-width: 768px) {
          padding: 0.3rem 0.8rem;
        }
      }
    }
  }
  
  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    background: none;
    border: none;
    color: #fff;
    font-size: 2.5rem;
    cursor: pointer;
    z-index: 10;
    
    @media (max-width: 768px) {
      top: 0.5rem;
      right: 1rem;
      font-size: 2rem;
    }
  }
`