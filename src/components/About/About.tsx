// @ts-ignore
import { Container } from "./styles";
import { useEffect, useRef } from "react";
import VinayakSingh from "../../assets/VinayakSingh.webp";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        (parallaxRef.current as HTMLDivElement).style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container id="about">
      <div className="about-text">
        {/* @ts-ignore */}
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        {/* @ts-ignore */}
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Ramsha Rana, an enthusiastic Software Engineer skilled in web development,QA Testing, and scalable software solutions
          </p>
        </ScrollAnimation>
        {/* @ts-ignore */}
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          I build responsive web apps, ensure quality through rigorous SQA testing, and deliver robust services
          </p>
        </ScrollAnimation>
        {/* @ts-ignore */}
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I also work with CMS platforms like WordPress and Shopify to streamline content management.
          </p>
        </ScrollAnimation>
        {/* @ts-ignore */}
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> Software Engineer</h4>
            <p>FAST National University of Computer and Emerging Sciences</p>
            
          </div>
        </ScrollAnimation>

        {/* @ts-ignore */}
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">

             <h3>Experience:</h3>
             <h4>Automation SQA Engineer </h4>
             
            <p>NetixSol|  May 2024 - Present</p>
            <br />
          
 
             <h4>Software Development Manager </h4>
            <p>Strategic Soft LLC|  February 2024 - January 2025</p>
            <br />
            

            <h4>Frontend Developer </h4>
            <p>DataLime (Pvt.) Ltd.|  July 2023 - August 2023</p>
            <br />
            

            <h4>Technical Freelance </h4>
            <p>upwork|  April 2022 - August 2023</p>
            <br />
            

            <h4>Web Designer </h4>
            <p>MAKSTORE LLC|  February 2022 - February 2023
            </p>
            <br />
            


            <h4>Educational Freelancer </h4>
            <p>TeacherOn.com |  January 2021 - March 2023
            </p>
          <br />

            <h4>SQA Teaching Assistant  </h4>
            <p>FAST  National University of Computer and Emerging Sciences | January 2021 - June 2021
            </p>
           <br />


            




          </div>




        </ScrollAnimation>







        {/* @ts-ignore */}
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            {/* @ts-ignore */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            {/* @ts-ignore */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            {/* @ts-ignore */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            {/* @ts-ignore */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            {/* @ts-ignore */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            {/* @ts-ignore */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            {/* @ts-ignore */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            {/* @ts-ignore */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            {/* @ts-ignore */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            {/* @ts-ignore */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            {/* @ts-ignore */}
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image" ref={parallaxRef}>
        {/* @ts-ignore */}
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src="/Images/ME.png" alt="Ramsha Rana" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
