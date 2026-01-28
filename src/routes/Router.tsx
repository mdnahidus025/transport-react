import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import HomeOneLayout from '../layout/HomeOneLayout';
import SuspenseWrapper from '../components/elements/SuspenseWrapper';
import HomeTwoLayout from '../layout/HomeTwoLayout';
import HomeThreeLayout from '../layout/HomeThreeLayout';
import DefaultLayout from '../layout/DefaultLayout';
import ErrorPage from '../page/error/ErrorPage';   

const EmergencyTransport = lazy(() => import('../page/emergency-transport/EmergencyTransport'));
const WarehouseFacility = lazy(() => import('../page/warehouse-facility/WarehouseFacility'));
const OceanTransport = lazy(() => import('../page/ocean-transport/OceanTransport'));
const PersonalDelivery = lazy(() => import('../page/personal-delivery/PersonalDelivery'));
const TrackTransport = lazy(() => import('../page/track-transport/TrackTransport'));
const InternationlaTransport = lazy(() => import('../page/international-transport/InternationlaTransport'));
const Services = lazy(() => import('../page/services/Services'));
const Testimonials = lazy(() => import('../page/testimonials/Testimonials'));
const Faqs = lazy(() => import('../page/faqs/Faqs'));
const Pricing = lazy(() => import('../page/pricing/Pricing'));
const Projects = lazy(() => import('../page/projects/Projects'));
const ProjectDetails = lazy(() => import('../page/project-details/ProjectDetails'));
const TeamDetails = lazy(() => import('../page/team-details/TeamDetails'));
const Team = lazy(() => import('../page/team/Team'));
const About = lazy(() => import('../page/about/About'));
const HomeOne = lazy(() => import('../home/HomeOne'));
const HomeTwo = lazy(() => import('../home/HomeTwo'));
const HomeThree = lazy(() => import('../home/HomeThree'));

const ROUTER = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <HomeOneLayout />,
                children: [
                    {
                        path: "/",
                        element: <SuspenseWrapper><HomeOne /></SuspenseWrapper>
                    }
                ]
            },
            {
                element: <HomeTwoLayout />,
                children: [
                    {
                        path: "home-two",
                        element: <SuspenseWrapper><HomeTwo /></SuspenseWrapper>,
                    }
                ]
            },
            {
                element: <HomeThreeLayout />,
                children: [
                    {
                        path: "home-three",
                        element: <SuspenseWrapper><HomeThree /></SuspenseWrapper>
                    }
                ]
            },
            {
                path: "*",
                element: <ErrorPage />
            },
            {
                element: <DefaultLayout />,
                children: [
                    {
                        path: "about",
                        element: <About />
                    },
                    {
                        path: "team",
                        element: <Team />
                    },
                    {
                        path: "team-details",
                        element: <TeamDetails />
                    },
                    {
                        path: "projects",
                        element: <Projects />
                    },
                    {
                        path: "project-details",
                        element: <ProjectDetails />
                    },
                    {
                        path: "testimonials",
                        element: <Testimonials />
                    },
                    {
                        path: "pricing",
                        element: <Pricing />
                    },
                    {
                        path: "faqs",
                        element: <Faqs />
                    },
                    {
                        path: "services",
                        element: <Services />
                    },
                    {
                        path: "/international-transport",
                        element: <InternationlaTransport />
                    },
                    {
                        path: "/track-transport",
                        element: <TrackTransport />
                    },
                    {
                        path: "/personal-delivery",
                        element: <PersonalDelivery />
                    },
                    {
                        path: "/ocean-transport",
                        element: <OceanTransport />
                    },
                    {
                        path: "/warehouse-facility",
                        element: <WarehouseFacility />
                    },
                    {
                        path: "/emergency-transport",
                        element: <EmergencyTransport />
                    },
                ]
            }
        ]
    }
])

export default ROUTER;