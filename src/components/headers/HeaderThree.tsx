import React, { useState } from 'react';
import { Link } from 'react-router';
import CustomSelect from '../elements/CustomSelect';
import Logo1 from '../../assets/images/resources/logo-1.png';
import MainManuList from '../menu/MainManuList';
import useTransportContext from '../context/useTransportContext';
const HeaderThree: React.FC = () => {
    const { setIsSearch, setIsMobileManu } = useTransportContext();
    const [country, setCountry] = useState<string>("ENG");
    return (
        <header className="main-header-three">
            <div className="main-menu-three__top">
                <div className="container">
                    <div className="main-menu-three__top-inner">
                        <ul className="list-unstyled main-menu-three__contact-list">
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
                        </ul>
                        <div className="main-menu-three__top-right">
                            <div className="main-menu-three__language-switcher">
                                <div className="icon">
                                    <span className="fa fa-globe"></span>
                                </div>

                                <div className="language-switcher clearfix">
                                    <form className="clearfix" onSubmit={(e) => e.preventDefault()}>
                                        <div className="select-box clearfix">
                                            <CustomSelect
                                                optionArray={[
                                                    { id: 1, value: "ENG", label: "ENG" },
                                                    { id: 2, value: "FRA", label: "FRA" },
                                                    { id: 3, value: "GER", label: "GER" },
                                                    { id: 4, value: "BAN", label: "BAN" },
                                                ]}
                                                value={country}
                                                onChange={(v) => setCountry(v)}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="main-menu-three__social">
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-facebook"></i></Link>
                                <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu">
                <div className="main-menu-three__wrapper">
                    <div className="container">
                        <div className="main-menu-three__wrapper-inner">
                            <div className="main-menu-three__left">
                                <div className="main-menu-three__logo">
                                    <Link to="/"><img src={Logo1} /></Link>
                                </div>
                            </div>
                            <div className="main-menu-three__main-menu-box">
                                <Link to="#" className="mobile-nav__toggler" onClick={() => setIsMobileManu((pre: boolean) => !pre)}><i className="fa fa-bars"></i></Link>
                                <MainManuList />
                            </div>
                            <div className="main-menu-three__right">
                                <div className="main-menu-three__right-content">
                                    <div className="main-menu-three__search-cart-box">
                                        <div className="main-menu-three__search-cart-box">
                                            <div className="main-menu-three__search-box" onClick={() => setIsSearch((pre: boolean) => !pre)}>
                                                <Link to="#" className="main-menu-three__search searcher-toggler-box icon-search"></Link>
                                            </div>
                                            <div className="main-menu-three__cart-box">
                                                <Link to="/cart" className="main-menu-three__cart">
                                                    <span className="far fa-shopping-cart"></span>
                                                    <span className="main-menu-three__cart-count">02</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-menu-three__btn-box">
                                        <Link to="/contact" className="thm-btn">Track Order<span><i className="icon-right-arrow"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderThree;