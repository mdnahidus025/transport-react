import React from 'react';
import BannerOneImg1 from '../../assets/images/resources/banner-one-img-1.png';
import BannerOneShape3 from '../../assets/images/shapes/banner-one-shape-3.png';
import BannerOneReview11 from '../../assets/images/resources/banner-one-review-1-1.jpg';
import BannerOneReview12 from '../../assets/images/resources/banner-one-review-1-2.jpg';
import BannerOneReview13 from '../../assets/images/resources/banner-one-review-1-3.jpg';
import TypingEffect from '../../components/elements/TypingEffect';
import { Link } from 'react-router';
import CounterUp from '../../components/elements/CounterUp'; 

const BannerOne: React.FC = () => {
    return (
        <section className="banner-one">
            <div className="banner-one__pattern"></div>
            <div className="banner-one__img" >
                <img src={BannerOneImg1} />
            </div>
            <div className="banner-one__shape-3 float-bob-y">
                <img src={BannerOneShape3} />
            </div>
            <div className="banner-one__line-shpae1"></div>
            <div className="banner-one__line-shpae2"></div>
            <div className="container">
                <div className="banner-one__inner">
                    <div className="banner-one__content-box">
                        <p className="banner-one__sub-title">Specialist In Modern Transportation</p>
                        <h2 className="banner-one__title">Modern Logistic <br />
                            <TypingEffect strings={["Transport", "Provider", "Services"]} />
                        </h2>
                        <p className="banner-one__text">Logistic service provider company plays a pivotal role
                            in the global <br /> supply chain ecosystem managing.</p>
                        <div className="banner-one__btn-and-review-box">
                            <div className="banner-one__btn-box">
                                <Link to="/about" className="thm-btn">Discover More
                                    <span><i className="icon-right-arrow"></i></span>
                                </Link>
                            </div>
                            <div className="banner-one__review-box">
                                <ul className="clearfix">
                                    <li>
                                        <div className="img-box"><img
                                            src={BannerOneReview11} alt="#" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box"><img
                                            src={BannerOneReview12} alt="#" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box"><img
                                            src={BannerOneReview13} alt="#" />
                                        </div>
                                    </li>
                                </ul>

                                <div className="text-box">
                                    <h2>Customer Satisfied</h2>
                                    <p>4.8 (<CounterUp ending={15} />k Reviews)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerOne;