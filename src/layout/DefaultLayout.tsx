import React from 'react';
import HeaderOne from '../components/headers/HeaderOne';
import { Outlet, useLocation } from 'react-router';
import FooterOne from '../components/footers/FooterOne';
import StrickyHeader from '../components/headers/StrickyHeader';
import SuspenseWrapper from '../components/elements/SuspenseWrapper';
import ErrorBoundary from '../components/elements/ErrorBoundary';

const DefaultLayout: React.FC = () => {
    const currentPath = useLocation().pathname;
    return (
        <ErrorBoundary name={`${currentPath} component`}>
            <div className="page-wrapper">
                <HeaderOne />
                <SuspenseWrapper>
                    <Outlet />
                </SuspenseWrapper>
                <FooterOne />
                <StrickyHeader />
            </div>
        </ErrorBoundary>
    );
};

export default DefaultLayout;