import React from 'react';
import { Link } from 'react-router';
import FadeInAdvanced from '../elements/FadeInAdvanced';
import SiteFooterThreeShape1 from '../../assets/images/shapes/site-footer-three-shape-1.png';
import SiteFooterThreeShape2 from '../../assets/images/shapes/site-footer-three-shape-2.png';
import FooterLogo from '../../assets/images/resources/footer-logo.png';
import FooterWidgetInstagramImg1 from '../../assets/images/project/footer-widget-instagram-img-1.jpg';
import FooterWidgetInstagramImg2 from '../../assets/images/project/footer-widget-instagram-img-2.jpg';
import FooterWidgetInstagramImg3 from '../../assets/images/project/footer-widget-instagram-img-3.jpg';
import FooterWidgetInstagramImg4 from '../../assets/images/project/footer-widget-instagram-img-4.jpg';
import FooterWidgetInstagramImg5 from '../../assets/images/project/footer-widget-instagram-img-5.jpg';
import FooterWidgetInstagramImg6 from '../../assets/images/project/footer-widget-instagram-img-6.jpg';


const FooterThree: React.FC = () => {
    return (
        <footer className="site-footer-three">
            <div className="site-footer-three__shape-1 float-bob-x">
                <img src={SiteFooterThreeShape1} />
            </div>
            <div className="site-footer-three__shape-2 float-bob-y">
                <img src={SiteFooterThreeShape2} />
            </div>
            <div className="container">
                <div className="site-footer-three__top">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced
                                variant={'fadeInUp'}
                                delay={100}
                            >
                                <div className="footer-widget-three__column footer-widget-three__about">
                                    <div className="footer-widget-three__logo">
                                        <Link to="/"><img src={FooterLogo} /></Link>
                                    </div>
                                    <p className="footer-widget-three__about-text">Eros vivamus platea nullam id consequat eu
                                        sociis
                                        lectus aliquam nibh auctor elitsed libero pharetra consequat and fad sociis conubia
                                        favorite to risus.</p>
                                    <div className="site-footer-three__social">
                                        <Link to="#"><i className="icon-facebook-app-symbol"></i></Link>
                                        <Link to="#"><i className="icon-twitter"></i></Link>
                                        <Link to="#"><i className="icon-instagram"></i></Link>
                                        <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeInAdvanced
                                variant={'fadeInUp'}
                                delay={200}
                            >
                                <div className="footer-widget-three__column footer-widget-three__usefull-link">
                                    <div className="footer-widget-three__title-box">
                                        <h3 className="footer-widget-three__title">Useful Links</h3>
                                    </div>
                                    <div className="footer-widget-three__link-box">
                                        <ul className="footer-widget-three__link list-unstyled">
                                            <li><Link to="/contact">Our Support</Link></li>
                                            <li><Link to="/about">System Status</Link></li>
                                            <li><Link to="/about">Knowledge base</Link></li>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/products">Porjects</Link></li>
                                            <li><Link to="/contact">Contact us</Link></li>
                                            <li><Link to="/blog-details">Write For Us</Link></li>
                                        </ul>
                                        <ul className="footer-widget-three__link footer-widget-three__link-2 list-unstyled">
                                            <li><Link to="/about">Ebooks</Link></li>
                                            <li><Link to="/about">Cloudways Users</Link></li>
                                            <li><Link to="/about">Group</Link></li>
                                            <li><Link to="/about">Customer Voice</Link></li>
                                            <li><Link to="/about">affiliate</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6">
                            <FadeInAdvanced
                                variant={'fadeInUp'}
                                delay={300}
                            >
                                <div className="footer-widget-three__column footer-widget-three__services">
                                    <div className="footer-widget-three__title-box">
                                        <h3 className="footer-widget-three__title">Our Services</h3>
                                    </div>
                                    <ul className="footer-widget-three__link list-unstyled">
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/international-transport">World Transport</Link></li>
                                        <li><Link to="/track-transport">Track Transport</Link></li>
                                        <li><Link to="/personal-delivery">Personal Delivery</Link></li>
                                        <li><Link to="/ocean-transport">Ocean Transport</Link></li>
                                        <li><Link to="/warehouse-facility">Warehouse Facility</Link></li>
                                        <li><Link to="/emergency-transport">Quick Transport</Link></li>
                                    </ul>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced
                                variant={'fadeInUp'}
                                delay={400}
                            >
                                <div className="footer-widget-three__column footer-widget-three__instagram">
                                    <div className="footer-widget-three__title-box">
                                        <h3 className="footer-widget-three__title">Instagram</h3>
                                    </div>
                                    <ul className="footer-widget-three__instagram-list list-unstyled clearfix">
                                        <li>
                                            <div className="footer-widget-three__instagram-img">
                                                <img src={FooterWidgetInstagramImg1} />
                                                <Link to="/project-details"><span className="fab fa-instagram"></span></Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-widget-three__instagram-img">
                                                <img src={FooterWidgetInstagramImg2} />
                                                <Link to="/project-details"><span className="fab fa-instagram"></span></Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-widget-three__instagram-img">
                                                <img src={FooterWidgetInstagramImg3} />
                                                <Link to="/project-details"><span className="fab fa-instagram"></span></Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-widget-three__instagram-img">
                                                <img src={FooterWidgetInstagramImg4} />
                                                <Link to="/project-details"><span className="fab fa-instagram"></span></Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-widget-three__instagram-img">
                                                <img src={FooterWidgetInstagramImg5} />
                                                <Link to="/project-details"><span className="fab fa-instagram"></span></Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-widget-three__instagram-img">
                                                <img src={FooterWidgetInstagramImg6} />
                                                <Link to="/project-details"><span className="fab fa-instagram"></span></Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </FadeInAdvanced>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-footer-two__bottom">
                <div className="container">
                    <div className="site-footer-two__bottom-inner">
                        <p className="site-footer-two__bottom-text">© Copywright 2026 by <Link to="#">tanspot</Link> All Rights Reserved.</p>
                        <ul className="list-unstyled site-footer-two__bottom-menu">
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

export default FooterThree;