import React from 'react';
import { Link } from 'react-router';
import FooterLogo from '../../assets/images/resources/footer-logo.png'; 
import FadeInAdvanced from '../elements/FadeInAdvanced';
const FooterOne: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="site-footer__shape-bg" ></div>
            <div className="container">
                <div className="site-footer__top">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="footer-widget__column footer-widget__newsletter">
                                <h3 className="footer-widget__newsletter-title">Subscribe To Our Newsletter To<br />
                                    Get
                                    Latest Update</h3>
                                <form className="footer-widget__newsletter-form contact-form-validated" onSubmit={(e) => e.preventDefault()}>
                                    <div className="footer-widget__newsletter-form-input-box">
                                        <input type="email" placeholder="Enter email" name="email" />
                                    </div>
                                    <button type="submit" className="footer-widget__newsletter-btn thm-btn">Subscribe
                                        <span><i className="icon-right-arrow"></i></span>
                                    </button>
                                    <div className="result"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__middle">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={'fadeInUp'} delay={100} >
                                <div className="footer-widget__column footer-widget__about">
                                    <div className="footer-widget__logo">
                                        <Link to="/"><img src={FooterLogo} /></Link>
                                    </div>
                                    <p className="footer-widget__about-text">Secure other greater pleasures, or else he
                                        endures
                                        pains to avoid worse pains selection </p>
                                    <div className="site-footer__social">
                                        <Link to="#"><i className="icon-facebook-app-symbol"></i></Link>
                                        <Link to="#"><i className="icon-twitter1"></i></Link>
                                        <Link to="#"><i className="icon-instagram"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced
                                variant={'fadeInUp'}
                                delay={200}
                            >
                                <div className="footer-widget__column footer-widget__usefull-link">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Quick Links</h3>
                                    </div>
                                    <div className="footer-widget__link-box">
                                        <ul className="footer-widget__link list-unstyled">
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="/projects">Portfolio</Link></li>
                                            <li><Link to="/faq">Help & FAQs</Link></li>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced
                                variant={'fadeInUp'}
                                delay={300}
                            >
                                <div className="footer-widget__column footer-widget__services">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Our Services</h3>
                                    </div>
                                    <ul className="footer-widget__link list-unstyled">
                                        <li><Link to="/international-transport">International Shipping</Link>
                                        </li>
                                        <li><Link to="/ocean-transport">Ocean Freight</Link>
                                        </li>
                                        <li><Link to="/track-transport">Rail Freight</Link></li>
                                        <li><Link to="/emergency-transport">Road Freight</Link></li>
                                        <li><Link to="/track-transport">Local Truck Transport</Link>
                                        </li>
                                    </ul>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced
                                variant={'fadeInUp'}
                                delay={400}
                            >
                                <div className="footer-widget__contact-box">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Official info</h3>
                                    </div>
                                    <ul className="footer-widget__contact list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-phone-call"></span>
                                            </div>
                                            <div className="content">
                                                <p><a href="tel:885747546027">(88) 574 7546 027</a></p>
                                                <p><a href="tel:885747546027">(88) 574 7546 027</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-email"></span>
                                            </div>
                                            <div className="content">
                                                <p><a href="mailto:example@gmail.com">example@gmail.com</a>
                                                </p>
                                                <p><a href="mailto:example@gmail.com">example@gmail.com</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-location1"></span>
                                            </div>
                                            <div className="content">
                                                <p>4517 Washington Ave. Manchester, 95</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </FadeInAdvanced>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__bottom-text">© Copywright 2025 by <a
                            href="https://themeforest.net/user/dreamlayout">Tanspot.com</a> All Rights
                            Reserved.</p>
                        <ul className="list-unstyled site-footer__bottom-menu">
                            <li><Link to="/contact">Support</Link></li>
                            <li><Link to="/about">Terms and Condition</Link></li>
                            <li><Link to="/about">Privacy and Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;