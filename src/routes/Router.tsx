import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import HomeOneLayout from '../layout/HomeOneLayout';
const HomeOne = lazy(() => import('../home/HomeOne')); 
import SuspenseWrapper from '../components/elements/SuspenseWrapper';
import HomeTwoLayout from '../layout/HomeTwoLayout';
const HomeTwo = lazy(() => import('../home/HomeTwo'));

const ROUTER = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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
            }
        ]
    }
])

export default ROUTER;