import React from 'react';
import logoOne from '../../assets/images/resources/logo-1.png';
import MainManuList from '../menu/MainManuList';
import { Link } from 'react-router';
import useTransportContext from '../context/useTransportContext';

const HeaderOne: React.FC = () => {
    const { setIsSearch, setIsSidebar, setIsMobileManu } = useTransportContext();
    return (
        <header className="main-header">
            <div className="main-menu__top">
                <div className="main-menu__top-inner">
                    <ul className="list-unstyled main-menu__contact-list">
                        <li>
                            <div className="icon">
                                <i className="icon-phone-call"></i>
                            </div>
                            <div className="text">
                                <p><a href="tel:15502505260">+1 (550) 250 5260</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-email"></i>
                            </div>
                            <div className="text">
                                <p><a href="mailto:info@tanspot24.com">info@tanspot24.com</a>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-location1"></i>
                            </div>
                            <div className="text">
                                <p>4124 Cimmaron Road, CA 92806</p>
                            </div>
                        </li>
                    </ul>
                    <p className="main-menu__top-welcome-text">Welcome to Our Tanspot Office</p>
                    <div className="main-menu__top-right">
                        <div className="main-menu__top-time">
                            <div className="main-menu__top-time-icon">
                                <span className="fas fa-clock"></span>
                            </div>
                            <p className="main-menu__top-text">Mon - Fri: 09:00 - 05:00</p>
                        </div>
                        <div className="main-menu__social">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                        <div className="main-menu__left">
                            <div className="main-menu__logo">
                                <Link to="/"><img src={logoOne} alt="Logo" /></Link>
                            </div>
                        </div>
                        <div className="main-menu__main-menu-box">
                            <a href="#" className="mobile-nav__toggler" onClick={() => setIsMobileManu((pre: boolean) => !pre)}><i className="fa fa-bars"></i></a>
                            <MainManuList />
                        </div>
                        <div className="main-menu__right">
                            <div className="main-menu__call">
                                <div className="main-menu__call-icon">
                                    <i className="icon-phone-call"></i>
                                </div>
                                <div className="main-menu__call-content">
                                    <p className="main-menu__call-sub-title">Call Anytime</p>
                                    <h5 className="main-menu__call-number">
                                        <a href="tel:9288006780">+92 ( 8800 ) - 6780</a>
                                    </h5>
                                </div>
                            </div>
                            <div className="main-menu__search-cart-box">
                                <div className="main-menu__search-cart-box">
                                    <div className="main-menu__search-box" onClick={() => setIsSearch((pre: boolean) => !pre)}>
                                        <a href="#" className="main-menu__search searcher-toggler-box icon-search"></a>
                                    </div>
                                    <div className="main-menu__cart-box">
                                        <a href="cart.html" className="main-menu__cart">
                                            <span className="far fa-shopping-cart"></span>
                                            <span className="main-menu__cart-count">02</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="main-menu__nav-sidebar-icon" onClick={() => setIsSidebar((pre) => !pre)}>
                                <a className="navSidebar-button" href="#">
                                    <span className="icon-dots-menu-one"></span>
                                    <span className="icon-dots-menu-two"></span>
                                    <span className="icon-dots-menu-three"></span>
                                </a>
                            </div>
                            <div className="main-menu__btn-box">
                                <Link to="/contact" className="thm-btn">Track Order<span><i className="icon-right-arrow"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderOne;