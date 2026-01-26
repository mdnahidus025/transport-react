
import PricingOneShape1 from '../../assets/images/shapes/pricing-one-shape-1.png';
import PricingOneShape2 from '../../assets/images/shapes/pricing-one-shape-2.png';
import TextAnimation from '../../components/elements/TextAnimation';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import { Link } from 'react-router';

export default function PricingTwo() {
    return (
        <section className="pricing-one">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-1">
                            <i className="fas fa-plane"></i>
                        </div>
                        <h6 className="section-title__tagline">Pricing Plan</h6>
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-2">
                            <i className="fas fa-plane"></i>
                        </div>
                    </div>
                    <h3 className="section-title__title">
                        <TextAnimation animationStyle="style2">
                            Our Effective and Affordable
                            <br /> <span>Pricing Plans</span>
                        </TextAnimation>
                    </h3>
                </div>
                <div className="row">
                    {/*Pricing One Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <FadeInAdvanced
                            variant={'fadeInLeft'}
                            delay={100}
                        >
                            <div className="pricing-one__single">
                                <div className="pricing-one__single-inner">
                                    <div className="pricing-one__shape-1"
                                        style={{ backgroundImage: `url(${PricingOneShape1})` }}></div>
                                    <div className="pricing-one__shape-2"
                                        style={{ backgroundImage: `url(${PricingOneShape2})` }}></div>
                                    <div className="pricing-one__icon">
                                        <span className="icon-shipment"></span>
                                    </div>
                                    <p className="pricing-one__title">Road Cargo</p>
                                    <div className="pricing-one__price-box">
                                        <h3 className="pricing-one__price">$199.99 <span>/Mo</span></h3>
                                    </div>
                                    <ul className="list-unstyled pricing-one__price-list">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Pickup and delivery</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Custom coverage</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Customer Management</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Deliver in 2-3 days</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>24 Hours Support</p>
                                        </li>
                                    </ul>
                                    <div className="pricing-one__btn-box">
                                        <Link to="/pricing" className="thm-btn">Choose Plan<span><i
                                            className="icon-right-arrow"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/*Pricing One Single End*/}
                    {/*Pricing One Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <FadeInAdvanced
                            variant={'fadeInUp'}
                            delay={300}
                        >
                            <div className="pricing-one__single">
                                <div className="pricing-one__single-inner">
                                    <div className="pricing-one__shape-1"
                                        style={{ backgroundImage: `url(${PricingOneShape1})` }}></div>
                                    <div className="pricing-one__shape-2"
                                        style={{ backgroundImage: `url(${PricingOneShape2})` }}></div>
                                    <div className="pricing-one__icon">
                                        <span className="icon-international-shipping"></span>
                                    </div>
                                    <p className="pricing-one__title">Sea Freight</p>
                                    <div className="pricing-one__price-box">
                                        <h3 className="pricing-one__price">$299.99 <span>/Mo</span></h3>
                                    </div>
                                    <ul className="list-unstyled pricing-one__price-list">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Pickup and delivery</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Custom coverage</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Customer Management</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Deliver in 2-3 days</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>24 Hours Support</p>
                                        </li>
                                    </ul>
                                    <div className="pricing-one__btn-box">
                                        <Link to="/pricing" className="thm-btn">Choose Plan<span><i
                                            className="icon-right-arrow"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/*Pricing One Single End*/}
                    {/*Pricing One Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <FadeInAdvanced
                            variant={'fadeInRight'}
                            delay={500}
                        >
                            <div className="pricing-one__single">
                                <div className="pricing-one__single-inner">
                                    <div className="pricing-one__shape-1"
                                        style={{ backgroundImage: `url(${PricingOneShape1})` }}></div>
                                    <div className="pricing-one__shape-2"
                                        style={{ backgroundImage: `url(${PricingOneShape2})` }}></div>
                                    <div className="pricing-one__icon">
                                        <span className="icon-ship"></span>
                                    </div>
                                    <p className="pricing-one__title">Ship Cargo</p>
                                    <div className="pricing-one__price-box">
                                        <h3 className="pricing-one__price">$399.99 <span>/Mo</span></h3>
                                    </div>
                                    <ul className="list-unstyled pricing-one__price-list">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Pickup and delivery</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Custom coverage</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Customer Management</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Deliver in 2-3 days</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>24 Hours Support</p>
                                        </li>
                                    </ul>
                                    <div className="pricing-one__btn-box">
                                        <Link to="/pricing" className="thm-btn">Choose Plan<span><i
                                            className="icon-right-arrow"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/*Pricing One Single End*/}
                </div>
            </div>
        </section>
    );
}
