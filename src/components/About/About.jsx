import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import {Link } from 'gatsby';
const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Start learning code June of 2019 through Free Code Camp with the basics. HTML, CSS, Java Script, Bootstrap and React. Have two certificates through FCC. One in responsive web design and another for Java Script and Algorithoms.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Started working with Banyan Labs in July of 2020 where I have been on OJT(On The Job Training). Since then I have been part of two projects assiciated with Banyan Labs and Niaco. Roman Roofs where I was part of a small maned team working with Gatsby, React and CMS and the TODO list with a large scale mobile app with Niacco using React Native. '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'I have other independant projects avaliable on github such as Mobile front end where I started my own e-commerce/ chat app for a business me and a friend are in.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      to='/resume'
                    >
                      Resume
                    </Link>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
