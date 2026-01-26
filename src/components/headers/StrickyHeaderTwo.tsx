import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Logo2 from '../../assets/images/resources/logo-2.png';
import MainManuList from '../menu/MainManuList';
import useTransportContext from '../context/useTransportContext';

const StrickyHeaderTwo: React.FC = () => {
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
        <div className={`stricky-header stricked-menu main-menu main-menu-two ${isStick ? 'stricky-fixed' : ''}`}>
            <div className="sticky-header__content">
                <div className="main-menu-two__wrapper">
                    <div className="main-menu-two__wrapper-inner">
                        <div className="main-menu-two__left">
                            <div className="main-menu-two__logo">
                                <Link to="/"><img src={Logo2} /></Link>
                            </div>
                        </div>
                        <div className="main-menu-two__main-menu-box">
                            <Link to="#" className="mobile-nav__toggler" onClick={() => setIsMobileManu((pre: boolean) => !pre)}><i className="fa fa-bars"></i></Link>
                            <MainManuList />
                        </div>
                        <div className="main-menu-two__right">
                            <div className="main-menu-two__right-content">
                                <div className="main-menu-two__call">
                                    <div className="main-menu-two__call-icon">
                                        <i className="icon-phone-call"></i>
                                    </div>
                                    <div className="main-menu-two__call-content">
                                        <p className="main-menu-two__call-sub-title">Call Anytime</p>
                                        <h5 className="main-menu-two__call-number"><a href="tel:9288006780">+92 ( 8800 ) -
                                            6780</a></h5>
                                    </div>
                                </div>
                                <div className="main-menu-two__search-cart-box">
                                    <div className="main-menu-two__search-cart-box">
                                        <div className="main-menu-two__search-box" onClick={() => setIsSearch((pre: boolean) => !pre)}>
                                            <Link to="#" className="main-menu-two__search searcher-toggler-box icon-search"></Link>
                                        </div>
                                        <div className="main-menu-two__cart-box">
                                            <Link to="/cart" className="main-menu-two__cart">
                                                <span className="far fa-shopping-cart"></span>
                                                <span className="main-menu-two__cart-count">02</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-menu-two__nav-sidebar-icon" onClick={() => setIsSidebar((pre) => !pre)}>
                                    <a className="navSidebar-button" href="#">
                                        <span className="icon-dots-menu-one"></span>
                                        <span className="icon-dots-menu-two"></span>
                                        <span className="icon-dots-menu-three"></span>
                                    </a>
                                </div>
                                <div className="main-menu-two__btn-box">
                                    <Link to="/contact" className="thm-btn">Track Order<span> <i className="icon-right-arrow"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrickyHeaderTwo;