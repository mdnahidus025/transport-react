import React from 'react';
import { Link } from 'react-router';
import AboutOneShape1 from '../../assets/images/shapes/about-one-shape-1.png';
import AboutOneShape2 from '../../assets/images/shapes/about-one-shape-2.png';
import AboutOneAuthorSign from '../../assets/images/resources/about-one-author-sign.png';
import AboutOneImg1 from '../../assets/images/resources/about-one-img-1.jpg';
import AboutOneReviewImg11 from '../../assets/images/resources/about-one-review-img-1-1.jpg';
import AboutOneReviewImg12 from '../../assets/images/resources/about-one-review-img-1-2.jpg';
import AboutOneReviewImg13 from '../../assets/images/resources/about-one-review-img-1-3.jpg';
import AboutOneReviewImg14 from '../../assets/images/resources/about-one-review-img-1-4.jpg';
import AboutOneAuthorImg1 from '../../assets/images/resources/about-one-author-img-1.jpg';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import CounterUp from '../../components/elements/CounterUp';
import TextAnimation from '../../components/elements/TextAnimation';
import useTransportContext from '../../components/context/useTransportContext';

const AboutOne: React.FC = () => {
    const { handleVideoClick } = useTransportContext();
    return (
        <section className="about-one" id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left">
                            <FadeInAdvanced
                                variant={'slideInLeft'}
                                delay={100}
                                duration={2500}
                            >
                                <div className="about-one__img-box">
                                    <div className="about-one__img">
                                        <img src={AboutOneImg1} />
                                    </div>
                                    <div className="about-one__review-and-experience-box">
                                        <div className="about-one__review-box">
                                            <ul className="list-unstyled about-one__review-list">
                                                <li>
                                                    <div className="about-one__review-img">
                                                        <img src={AboutOneReviewImg11} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="about-one__review-img">
                                                        <img src={AboutOneReviewImg12} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="about-one__review-img">
                                                        <img src={AboutOneReviewImg13} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="about-one__review-img">
                                                        <img src={AboutOneReviewImg14} />
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="about-one__review-star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                            </div>
                                            <p className="about-one__review-text">Clients 4.8 (3,567 Reviews)</p>
                                        </div>
                                        <div className="about-one__experience-box">
                                            <div className="about-one__experience-count">
                                                <h3  ><CounterUp ending={35} /></h3>
                                                <span>+</span>
                                            </div>
                                            <p className="about-one__experience-count-text">Years Of <br /> Experience</p>
                                        </div>
                                        <div className="about-one__video-link">
                                            <a href="#" className="video-popup" onClick={(e) => handleVideoClick(e, `https://www.youtube.com/watch?v=rbFoRH2deeY`)}>
                                                <div className="about-one__video-icon">
                                                    <span className="fa fa-play"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </a>
                                            <h4 className="about-one__video-title">Watch Video</h4>
                                        </div>
                                    </div>
                                    <div className="about-one__circle-text">
                                        <div className="about-one__round-text-box">
                                            <div className="inner">
                                                <div className="about-one__curved-circle rotate-me">
                                                    {"WELCOME TO OUR COMPANY WORKING Poperly SINCE 2002".split("").map((char, index) => (
                                                        <span key={index}
                                                            style={{
                                                                transform: `rotate(${index * 9.72}deg)`,
                                                                position: 'absolute',
                                                                transformOrigin: "center 7.33333em",
                                                                left: '50%',
                                                                marginLeft: "-0.4em"
                                                            }}>
                                                            {char}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="overlay-icon-box">
                                                <Link to="/about"><i className="icon-plane"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-one__shape-1">
                                        <img src={AboutOneShape1} />
                                    </div>
                                    <div className="about-one__shape-2">
                                        <img src={AboutOneShape2} />
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline-border"></span>
                                    <div className="section-title__shape-1">
                                        <i className="fas fa-plane"></i>
                                    </div>
                                    <h6 className="section-title__tagline">ABOUT US</h6>
                                    <span className="section-title__tagline-border"></span>
                                    <div className="section-title__shape-2">
                                        <i className="fas fa-plane"></i>
                                    </div>
                                </div>
                                <h3 className="section-title__title">
                                    <TextAnimation animationStyle="style2">
                                        Our Expertise Stands in <span>Logistics Solutions</span>
                                    </TextAnimation>
                                </h3>
                            </div>
                            <p className="about-one__text">Logistic service provider company plays a pivotal role in the
                                global supply chain ecosystem by efficiently managing the movement of goods from origin
                                to final destination. These companies offer a diverse.</p>
                            <div className="about-one__point-box">
                                <ul className="about-one__point">
                                    <li>
                                        <div className="about-one__point-icon">
                                            <span className="icon-worldwide-shipping-1"></span>
                                        </div>
                                        <div className="about-one__point-content">
                                            <h4>Worldwide Service</h4>
                                            <p>Logistic service provider company plays a pivotal role in the global</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="about-one__point-icon">
                                            <span className="icon-24-hours-service"></span>
                                        </div>
                                        <div className="about-one__point-content">
                                            <h4>24/7 Online Support</h4>
                                            <p>Logistic service provider company plays a pivotal role in the global</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-one__point-box-two">
                                <ul className="about-one__point-two">
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <div className="text">
                                            <p>Quality Control System</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <div className="text">
                                            <p>Affrodable Cost</p>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="about-one__point-two about-one__point-two--three">
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <div className="text">
                                            <p>100% Satisfaction Guarantee</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <div className="text">
                                            <p>On Time Delivery</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-one__btn-and-author-box">
                                <div className="about-one__btn-box">
                                    <Link to="/about" className="thm-btn">Read More
                                        <span><i className="icon-right-arrow"></i></span>
                                    </Link>
                                </div>
                                <div className="about-one__author-box">
                                    <div className="about-one__author-details">
                                        <div className="about-one__author-img-box">
                                            <div className="about-one__author-img">
                                                <img src={AboutOneAuthorImg1} />
                                            </div>
                                        </div>
                                        <div className="about-one__author-content">
                                            <h4>Dainel Brain</h4>
                                            <p>Co-Founder</p>
                                        </div>
                                    </div>
                                    <div className="about-one__author-sign">
                                        <img src={AboutOneAuthorSign} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutOne;