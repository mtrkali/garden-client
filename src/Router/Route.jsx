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
import TipDetals from "../Pages/TipDetals";
import UpdateTips from "../Pages/UpdateTips";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: Home },
            {
                path: 'login',
                Component: Login,
            },
            {
                path: 'register',
                Component: Register,
            },
            {
                path: 'explore',
                Component: ExploreGarden,
                loader: () => fetch('http://localhost:3000/gardenaers'),
            },
            {
                path: 'tips',
                Component: BrowsTips,
                loader: () => fetch('http://localhost:3000/tips?availability=public'),
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
                </PrivateRoute>,
                loader: () => fetch('http://localhost:3000/tips?availability=all'),
            },
            {
                path: 'terms',
                Component: TermsService,
            },
            {
                path: 'tipDetails/:id',
                Component: TipDetals,
                loader: ({ params }) => fetch(`http://localhost:3000/tips/${params.id}`),
            },
            {
                path: 'updateTips',
                element: <PrivateRoute>
                    <UpdateTips></UpdateTips>
                </PrivateRoute>
            },
            {
                path: '*',
                Component: ErrorPage
            }
        ]
    }
]);
export default router;