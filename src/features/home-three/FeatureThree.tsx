import React from 'react';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import FeatureTwoShape1 from '../../assets/images/shapes/feature-two-shape-1.png';

import { Link } from 'react-router';

const FeatureThree: React.FC = () => {
    return (
        <section className="feature-two">
            <div className="container">
                <div className="row">
                    {/*Feature One Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <FadeInAdvanced
                            variant={'fadeInLeft'}
                            delay={100}
                        >
                            <div className="feature-two__single">
                                <div className="feature-two__single-inner">
                                    <div className="feature-two__shape-1">
                                        <img src={FeatureTwoShape1} />
                                    </div>
                                    <div className="feature-two__icon-and-title">
                                        <div className="feature-two__icon">
                                            <span className="icon-professional-services"></span>
                                        </div>
                                        <h3 className="feature-two__title"><Link to="/about">Quality <br />Guarantee</Link></h3>
                                    </div>
                                    <p className="feature-two__text">We always provide people a complete solution focused of
                                        any business.</p>
                                    <div className="feature-two__read-more">
                                        <Link to="/about">read more<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/*Feature One Single End*/}
                    {/*Feature One Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <FadeInAdvanced
                            variant={'fadeInUp'}
                            delay={200}
                        >
                            <div className="feature-two__single">
                                <div className="feature-two__single-inner">
                                    <div className="feature-two__shape-1">
                                        <img src={FeatureTwoShape1} />
                                    </div>
                                    <div className="feature-two__icon-and-title">
                                        <div className="feature-two__icon">
                                            <span className="icon-quote"></span>
                                        </div>
                                        <h3 className="feature-two__title"><Link to="/contact">License & <br /> Insurance</Link>
                                        </h3>
                                    </div>
                                    <p className="feature-two__text">We always provide people a complete solution focused of
                                        any business.</p>
                                    <div className="feature-two__read-more">
                                        <Link to="/contact">read more<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/*Feature One Single End*/}
                    {/*Feature One Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <FadeInAdvanced
                            variant={'fadeInRight'}
                            delay={300}
                        >
                            <div className="feature-two__single">
                                <div className="feature-two__single-inner">
                                    <div className="feature-two__shape-1">
                                        <img src={FeatureTwoShape1} />
                                    </div>
                                    <div className="feature-two__icon-and-title">
                                        <div className="feature-two__icon">
                                            <span className="icon-courier-services"></span>
                                        </div>
                                        <h3 className="feature-two__title"><Link to="/team-details">Certified <br /> Expert</Link>
                                        </h3>
                                    </div>
                                    <p className="feature-two__text">We always provide people a complete solution focused of
                                        any business.</p>
                                    <div className="feature-two__read-more">
                                        <Link to="/team-details">read more<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/*Feature One Single End*/}
                </div>
            </div>
        </section>
    );
};

export default FeatureThree;