import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import HomeOneLayout from '../layout/HomeOneLayout';
import SuspenseWrapper from '../components/elements/SuspenseWrapper';
import HomeTwoLayout from '../layout/HomeTwoLayout';
import HomeThreeLayout from '../layout/HomeThreeLayout';
const HomeOne = lazy(() => import('../home/HomeOne'));
const HomeTwo = lazy(() => import('../home/HomeTwo'));
const HomeThree = lazy(() => import('../home/HomeThree'));

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
            },
            {
                element: <HomeThreeLayout />,
                children: [
                    {
                        path: "home-three",
                        element: <SuspenseWrapper><HomeThree /></SuspenseWrapper>
                    }
                ]
            }
        ]
    }
])

export default ROUTER;