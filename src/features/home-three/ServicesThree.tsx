import { Link } from "react-router"
import FadeInAdvanced from "../../components/elements/FadeInAdvanced"
import TextAnimation from "../../components/elements/TextAnimation"


export default function ServicesThree() {
    return (
        <section className="services-three">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-1">
                            <i className="fas fa-plane"></i>
                        </div>
                        <h6 className="section-title__tagline">Our Services</h6>
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-2">
                            <i className="fas fa-plane"></i>
                        </div>
                    </div>
                    <h3 className="section-title__title">
                        <TextAnimation animationStyle="style1">
                            Efficient Logistics Services <br />
                            <span>for Your Business</span>
                        </TextAnimation>
                    </h3>
                </div>
                <div className="row">
                    {/*Services Three Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeInAdvanced
                            variant={'fadeInLeft'}
                            delay={100}
                        >
                            <div className="services-three__single">
                                <div className="services-three__single-inner text-center">
                                    <div className="services-three__single-icon">
                                        <span className="icon-worldwide-shipping"></span>
                                    </div>
                                    <h3><Link to="/international-transport">International Shipping</Link></h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>

                                    <div className="services-three__btn-box">
                                        <Link to="/international-transport">Read More <span
                                            className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeInAdvanced
                            variant={'fadeInUp'}
                            delay={200}
                        >
                            <div className="services-three__single">
                                <div className="services-three__single-inner text-center">
                                    <div className="services-three__single-icon">
                                        <span className="icon-shipment"></span>
                                    </div>
                                    <h3><Link to="/ocean-transport">Ocean Freight</Link></h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>

                                    <div className="services-three__btn-box">
                                        <Link to="/ocean-transport">Read More <span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeInAdvanced
                            variant={'fadeInRight'}
                            delay={300}
                        >
                            <div className="services-three__single">
                                <div className="services-three__single-inner text-center">
                                    <div className="services-three__single-icon">
                                        <span className="icon-delivery-man"></span>
                                    </div>
                                    <h3><Link to="/emergency-transport">Rail Freight</Link></h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>

                                    <div className="services-three__btn-box">
                                        <Link to="/emergency-transport">Read More <span
                                            className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeInAdvanced
                            variant={'fadeInLeft'}
                            delay={400}
                        >
                            <div className="services-three__single">
                                <div className="services-three__single-inner text-center">
                                    <div className="services-three__single-icon">
                                        <span className="icon-truck"></span>
                                    </div>
                                    <h3><Link to="/track-transport">Road Freight</Link></h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>

                                    <div className="services-three__btn-box">
                                        <Link to="/track-transport">Read More <span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeInAdvanced
                            variant={'fadeInUp'}
                            delay={500}
                        >
                            <div className="services-three__single">
                                <div className="services-three__single-inner text-center">
                                    <div className="services-three__single-icon">
                                        <span className="icon-shipment"></span>
                                    </div>
                                    <h3><Link to="/track-transport">Local Truck Transport</Link></h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>

                                    <div className="services-three__btn-box">
                                        <Link to="/track-transport">Read More <span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeInAdvanced
                            variant={'fadeInRight'}
                            delay={600}
                        >
                            <div className="services-three__single">
                                <div className="services-three__single-inner text-center">
                                    <div className="services-three__single-icon">
                                        <span className="icon-delivery-man"></span>
                                    </div>
                                    <h3><Link to="/personal-delivery">Fast Personal Delivery</Link></h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>

                                    <div className="services-three__btn-box">
                                        <Link to="/personal-delivery">Read More <span
                                            className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/*Services Three Single End*/}
                </div>
            </div>
        </section>
    );
}
