import React from 'react';
import DefaultBanner from '../../features/default-banner/DefaultBanner';
import AboutOne from '../../features/home-one/AboutOne';
import SlidingTextOne from '../../features/home-one/SlidingTextOne';
import ServicesOne from '../../features/home-one/ServicesOne';
import FindTransport from '../../features/home-two/FindTransport';
import TestimonialThree from '../../features/home-three/TestimonialThree';
import DownloadAppOne from '../../features/home-one/DownloadAppOne';
import TeamTwo from '../../features/home-two/TeamTwo';
import BlogTwo from '../../features/home-two/BlogTwo';
import BrandOne from '../../features/home-one/BrandOne';

const About: React.FC = () => {
    return (
        <>
            <DefaultBanner title='About' />
            <AboutOne />
            <SlidingTextOne />
            <ServicesOne />
            <FindTransport />
            <TestimonialThree />
            <DownloadAppOne />
            <TeamTwo />
            <BlogTwo />
            <BrandOne /> 
        </>
    );
};

export default About;