// @ts-ignore
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    scroll-padding-top: 10rem;

    &.light{

      body{
        transition: 0.5s;
        background: linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%);
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      /* footer.footer styles removed for light mode to keep gradient background */

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
    
    @media (max-width: 768px) {
      font-size: 60%;
    }
    
    @media (max-width: 480px) {
      font-size: 58%;
    }
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%);
    color: #FFFF;
    overflow-x: hidden;
    min-height: 100vh;
    
    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }

  html.light .software-engineer {
    color: #111 !important;
  }

  .logo{
    font-size: 3rem;
    color: #FFFF;
    // &::first-letter{
    //   color: var(--green);
    // }
  }
  
  /* Mobile-specific improvements */
  @media (max-width: 768px) {
    /* Improve touch targets */
    button, .button, a {
      min-height: 44px;
      min-width: 44px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    
    /* Prevent horizontal scroll */
    body {
      width: 100%;
      overflow-x: hidden;
    }
    
    /* Improve text readability */
    p, h1, h2, h3, h4, h5, h6 {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
  }
  
  /* Smooth scrolling for all devices */
  html {
    scroll-behavior: smooth;
  }
  
  /* Better focus indicators for accessibility */
  button:focus, a:focus, input:focus, textarea:focus {
    outline: 2px solid var(--green);
    outline-offset: 2px;
  }
  
  /* Prevent text selection on interactive elements */
  button, .button {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
`

export { GlobalStyle };