import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import HomeOneLayout from '../layout/HomeOneLayout';
import SuspenseWrapper from '../components/elements/SuspenseWrapper';
import HomeTwoLayout from '../layout/HomeTwoLayout';
import HomeThreeLayout from '../layout/HomeThreeLayout';
import DefaultLayout from '../layout/DefaultLayout';
import ErrorPage from '../page/error/ErrorPage';
import SignUp from '../page/authentication/SignUp';
import Login from '../page/authentication/Login';
import ErrorBoundary from '../components/elements/ErrorBoundary';
import HomeOneSinglePageLayout from '../layout/HomeOneSinglePageLayout';
import HomeTwoSinglePageLayout from '../layout/HomeTwoSinglePageLayout';
import HomeThreeSinglePageLayout from '../layout/HomeThreeSinglePageLayout';

const Contact = lazy(() => import('../page/contact/Contact'));
const BlogDetails = lazy(() => import('../page/blog-details/BlogDetails'));
const Blog = lazy(() => import('../page/blog/Blog'));
const BlogStandart = lazy(() => import('../page/blog-standard/BlogStandart'));
const BlogLeftSidebar = lazy(() => import('../page/blog-left-sidebar/BlogLeftSidebar'));
const BlogRightSidebar = lazy(() => import('../page/blog-right-sidebar/BlogRightSidebar'));
const CheckOut = lazy(() => import('../page/checkout/CheckOut'));
const Wishlist = lazy(() => import('../page/wishlist/Wishlist'));
const Products = lazy(() => import('../page/products/Products'));
const ProductDetails = lazy(() => import('../page/product-details/ProductDetails'));
const Cart = lazy(() => import('../page/cart/Cart'));
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
        element: <ErrorBoundary name='Root component App'><App /></ErrorBoundary>,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <HomeOneLayout />,
                children: [
                    {
                        path: "/",
                        element: <ErrorBoundary name='Home One'><SuspenseWrapper><HomeOne /></SuspenseWrapper></ErrorBoundary>
                    }
                ]
            },
            {
                path: "/single-page-home-one",
                element: <ErrorBoundary name='Home One Single Page'><SuspenseWrapper><HomeOneSinglePageLayout /></SuspenseWrapper></ErrorBoundary>
            },
            {
                element: <HomeTwoLayout />,
                children: [
                    {
                        path: "home-two",
                        element: <ErrorBoundary name='Home Two'><SuspenseWrapper><HomeTwo /></SuspenseWrapper></ErrorBoundary>,
                    }
                ]
            },
            {
                path: "/single-page-home-two",
                element: <ErrorBoundary name='Home Two Single Page'><SuspenseWrapper><HomeTwoSinglePageLayout /></SuspenseWrapper></ErrorBoundary>
            },
            {
                element: <HomeThreeLayout />,
                children: [
                    {
                        path: "home-three",
                        element: <ErrorBoundary name='Home Three'><SuspenseWrapper><HomeThree /></SuspenseWrapper></ErrorBoundary>
                    }
                ]
            },
            {
                path: "/single-page-home-three",
                element: <ErrorBoundary name='Home Three Single Page'><SuspenseWrapper><HomeThreeSinglePageLayout /></SuspenseWrapper></ErrorBoundary>
            },
            {
                element: <DefaultLayout />,
                children: [
                    { path: "about", element: <ErrorBoundary name="About Page"><About /></ErrorBoundary> },

                    { path: "team", element: <ErrorBoundary name="Team Page"><Team /></ErrorBoundary> },
                    { path: "team-details", element: <ErrorBoundary name="Team Details Page"><TeamDetails /></ErrorBoundary> },
                    { path: "projects", element: <ErrorBoundary name="Projects Page"><Projects /></ErrorBoundary> },
                    { path: "project-details", element: <ErrorBoundary name="Project Details Page"><ProjectDetails /></ErrorBoundary> },
                    { path: "testimonials", element: <ErrorBoundary name="Testimonials Page"><Testimonials /></ErrorBoundary> },
                    { path: "pricing", element: <ErrorBoundary name="Pricing Page"><Pricing /></ErrorBoundary> },
                    { path: "faqs", element: <ErrorBoundary name="FAQs Page"><Faqs /></ErrorBoundary> },

                    { path: "services", element: <ErrorBoundary name="Services Page"><Services /></ErrorBoundary> },

                    { path: "international-transport", element: <ErrorBoundary name="International Transport Page"><InternationlaTransport /></ErrorBoundary> },
                    { path: "track-transport", element: <ErrorBoundary name="Track Transport Page"><TrackTransport /></ErrorBoundary> },
                    { path: "personal-delivery", element: <ErrorBoundary name="Personal Delivery Page"><PersonalDelivery /></ErrorBoundary> },
                    { path: "ocean-transport", element: <ErrorBoundary name="Ocean Transport Page"><OceanTransport /></ErrorBoundary> },
                    { path: "warehouse-facility", element: <ErrorBoundary name="Warehouse Facility Page"><WarehouseFacility /></ErrorBoundary> },
                    { path: "emergency-transport", element: <ErrorBoundary name="Emergency Transport Page"><EmergencyTransport /></ErrorBoundary> },

                    { path: "products", element: <ErrorBoundary name="Products Page"><Products /></ErrorBoundary> },
                    { path: "product-details", element: <ErrorBoundary name="Product Details Page"><ProductDetails /></ErrorBoundary> },
                    { path: "cart", element: <ErrorBoundary name="Cart Page"><Cart /></ErrorBoundary> },
                    { path: "checkout", element: <ErrorBoundary name="Checkout Page"><CheckOut /></ErrorBoundary> },
                    { path: "wishlist", element: <ErrorBoundary name="Wishlist Page"><Wishlist /></ErrorBoundary> },

                    { path: "sign-up", element: <ErrorBoundary name="Sign Up Page"><SignUp /></ErrorBoundary> },
                    { path: "login", element: <ErrorBoundary name="Login Page"><Login /></ErrorBoundary> },

                    { path: "blog", element: <ErrorBoundary name="Blog Page"><Blog /></ErrorBoundary> },
                    { path: "blog-standard", element: <ErrorBoundary name="Blog Standard Page"><BlogStandart /></ErrorBoundary> },
                    { path: "blog-left-sidebar", element: <ErrorBoundary name="Blog Left Sidebar Page"><BlogLeftSidebar /></ErrorBoundary> },
                    { path: "blog-right-sidebar", element: <ErrorBoundary name="Blog Right Sidebar Page"><BlogRightSidebar /></ErrorBoundary> },
                    { path: "blog-details", element: <ErrorBoundary name="Blog Details Page"><BlogDetails /></ErrorBoundary> },

                    { path: "contact", element: <ErrorBoundary name="Contact Page"><Contact /></ErrorBoundary> },
                ]
            },
            {
                path: "*",
                element: <ErrorPage />
            },
        ]
    }
])

export default ROUTER;