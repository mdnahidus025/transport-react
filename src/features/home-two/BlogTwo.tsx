
import Blog21 from '../../assets/images/blog/blog-2-1.jpg';
import BlogOneAuthorImg1 from '../../assets/images/blog/blog-one-author-img-1.jpg';
import Blog22 from '../../assets/images/blog/blog-2-2.jpg';
import BlogOneAuthorImg2 from '../../assets/images/blog/blog-one-author-img-2.jpg';
import Blog23 from '../../assets/images/blog/blog-2-3.jpg';
import BlogOneAuthorImg3 from '../../assets/images/blog/blog-one-author-img-3.jpg';
import TextAnimation from '../../components/elements/TextAnimation';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import { Link } from 'react-router';

export default function BlogTwo() {
    return (
        <section className="blog-two">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-1">
                            <i className="fas fa-plane"></i>
                        </div>
                        <h6 className="section-title__tagline">Blog & News</h6>
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-2">
                            <i className="fas fa-plane"></i>
                        </div>
                    </div>
                    <h3 className="section-title__title">
                        <TextAnimation animationStyle="style1">
                            Latest <span>News</span> from Insight
                        </TextAnimation>
                    </h3>
                </div>
                <div className="row">
                    {/* Blog Two Single Start */}
                    <div className="col-xl-4 col-lg-6">
                        <FadeInAdvanced
                            variant={'fadeInLeft'}
                            delay={100}
                        >
                            <div className="blog-two__single">
                                <div className="blog-two__img">
                                    <img src={Blog21} />
                                    <div className="blog-two__plus">
                                        <Link to="/blog-details"><i className="icon-plus"></i></Link>
                                    </div>
                                    <div className="blog-two__tag">
                                        <Link to="/blog-details">Logistics</Link>
                                    </div>
                                </div>
                                <div className="blog-two__content">
                                    <ul className="blog-two__meta list-unstyled">
                                        <li>
                                            <Link to="/blog-details">
                                                <span className="fas fa-calendar-alt"></span>May 10, 2025
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog-details">
                                                <span className="fas fa-comments"></span>Comment
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-two__title"><Link to="/blog-details">Grow Your Following by the
                                        Building Cargo Service</Link></h3>
                                    <div className="blog-two__author-and-btn">
                                        <div className="blog-two__author-info">
                                            <div className="blog-two__author-img-box">
                                                <div className="blog-two__author-img">
                                                    <img src={BlogOneAuthorImg1} />
                                                </div>
                                            </div>
                                            <div className="blog-two__author-content">
                                                <h5>Janes Cooper</h5>
                                                <p>May 10, 2025</p>
                                            </div>
                                        </div>
                                        <div className="blog-two__arrow-box">
                                            <Link to="/blog-details" className="blog-two__arrow"><span
                                                className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/* Blog Two Single End */}
                    {/* Blog Two Single Start */}
                    <div className="col-xl-4 col-lg-6">
                        <FadeInAdvanced
                            variant={'fadeInUp'}
                            delay={300}
                        >
                            <div className="blog-two__single">
                                <div className="blog-two__img">
                                    <img src={Blog22} />
                                    <div className="blog-two__plus">
                                        <Link to="/blog-details"><i className="icon-plus"></i></Link>
                                    </div>
                                    <div className="blog-two__tag">
                                        <Link to="/blog-details">Logistics</Link>
                                    </div>
                                </div>
                                <div className="blog-two__content">
                                    <ul className="blog-two__meta list-unstyled">
                                        <li>
                                            <Link to="/blog-details">
                                                <span className="fas fa-calendar-alt"></span>May 10, 2025
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog-details">
                                                <span className="fas fa-comments"></span>Comment
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-two__title"><Link to="/blog-details">Cargo Follow Through the Best
                                        Supply Your Metal</Link></h3>
                                    <div className="blog-two__author-and-btn">
                                        <div className="blog-two__author-info">
                                            <div className="blog-two__author-img-box">
                                                <div className="blog-two__author-img">
                                                    <img src={BlogOneAuthorImg2} />
                                                </div>
                                            </div>
                                            <div className="blog-two__author-content">
                                                <h5>Kevin Cooper</h5>
                                                <p>May 10, 2025</p>
                                            </div>
                                        </div>
                                        <div className="blog-two__arrow-box">
                                            <Link to="/blog-details" className="blog-two__arrow"><span
                                                className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/* Blog Two Single End */}
                    {/* Blog Two Single Start */}
                    <div className="col-xl-4 col-lg-6">
                        <FadeInAdvanced
                            variant={'fadeInRight'}
                            delay={500}
                        >
                            <div className="blog-two__single">
                                <div className="blog-two__img">
                                    <img src={Blog23} />
                                    <div className="blog-two__plus">
                                        <Link to="/blog-details"><i className="icon-plus"></i></Link>
                                    </div>
                                    <div className="blog-two__tag">
                                        <Link to="/blog-details">Logistics</Link>
                                    </div>
                                </div>
                                <div className="blog-two__content">
                                    <ul className="blog-two__meta list-unstyled">
                                        <li>
                                            <Link to="/blog-details">
                                                <span className="fas fa-calendar-alt"></span>May 10, 2025
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog-details">
                                                <span className="fas fa-comments"></span>Comment
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-two__title"><Link to="/blog-details">How Will You Know Success
                                        When it Show Up?</Link></h3>
                                    <div className="blog-two__author-and-btn">
                                        <div className="blog-two__author-info">
                                            <div className="blog-two__author-img-box">
                                                <div className="blog-two__author-img">
                                                    <img src={BlogOneAuthorImg3} />
                                                </div>
                                            </div>
                                            <div className="blog-two__author-content">
                                                <h5>Alisa Fox</h5>
                                                <p>May 10, 2025</p>
                                            </div>
                                        </div>
                                        <div className="blog-two__arrow-box">
                                            <Link to="/blog-details" className="blog-two__arrow"><span
                                                className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    {/* Blog Two Single End */}
                </div>
            </div>
        </section>
    );
}
