import React, { useEffect, useState } from 'react';
import useTransportContext from '../context/useTransportContext';
import logoOne from '../../assets/images/resources/logo-1.png';
import MainManuList from '../menu/MainManuList';
import { Link } from 'react-router';

const StrickyHeader: React.FC = () => {
    const { setIsSearch, setIsSidebar, setIsMobileManu } = useTransportContext();
    const [isStick, setIsSticky] = useState<boolean>(false); 
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`stricky-header stricked-menu main-menu ${isStick ? 'stricky-fixed' : ''}`}>
            <div className="sticky-header__content">
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
            </div>
        </div>
    );
};

export default StrickyHeader;