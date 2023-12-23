import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Shorts from "../pages/Shorts";
import Subscriptions from './../pages/Subscriptions/index';
import History from '../pages/History/index';
import You from './../pages/You/index';
import Trending from "../pages/Trending";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/shorts",
                element: <Shorts />,
            },
            {
                path: '/feed/subscriptions',
                element: <Subscriptions />
            },
            {
                path: '/feed/you',
                element: <You />
            },
            {
                path: '/feed/history',
                element: <History />
            },
            {
                path: '/feed/trending',
                element: <Trending />
            }
        ]
    }
]);

export default router;