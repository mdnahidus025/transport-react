import React from 'react';
import { Link } from 'react-router';
import headerImg from "../../assets/images/resources/page-header-img-1.png"
import headerShape from "../../assets/images/shapes/page-header-shape-1.png"
interface ThisBanner {
    title: string;
    titleLink?: string;
    subTitle?: string;
}  
const DefaultBanner: React.FC<ThisBanner> = ({ title, titleLink = "", subTitle = "" }) => {
    return (
        <section className="page-header">
            <div className="page-header__bg" >
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <div className="page-header__img-1">
                        <img src={headerImg} alt='Image'/>
                    </div>
                    <div className="page-header__shape-1 float-bob-y">
                        <img src={headerShape} alt='Image'/>
                    </div>
                    <h3>{title}</h3>
                    <div className="thm-breadcrumb__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><span className="fas fa-angle-right"></span></li>
                            <li><Link to={titleLink ? titleLink : "#"}>{title}</Link></li>
                            {
                                subTitle && <>
                                    <li><span className="fas fa-angle-right"></span></li>
                                    <li>{subTitle}</li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DefaultBanner;