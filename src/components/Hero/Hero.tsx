// @ts-ignore
import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/A.png"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
// import emailIcon from '../../assets/email-icon.svg'
import Hello from '../../assets/Hello.gif'

export function Hero() {
  return (
    <>
      <Container id="home">
        <div className="hero-text">
          {/* @ts-ignore */}
          <ScrollAnimation animateIn="fadeInUp">
            <p>HEY <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
          </ScrollAnimation>
          {/* @ts-ignore */}
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <h1>Ramsha Rana</h1>
          </ScrollAnimation>
          {/* @ts-ignore */}
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
            <h3 className="software-engineer">Software Engineer</h3>
          </ScrollAnimation>
          {/* @ts-ignore */}
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
            <p className="small-resume">3+Years Experience</p>
          </ScrollAnimation>
          {/* @ts-ignore */}
          <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
            <BrowserRouter>
              <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
            </BrowserRouter>
          </ScrollAnimation>
          {/* @ts-ignore */}
          <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
        <div className="social-media"><a
          href="https://www.linkedin.com/in/ramsha-rana-378669218/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
          <a
            href="mailto:ramshamahmoodkhan@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/Images/google-gmail-logo-png_seeklogo-273201.png" alt="Gmail" style={{ width: '32px', height: '36px', verticalAlign: 'middle' }} />
          </a>
        </div>
          </ScrollAnimation>
        </div>
        <div className="hero-image">
          {/* @ts-ignore */}
          <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
            <img src={Illustration} alt="Ilustração" />
          </ScrollAnimation>
        </div>
      </Container>
    </>
  )
}