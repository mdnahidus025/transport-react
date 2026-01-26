import React from 'react';
import HeaderTwo from '../components/headers/HeaderTwo';
import { Outlet } from 'react-router';
import FooterTwo from '../components/footers/FooterTwo';
import StrickyHeaderTwo from '../components/headers/StrickyHeaderTwo';

const HomeTwoLayout: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderTwo />
            <Outlet />
            <FooterTwo />
            <StrickyHeaderTwo />
        </div>
    );
};

export default HomeTwoLayout;