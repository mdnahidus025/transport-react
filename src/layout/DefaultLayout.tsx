import React from 'react';
import HeaderOne from '../components/headers/HeaderOne';
import { Outlet } from 'react-router';
import FooterOne from '../components/footers/FooterOne';
import StrickyHeader from '../components/headers/StrickyHeader';
import SuspenseWrapper from '../components/elements/SuspenseWrapper';

const DefaultLayout: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderOne />
            <SuspenseWrapper>
                <Outlet />
            </SuspenseWrapper>
            <FooterOne />
            <StrickyHeader />
        </div>
    );
};

export default DefaultLayout;