import React from 'react';
import HeaderThree from '../components/headers/HeaderThree';
import { Outlet } from 'react-router';
import StrickyHeaderThree from '../components/headers/StrickyHeaderThree';
import FooterThree from '../components/footers/FooterThree';

const HomeThreeLayout: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderThree />
            <Outlet />
            <FooterThree />
            <StrickyHeaderThree />
        </div>
    );
};

export default HomeThreeLayout;