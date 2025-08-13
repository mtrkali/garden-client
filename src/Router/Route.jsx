import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ExploreGarden from "../Components/ExploreGarden";
import BrowsTips from "../Components/BrowsTips";
import ShareTIp from "../Components/ShareTIp";
import MyTip from "../Components/MyTip";
import PrivateRoute from "../Provider/PrivateRoute";
import TermsService from "../Pages/TermsService";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {index: true,Component: Home},
            {
                path: 'login',
                Component: Login,
            },
            {
                path: 'register',
                Component: Register,
            },
            {
                path: 'explore', //tips share-tip my-tips
                Component: ExploreGarden
            },
            {
                path: 'tips',
                Component: BrowsTips
            },
            {
                path: 'share-tip',
                element: <PrivateRoute>
                    <ShareTIp></ShareTIp>
                </PrivateRoute>
            },
            {
                path: 'my-tips',
                element: <PrivateRoute>
                    <MyTip></MyTip>
                </PrivateRoute>
            },
            {
                path: 'terms',
                Component: TermsService,
            }
        ]
    }
]);
export default router;