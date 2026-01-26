import React from 'react';
import HeaderOne from '../components/headers/HeaderOne';
import { Outlet } from 'react-router';
import FooterOne from '../components/footers/FooterOne';
import StrickyHeader from '../components/headers/StrickyHeader';

const HomeOneLayout: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderOne /> 
            <Outlet /> 
            <FooterOne />
            <StrickyHeader />
        </div>
    );
};

export default HomeOneLayout;