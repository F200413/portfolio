// @ts-ignore
import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  background-color: #21212150;
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  
  @media (max-width: 768px) {
    padding: 1.2rem 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
  }

  nav{
    display: flex;
    align-items: center;
    gap: 1.8rem;
    
    @media (max-width: 768px) {
      gap: 1.5rem;
    }
    
    a{
      color: #FFFF;
      padding: 0.6rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: filter 0.25s;
      font-size: 1.4rem;
      
      @media (max-width: 768px) {
        font-size: 1.2rem;
        padding: 0.5rem;
      }

      &.button{
        padding: 0.6rem 2rem;
        
        @media (max-width: 768px) {
          padding: 0.5rem 1.5rem;
          font-size: 1.2rem;
        }
      }

      &:hover{
        filter: brightness(0.6);
      }
    }
  }

  .menu-container{
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu{
    width: 2rem;
    height: 0.2rem;
    background: #FFFF;
    position: relative;
    cursor: pointer;
    display: none;
    
    @media (max-width: 768px) {
      width: 1.8rem;
    }

    &:before{
      bottom: 0.5rem;
    }
    &:after{
      top: 0.5rem;
    }

    &.active:before{
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after{
      top: 0;
      transform: rotate(135deg);
    }

    &.active{
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .menu:before, .menu:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: #FFFF;
    cursor: pointer;
    transition: .6s;
  }

  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: var(--green);
    display: block;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
    
    @media (max-width: 768px) {
      width: 50px;
      height: 28px;
      right: 5px;
    }
  }

  @media only screen and (max-width: 800px) {
    label {
      position: relative;
    }
  }

  label:after {
    content: '';
    background: #FFF;
    width: 20px;
    height: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    
    @media (max-width: 768px) {
      width: 18px;
      height: 18px;
      top: 5px;
      left: 4px;
    }
  }

  input:checked + label {
    background: var(--pink);
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  .logo {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    object-fit: cover;
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
      height: 60px;
      width: 60px;
    }
    
    @media (max-width: 480px) {
      height: 50px;
      width: 50px;
    }
  }

  @media (max-width: 960px){
    padding: 1.8rem 3rem;

    .menu{
      display: block;
    }

    nav {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: var(--blue);
      top: 0;
      left: 0;
      transition: opacity 0.25s;
      background-color: var(--green);
      gap: 2rem;

      a{
        font-size: 1.8rem;
        padding: 1rem;
        
        @media (max-width: 480px) {
          font-size: 1.6rem;
        }
      }

      a.button{
        background-color: var(--pink);
        padding: 1rem 2rem;
        border-radius: 2rem;
      }

      &.active{
        opacity: 1;
        visibility: visible;
      }
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
  }
`